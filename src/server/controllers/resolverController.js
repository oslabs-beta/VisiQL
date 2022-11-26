const resolverController = {};

resolverController.genResolver = (req, res, next) => {
  const fnKeys = res.locals.parsedFnKeys;
  const primKeys = res.locals.parsedPrimaryKeys;
  const databaseInfo = res.locals.dbSchema.tables;
  let resolverString = 'exports.Query = {\n';
  let databaseName = res.locals.databaseName || 'dbModelName';

  for (let table in databaseInfo) {
    // run for each table in database
    let logic = '  try {\n';
    logic += `      const queryStr = 'SELECT * FROM ${table}'\n      const { rows } = await ${databaseName}.query(queryStr);\n      return rows;\n`;
    logic += `    } catch (err) {\n      console.log(err)\n    }`;
    resolverString += `  ${table}: async (parent, args, context) => {\n  ${logic}\n  },\n`;

    // below: add resolver for singular of table name (if plural)

    // if table name ends in consonant + "s"
    if (/[^aeiou]/i.test(table[table.length - 2]) && /s/i.test(table[table.length - 1])) {
      const tableSingular = table.slice(0, -1);
      let singLogic = '  try {\n';
      singLogic += `      const queryStr = \`SELECT * FROM ${table} WHERE id = $1\`;\n      const values = [ args.id ]\n      const { rows } = await ${databaseName}.query(queryStr, values);\n      return rows[1] ? rows : rows[0];\n`;
      singLogic += `    } catch (err) {\n      console.log(err)\n    }`;
      resolverString += `  ${tableSingular}: async (parent, args, context) => {\n  ${singLogic}\n  },\n`;
    }
    // accounting for if table name is people
    else if (table === 'people') {
      const tableSingular = 'person';
      let singLogic = '  try {\n';
      singLogic += `      const queryStr = \`SELECT * FROM ${table} WHERE id = $1\`;\n      const values = [ args.id ]\n      const { rows } = await ${databaseName}.query(queryStr, values);\n      return rows[1] ? rows : rows[0];\n`;
      singLogic += `    } catch (err) {\n      console.log(err)\n    }`;
      resolverString += `  ${tableSingular}: async (parent, args, context) => {\n  ${singLogic}\n  },\n`;
    }
    // accounting for if table name ends in "ies" like "species"
    else if (table.slice(table.length - 3) === 'ies') {
      const tableSingular = table.slice(0, -1);
      let singLogic = '  try {\n';
      singLogic += `      const queryStr = \`SELECT * FROM ${table} WHERE id = $1\`;\n      const values = [ args.id ]\n      const { rows } = await ${databaseName}.query(queryStr, values);\n      return rows[1] ? rows : rows[0];\n`;
      singLogic += `    } catch (err) {\n      console.log(err)\n    }`;
      resolverString += `  ${tableSingular}: async (parent, args, context) => {\n  ${singLogic}\n  },\n`;
    }
    // catch all (make table singular)
    else {
      const tableSingular = table + '(single)';
      let singLogic = '  try {\n';
      singLogic += `      const queryStr = \`SELECT * FROM ${table} WHERE id = $1\`;\n      const values = [ args.id ]\n      const { rows } = await ${databaseName}.query(queryStr, values);\n      return rows[1] ? rows : rows[0];\n`;
      singLogic += `    } catch (err) {\n      console.log(err)\n    }`;
      resolverString += `  ${tableSingular}: async (parent, args, context) => {\n  ${singLogic}\n  },\n`;
    }
  }
  resolverString += '};\n\n'

  /*
  for (const foreignTable in fnKeys) {

    //logic to format table name type
    const upperCamelCase = (table) => {const changeCase = Array.from(table);
    for (let i = 0; i < changeCase.length; i++){
      // table names: make snake case into camel case
      if (changeCase[i] === '_' && changeCase[i+1]) {
          changeCase[i+1] = changeCase[i+1].toUpperCase();
          changeCase[i] = '';
       } else if (changeCase[i] === '_' && !changeCase[i+1]) {
          changeCase[i] = ''
      };
      // table names: changing plural to singular
          if( /[^aeiou]/i.test(changeCase[changeCase.length-2]) && /s/i.test(changeCase[changeCase.length-1])){
           changeCase[changeCase.length-1] = '';
          };
      }
      changeCase[0] = changeCase[0].toUpperCase();
      //final version of formatted table type
      return changeCase.join('');
    }

    resolverString += `exports.${upperCamelCase(foreignTable)} = {\n`;
    for (const foreignKey in foreignTable) {



    }



  }
  */













  res.locals.resolverString = resolverString || 'hi from resolver';
  return next();
}

module.exports = resolverController;