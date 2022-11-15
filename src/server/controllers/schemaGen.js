const schemaGen = {};

schemaGen.genSchema = (req, res, next) => {
    const fnKeys = res.locals.parsedFnKeys;
    const dbOb = res.locals.dbSchema.tables;

let schemaString = '';
for (const table in dbOb){
    let string = 'type ';
    let tableName = String(table);
    const type = Array.from(tableName);

   for (let i = 0; i < type.length; i++){
    if (type[i] === '_' && type[i+1]) {
        type[i+1] = type[i+1].toUpperCase();
        type[i] = '';
     } else if (type[i] === '_' && !type[i+1]) {
        type[i] = ''
    };
        if( /[^aeiou]/i.test(type[type.length-2]) && /s/i.test(type[type.length-1])){
         type[type.length-1] = '';
        };
    }
    type[0] = type[0].toUpperCase();
    const pascalType = type.join('');
   string += pascalType + ' {\n';

   for (const col in dbOb[table].columns){
    //    console.log('col is id', col === '_id');
    //   if (col === '_id') col = col.slice(1);
    //   console.log(col);
     string += '  ' + col + ': ' + dbOb[table].columns[col] + '\n';
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