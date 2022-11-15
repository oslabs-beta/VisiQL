import express, {
  Request,
  Response,
} from 'express';
const router = express.Router();
const dbLinkController = require('../controllers/dbLinkController');
const dbSchemaController = require('../controllers/dbSchemaController');
const fnKeyController = require('../controllers/fnKeyController');

const treeController = require('../controllers/treeController');

const schemaGen = require('../controllers/schemaGen');

router.post(
  '/',
  dbLinkController.connectDb,
  dbLinkController.extractFnKeys,
  fnKeyController.parseFnKeyData,
  fnKeyController.parsePrimaryKeyData,
  dbSchemaController.getSchema,
  treeController.treeSchema,
  schemaGen.genSchema,
  (req, res) => {
    return res.status(202).json(res.locals);
  }
);

module.exports = router;
