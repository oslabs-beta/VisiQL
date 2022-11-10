require('dotenv').config();
const db = require('../models/models');

const dbLinkController = {};

dbLinkController.connectDb = async (req, res, next) => {
  try {
    // insert database link into .env file for use to connect database and make queries
    process.env.PG_URI = req.body.dbLink;
    db.newPool();
    return next();
  } catch (err) {
    return next({ err });
  }
};

dbLinkController.extractFnKeys = async (req, res, next) => {
  try {
    const fKQuery =
      "SELECT conrelid::regclass AS table_name, pg_get_constraintdef(oid) FROM   pg_constraint WHERE  contype = 'f' AND    connamespace = 'public'::regnamespace   ORDER  BY conrelid::regclass::text, contype DESC;";
    const { rows: data } = await db.query(fKQuery);
    res.locals.fnKeys = data;
    return next();
  } catch (err) {
    return next({
      error: err,
      message: 'error occured in dbLinkController.test',
      status: 400,
    });
  }
};

module.exports = dbLinkController;
