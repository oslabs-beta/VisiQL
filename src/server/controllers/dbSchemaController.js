const db = require('../models/models');
// require('dotenv').config();

const dbSchemaController = {};

dbSchemaController.getSchema = async (req, res, next) => {
  try {
    const queryStr =
      "SELECT current_database(), table_schema, table_name, ordinal_position as position, column_name, data_type, column_default as default_value FROM information_schema.columns WHERE table_schema NOT IN ('information_schema', 'pg_catalog') AND table_name != 'pg_stat_statements' ORDER BY table_schema, table_name, ordinal_position;";
    const data = await db.query(queryStr);

    const database = data.rows;

    const dbSchema = {
      db_name: database[0].current_database,
      tables: {},
    };
    const tableSet = new Set();

    for (let i = 0; i < database.length; i++) {
      let table = database[i].table_name;
      tableSet.add(table);

      if (!dbSchema.tables[table]) dbSchema.tables[table] = {};
      if (!dbSchema.tables[table].columns) dbSchema.tables[table].columns = {};
      let type = database[i].data_type;
      switch (type) {
        case 'bigint':
        case 'integer':
          type = 'Int';
          break;
        case 'date':
        case 'character varying':
          type = 'String';
          break;
      }

      dbSchema.tables[table].columns[database[i].column_name] = type;
    }

    const tableNames = Array.from(tableSet);

    res.locals.dbSchema = dbSchema;

    res.locals.tables = tableNames;
    return next();
  } catch (err) {
    return next({
      error: err,
      message: 'error occured in dbSchemaController.getSchema',
      status: 400,
    });
  }
};

module.exports = dbSchemaController;
