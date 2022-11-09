const { integerPropType } = require('@mui/utils');
const { testDB } = require('./testDB')



const controller = {};


controller.getDbStructure = {

}


//console.log(Array.isArray(testDB));
// console.log(testDB);

//shape i want:

// db = {
//     db_name: 'public' (table_schema),
//     tables: {
//         films: {
//             columns: {
//                 _id: 'integer',
//                 title: 'character varying',
//                 episode_id: 'integer'
//             },
                foreignKeys: {

                }
//         },
//         people: {
//             columns: {
//                 _id: 'integer',
//                 name: 'character varying'
//             }
//         },
//     }
// }





const parseDB = (data) => {
const database = data.rows;
const db = {
 db_name: database[0].table_schema,
 tables: {},
};

const tableSet = new Set();
for (let i = 0; i < database.length; i++){
let table = database[i].table_name;
tableSet.add(table);

if (!db.tables[table]) db.tables[table] = {};
if (!db.tables[table].columns) db.tables[table].columns = {};
    let type = database[i].data_type;
    switch (type){
        case 'bigint' :
        case 'integer' : type = 'Int';
        break;
        case 'date' :
        case 'character varying' : type = 'String';
        break;
        
    };
  db.tables[table].columns[database[i].column_name] = type;
    
};
const tableNames = Array.from(tableSet);
return [db, tableNames];
};

const cavinsAlgo = 
data.forEach(ele => {
    if (!foreignKeys[ele.table_name]) foreignKeys[ele.table_name] = {};
    const arr = ele.pg_get_constraintdef.split(' ');
    const fnKey = arr[2].slice(1, -1);
    foreignKeys[ele.table_name][fnKey] = {};
    const rawRef = arr[4].split('(');
    const refTable = rawRef[0];
    const refKey = rawRef[1].slice(0, -1);
    foreignKeys[ele.table_name][fnKey][refTable] = refKey;
  //   foreignKeys[ele.table_name][fnKey] = arr[4];
  //   console.log(refKey);
  })
  
  console.log('foreign key ob', foreignKeys);

const db = parseDB(testDB)[0];
const tableNames = (parseDB(testDB))[1];

console.log(db.tables);
console.log(tableNames);

module.exports = controller;