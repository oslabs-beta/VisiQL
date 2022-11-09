const express = require('express');
const router = express.Router();
const dbLinkController = require('../controllers/dbLinkController');
const dbSchemaController = require('../controllers/dbSchemaController');
const fnKeyController = require('../controllers/fnKeyController');

router.post('/', dbLinkController.connectDb, dbLinkController.extractFnKeys, fnKeyController.parseFnKeyData, dbSchemaController.getSchema, (req,res) => {
    return res.status(202).json('successly parsed database data!').json(res.locals.dbSchema).json(res.locals.tables);
});

module.exports = router;