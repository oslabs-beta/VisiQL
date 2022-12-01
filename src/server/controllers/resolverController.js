const resolverController = {};

resolverController.genResolver = (req, res, next) => {
  const fnKeys = res.locals.parsedFnKeys;
  const primKeys = { ...res.locals.parsedPrimaryKeys };
  const databaseInfo = res.locals.dbSchema.tables;
  let exportString = 'module.exports = { Query,';
  let resolverString = 'Query: {\n';
  let databaseName = res.locals.databaseName || 'dbModelName';

  for (let table in databaseInfo) {
    // run for each table in database
    let logic = '  try {\n';
    logic += `      const queryStr = 'SELECT * FROM ${table}';\n      const { rows } = await ${databaseName}.query(queryStr);\n      return rows;\n`;
    logic += `    } catch (err) {\n      console.log(err)\n    }`;
    resolverString += `  ${table}: async (parent, args, context) => {\n  ${logic}\n  },\n`;

    // below: add resolver for singular of table name (if plural)

    // if table name ends in consonant + "s"
    if (
      /[^aeiou]/i.test(table[table.length - 2]) &&
      /s/i.test(table[table.length - 1])
    ) {
      const tableSingular = table.slice(0, -1);
      let singLogic = '  try {\n';
      singLogic += `      const queryStr = \`SELECT * FROM ${table} WHERE _id = $1\`;\n      const values = [ args._id ]\n      const { rows } = await ${databaseName}.query(queryStr, values);\n      return rows[1] ? rows : rows[0];\n`;
      singLogic += `    } catch (err) {\n      console.log(err);\n    }`;
      resolverString += `  ${tableSingular}: async (parent, args, context) => {\n  ${singLogic}\n  },\n`;
    }
    // accounting for if table name is people
    else if (table === 'people') {
      const tableSingular = 'person';
      let singLogic = '  try {\n';
      singLogic += `      const queryStr = \`SELECT * FROM ${table} WHERE _id = $1\`;\n      const values = [ args._id ]\n      const { rows } = await ${databaseName}.query(queryStr, values);\n      return rows[1] ? rows : rows[0];\n`;
      singLogic += `    } catch (err) {\n      console.log(err);\n    }`;
      resolverString += `  ${tableSingular}: async (parent, args, context) => {\n  ${singLogic}\n  },\n`;
    }
    // accounting for if table name ends in "ies" like "species"
    else if (table.slice(table.length - 3) === 'ies') {
      const tableSingular = table.slice(0, -1);
      let singLogic = '  try {\n';
      singLogic += `      const queryStr = \`SELECT * FROM ${table} WHERE _id = $1\`;\n      const values = [ args._id ]\n      const { rows } = await ${databaseName}.query(queryStr, values);\n      return rows[1] ? rows : rows[0];\n`;
      singLogic += `    } catch (err) {\n      console.log(err);\n    }`;
      resolverString += `  ${tableSingular}: async (parent, args, context) => {\n  ${singLogic}\n  },\n`;
    }
    // catch all (make table singular)
    else {
      const tableSingular = table + '_single';
      let singLogic = '  try {\n';
      singLogic += `      const queryStr = \`SELECT * FROM ${table} WHERE _id = $1\`;\n      const values = [ args._id ]\n      const { rows } = await ${databaseName}.query(queryStr, values);\n      return rows[1] ? rows : rows[0];\n`;
      singLogic += `    } catch (err) {\n      console.log(err);\n    }`;
      resolverString += `  ${tableSingular}: async (parent, args, context) => {\n  ${singLogic}\n  },\n`;
    }
  }
  resolverString += '},\n\n';

  // logic for foreign keys to primary tables --------------------------------------------
  for (const foreignTable in fnKeys) {
    // console.log('foreignTable: ', foreignTable);
    //logic to format table name type
    const upperCamelCase = (table) => {
      const changeCase = Array.from(table);
      for (let i = 0; i < changeCase.length; i++) {
        // table names: make snake case into camel case
        if (changeCase[i] === '_' && changeCase[i + 1]) {
          changeCase[i + 1] = changeCase[i + 1].toUpperCase();
          changeCase[i] = '';
        } else if (changeCase[i] === '_' && !changeCase[i + 1]) {
          changeCase[i] = '';
        }
        // table names: changing plural to singular
        if (
          /[^aeiou]/i.test(changeCase[changeCase.length - 2]) &&
          /s/i.test(changeCase[changeCase.length - 1])
        ) {
          changeCase[changeCase.length - 1] = '';
        }
      }
      changeCase[0] = changeCase[0].toUpperCase();
      //final version of formatted table type
      return changeCase.join('');
    };
    exportString += ` ${upperCamelCase(foreignTable)},`;
    resolverString += `${upperCamelCase(foreignTable)}: {\n`;
    for (const foreignKey in fnKeys[foreignTable]) {
      const primaryTable = Object.keys(fnKeys[foreignTable][foreignKey]);
      const primaryColumn = Object.values(foreignKey);
      resolverString += `  ${foreignKey}_info: async (parent, args, context) => {\n    try {\n      const queryStr = 'SELECT * FROM ${primaryTable[0]} WHERE _id = $1';\n      const values = [ parent._id ]\n      const { rows } = await ${databaseName}.query(queryStr, values);\n      return rows[1] ? rows : rows[0]\n    } catch (err) {\n      console.log(err);\n    }\n  },\n`;

      // matches from foreign keys
      // ????/ not WHERE _id = $1 but need WHERE species_id = $1
      if (primKeys.hasOwnProperty(foreignTable)) {
        primKeys[foreignTable].forEach((ele) => {
          const fnColumns = Object.keys(fnKeys[ele]);
          // console.log('fnColumns: ', fnColumns);
          // console.log('foreignTable: ', foreignTable);
          let fnColumnName = '';
          for (let i = 0; i < fnColumns.length; i++) {
            // console.log('foreignRefTable: ', Object.keys(fnKeys[ele][fnColumns[i]])[0])
            if (foreignTable === Object.keys(fnKeys[ele][fnColumns[i]])[0]) {
              fnColumnName += fnColumns[i];
              break;
            }
          }

          resolverString += `  ${ele}: async (parent, args, context) => {\n    try {\n      const queryStr = 'SELECT * FROM ${ele} WHERE ${
            fnColumnName || '_id'
          } = $1';\n      const values = [ parent._id ]\n      const { rows } = await ${databaseName}.query(queryStr, values);\n      return rows[1] ? rows : rows[0]\n    } catch (err) {\n      console.log(err);\n    }\n  },\n`;
        });
        delete primKeys[foreignTable];
      }
    }
    resolverString += '},\n';
  }
  // rest of logic for primary keys to foreign tables --------------------------------------------
  for (let prim in primKeys) {
    const upperCamelCase = (table) => {
      const changeCase = Array.from(table);
      for (let i = 0; i < changeCase.length; i++) {
        // table names: make snake case into camel case
        if (changeCase[i] === '_' && changeCase[i + 1]) {
          changeCase[i + 1] = changeCase[i + 1].toUpperCase();
          changeCase[i] = '';
        } else if (changeCase[i] === '_' && !changeCase[i + 1]) {
          changeCase[i] = '';
        }
        // table names: changing plural to singular
        if (
          /[^aeiou]/i.test(changeCase[changeCase.length - 2]) &&
          /s/i.test(changeCase[changeCase.length - 1])
        ) {
          changeCase[changeCase.length - 1] = '';
        }
      }
      changeCase[0] = changeCase[0].toUpperCase();
      //final version of formatted table type
      return changeCase.join('');
    };

    exportString += ` ${upperCamelCase(prim)},`;
    resolverString += `${upperCamelCase(prim)}: {\n`;

    primKeys[prim].forEach((ele) => {
      const fnColumns = Object.keys(fnKeys[ele]);
      let fnColumnName = '';
      for (let i = 0; i < fnColumns.length; i++) {
        // console.log('foreignRefTable: ', Object.keys(fnKeys[ele][fnColumns[i]])[0])
        if (prim === Object.keys(fnKeys[ele][fnColumns[i]])[0]) {
          fnColumnName += fnColumns[i];
          break;
        }
      }

      resolverString += `  ${ele}: async (parent, args, context) => {\n    try {\n      const queryStr = 'SELECT * FROM ${ele} WHERE ${
        fnColumnName || '_id'
      } = $1';\n      const values = [ parent._id ]\n      const { rows } = await ${databaseName}.query(queryStr, values);\n      return rows[1] ? rows : rows[0]\n    } catch (err) {\n      console.log(err);\n    }\n  },\n`;
    });
    resolverString += '},\n\n';
  }
  exportString += ' Mutation }';
  res.locals.exportString = exportString;
  res.locals.resolverString = resolverString || 'Resolver Creation Error';
  // for resolver logic for graphiQL server @4000
  const resolverLogic = resolverString.replace('\n', '');
  // res.locals.resolverLogic = { resolverLogic };
  // console.log(res.locals.resolverLogic);
  // for extracting just names of each resolver
  // res.locals.resolverNames = exportString.slice(19, -2);
  return next();
};

module.exports = resolverController;
