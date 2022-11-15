const schemaGen = {};

schemaGen.genSchema = (req, res, next) => {
    const fnKeys = res.locals.parsedFnKeys;
    const primKeys = res.locals.parsedPrimaryKeys;
    const dbOb = res.locals.dbSchema.tables;

let schemaString = '';
for (const table in dbOb){
    let string = 'type ';
    let tableName = String(table);
    const type = Array.from(tableName);

   for (let i = 0; i < type.length; i++){
    // table names: make snake case into camel case
    if (type[i] === '_' && type[i+1]) {
        type[i+1] = type[i+1].toUpperCase();
        type[i] = '';
     } else if (type[i] === '_' && !type[i+1]) {
        type[i] = ''
    };
    // table names: changing plural to singular
        if( /[^aeiou]/i.test(type[type.length-2]) && /s/i.test(type[type.length-1])){
         type[type.length-1] = '';
        };
    }
    type[0] = type[0].toUpperCase();
    const pascalType = type.join('');
   string += pascalType + ' {\n';

   for (const col in dbOb[table].columns){
     // if (col === '_id') col = 'id';

     // to change "_id" to "id" and its data type to "ID"
     // hard coded for _id <- is there a better way?
     if (col.toLowerCase() === '_id' || col.toLowerCase() === 'id') {
        string += '  id: ID\n';
       } else {
        string += '  ' + col + ': ' + dbOb[table].columns[col] + '\n';
     }
    };




    // below adds "foreignkey: referenceTableType"
    const fnKeysTables = Object.keys(fnKeys);
    if (fnKeysTables.includes(tableName)) {
    //   console.log('tableName: ', tableName);
      const foreignKeys = Object.keys(fnKeys[tableName]);
      const referenceTableProp = Object.values(fnKeys[tableName]);
      for (let i = 0; i < foreignKeys.length; i++) {
        // if (fnKeysTables.includes(tableName)) console.log('tableName1: ', tableName);
        let referenceTableName = Object.keys(referenceTableProp[i])[0];
        // console.log('referenceTableName: ', referenceTableName);
        // use above to connect to schema
        // homeworld_id_info ??
        const changeCase = Array.from(referenceTableName);
    
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
        const camelCaseTable = changeCase.join('');
        string += '  ' + foreignKeys[i] + '_info' + ': ' + camelCaseTable + '\n';
      }
    };
    // below adds "primarykey: foreignKeyTableType"
    const primaryKeysTables = Object.keys(primKeys);
    if (primaryKeysTables.includes(tableName)) {
        //   console.log('tableName: ', tableName);
          const foreignTables = primKeys[tableName];
          for (let i = 0; i < foreignTables.length; i++) {
            const foreignName = foreignTables[i];
            // console.log('foreignTables: ', foreignTables);
            // console.log('foreignName: ', foreignName);
            // change snake case to camel case
            const changeCase = Array.from(foreignName);
        
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
            const camelCaseTable = changeCase.join('');
            string += '  ' + foreignName + ': [' + camelCaseTable + ']\n';
          }
        };

string += '} \n\n';

schemaString += string;
};
// console.log(schemaString);

// now check for foreign keys, maybe that should go inside one of the loops?

res.locals.schemaString = schemaString;
return next();
};

module.exports = schemaGen;