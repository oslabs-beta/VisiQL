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





const parseDB = (database) => {

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

const db = parseDB(testDB)[0];
const tableNames = (parseDB(testDB))[1];

console.log(db.tables);
console.log(tableNames);

module.exports = controller;