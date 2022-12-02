import express, { Request, Response } from 'express';
const router = express.Router();
const dbLinkController = require('../controllers/dbLinkController');
const dbSchemaController = require('../controllers/dbSchemaController');
const fnKeyController = require('../controllers/fnKeyController');
const authController = require('../controllers/authController');
const treeController = require('../controllers/treeController');
const schemaGen = require('../controllers/schemaGen');
const resolverController = require('../controllers/resolverController');
const mutationController = require('../controllers/mutationController');

router.post(
  '/resolver',
  dbLinkController.connectDb,
  dbLinkController.extractFnKeys,
  fnKeyController.parseFnKeyData,
  fnKeyController.parsePrimaryKeyData,
  dbSchemaController.getSchema,
  resolverController.genResolver,
  mutationController.mutationResolver,
  (req, res) => res.status(200).json(res.locals.resolverString)
);

router.post(
  '/',
  dbLinkController.connectDb,
  dbLinkController.extractFnKeys,
  fnKeyController.parseFnKeyData,
  fnKeyController.parsePrimaryKeyData,
  dbSchemaController.getSchema,
  treeController.treeSchema,
  schemaGen.genSchema,
  resolverController.genResolver,
  mutationController.mutationSchema,
  mutationController.mutationResolver,
  (req, res) => {
    return res.status(202).json(res.locals);
  }
);

module.exports = router;
