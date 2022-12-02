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
        case 'bigint': // signed eight-byte integer
        case 'integer': // signed four-byte integer
        case 'bigserial': // autoincrementing eight-byte integer
        case 'bytea': // binary data (“byte array”)
        case 'smallint': // signed two-byte integer
        case 'smallserial': // autoincrementing two-byte integer
        case 'serial': // autoincrementing four-byte integer
          type = 'Int';
          break;
        case 'date': // calendar date (year, month, day)
        case 'character': // fixed-length character string
          // should have a case for varchar[(n)]/character varying [(n)]?
        case 'character varying': // variable-length character string
        case 'bit': // fixed-length bit string
        case 'bit varying': // variable-length bit string
        case 'cidr': // IPv4 or IPv6 network address
        case 'inet': // IPv4 or IPv6 host address
        case 'json': // textual JSON data
        case 'jsonb': // binary JSON data, decomposed
        case 'text': // variable-length character string
        case 'time': // time of day
        case 'timestamp': // date and time
        case 'tsquery': // text search query
        case 'tsvector': // text search document
          type = 'String';
          break;
        case 'boolean':
          type = 'Boolean';
          break;
        case 'double precision': // double precision floating-point number (8 bytes)
        case 'numeric': // exact numeric of selectable precision
        case 'real': // single precision floating-point number (4 bytes)
          type = 'Float';
          break;
        default:
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
      log: `error occured in dbSchemaController.getSchema: ${err}`,
      status: 400,
      message: {err: 'error generating schema'},
    });
  }
};

module.exports = dbSchemaController;
