const express = require('express');
const router = express.Router();
const dbLinkController = require('../controllers/dbLinkController');
const dbSchemaController = require('../controllers/dbSchemaController');
const fnKeyController = require('../controllers/fnKeyController');

router.post(
  '/',
  dbLinkController.connectDb,
  dbLinkController.extractFnKeys,
  fnKeyController.parseFnKeyData,
  dbSchemaController.getSchema,
  (req, res) => {
    return res.status(202).json(res.locals);
  }
);

module.exports = router;
