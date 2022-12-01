const mutationController = {};

mutationController.mutationSchema = (req, res, next) => {
  const fnKeys = res.locals.parsedFnKeys;
  const primKeys = { ...res.locals.parsedPrimaryKeys };
  const databaseInfo = { ...res.locals.dbSchema.tables };
  let databaseName = res.locals.databaseName || 'dbModelName';
  let mutationSchema = 'type Mutation {\n';

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

  for (let table in databaseInfo) {
    const typeName = upperCamelCase(table);
    mutationSchema += `  add${typeName}(input: Add${typeName}Input): ${typeName}\n  update${typeName}(_id: ID, input: Update${typeName}Input): ${typeName}\n  delete${typeName}(_id: ID): ${typeName}\n\n`;
  }
  mutationSchema += '}\n\n';

  for (let table in databaseInfo) {
    const typeName = upperCamelCase(table);
    const columns = databaseInfo[table].columns;
    if (columns.hasOwnProperty('_id')) delete databaseInfo[table].columns._id;
    else if (columns.hasOwnProperty('id'))
      delete databaseInfo[table].columns.id;

    mutationSchema += `input Add${typeName}Input {\n`;
    for (let columnName in columns) {
      if (columnName !== 'id' && columnName !== '_id')
        mutationSchema += `  ${columnName}: ${columns[columnName]}\n`;
    }
    mutationSchema += '}\n\n';

    mutationSchema += `input Update${typeName}Input {\n`;
    for (let columnName in columns) {
      if (columnName !== 'id' && columnName !== '_id')
        mutationSchema += `  ${columnName}: ${columns[columnName]}\n`;
    }
    mutationSchema += '}\n\n';
  }

  res.locals.schemaString += mutationSchema;
  return next();
};

mutationController.mutationResolver = (req, res, next) => {
  const fnKeys = res.locals.parsedFnKeys;
  const primKeys = { ...res.locals.parsedPrimaryKeys };
  const databaseInfo = { ...res.locals.dbSchema.tables };
  let databaseName = res.locals.databaseName || 'dbModelName';
  let mutationResolver = 'Mutation: {\n';

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

  for (let table in databaseInfo) {
    // for input: Add
    const typeName = upperCamelCase(table);
    const columns = databaseInfo[table].columns;
    if (columns.hasOwnProperty('_id')) delete databaseInfo[table].columns._id;
    else if (columns.hasOwnProperty('id'))
      delete databaseInfo[table].columns.id;
    const properties = Object.keys(columns);
    mutationResolver += `  add${typeName}: async (parent, { input }, context) => {\n    try {\n      const { `;
    for (let i = 0; i < properties.length; i++) {
      if (properties[i] !== 'id' && properties[i] !== '_id') {
        if (i === properties.length - 1) {
          mutationResolver += `${properties[i]} } = input;\n      const queryStr = 'INSERT INTO ${table} (`;
        } else {
          mutationResolver += `${properties[i]}, `;
        }
      }
    }
    for (let i = 0; i < properties.length; i++) {
      if (properties[i] !== 'id' && properties[i] !== '_id') {
        if (i === properties.length - 1) {
          mutationResolver += `${properties[i]}) VALUES (`;
        } else {
          mutationResolver += `${properties[i]}, `;
        }
      }
    }
    for (let i = 0; i < properties.length; i++) {
      if (properties[i] !== 'id' && properties[i] !== '_id') {
        if (i === properties.length - 1) {
          mutationResolver += `$${
            i + 1
          }) RETURNING *'; \n      const values = [ `;
        } else {
          mutationResolver += `$${i + 1}, `;
        }
      }
    }
    for (let i = 0; i < properties.length; i++) {
      if (properties[i] !== 'id' && properties[i] !== '_id') {
        if (i === properties.length - 1) {
          mutationResolver += `${properties[i]} ];\n      const { rows } = await ${databaseName}.query(queryStr, values);\n      return rows[1] ? rows : rows[0];\n    } catch (err) {\n      console.log(err);\n    }\n  },\n`;
        } else {
          mutationResolver += `${properties[i]}, `;
        }
      }
    }

    // for input: Update

    mutationResolver += `  update${typeName}: async (parent, { input, _id }, context) => {\n    try {\n      const { `;
    for (let i = 0; i < properties.length; i++) {
      if (properties[i] !== 'id' && properties[i] !== '_id') {
        if (i === properties.length - 1) {
          mutationResolver += `${properties[i]} } = input;\n      const queryStr = 'UPDATE ${table} SET `;
        } else {
          mutationResolver += `${properties[i]}, `;
        }
      }
    }
    for (let i = 0; i < properties.length; i++) {
      if (properties[i] !== 'id' && properties[i] !== '_id') {
        if (i === properties.length - 1) {
          mutationResolver += `${properties[i]} = $${i + 1} WHERE _id = $${
            properties.length + 1
          } RETURNING *';\n      const values = [ `;
        } else {
          mutationResolver += `${properties[i]} = $${i + 1}, `;
        }
      }
    }
    for (let i = 0; i < properties.length; i++) {
      if (properties[i] !== 'id' && properties[i] !== '_id') {
        if (i === properties.length - 1) {
          mutationResolver += `${properties[i]}, _id ];\n      const { rows } = await ${databaseName}.query(queryStr, values);\n      return rows[1] ? rows : rows[0];\n    } catch (err) {\n      console.log(err);\n    }\n  },\n`;
        } else {
          mutationResolver += `${properties[i]}, `;
        }
      }
    }

    // for input: Delete
    mutationResolver += `  delete${typeName}: async (parent, args, context) => {\n    try {\n      const queryStr = 'DELETE FROM ${table} WHERE _id = $1 RETURNING *';\n      const values = [ args._id ];\n      const { rows } = await ${databaseName}.query(queryStr, values);\n      return rows[1] ? rows : rows[0];\n    } catch (err) {\n      console.log(err);\n    }\n  },\n\n`;
  }
  mutationResolver += '}\n\n';

  // res.locals.resolverString += mutationResolver + res.locals.exportString;
  res.locals.resolverString += mutationResolver;

  return next();
};

module.exports = mutationController;
