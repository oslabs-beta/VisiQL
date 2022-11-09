const express = require('express');
const router = express.Router();
const dbLinkController = require('../controllers/dbLinkController');
const dbSchemaController = require('../controllers/dbSchemaController');

router.post('/', dbLinkController.connectDb, dbLinkController.test, dbSchemaController.getSchema, (req,res) => {
    return res.status(202).json(res.locals.fK).json(res.locals.dbSchema).json(res.locals.tables);
});

module.exports = router;