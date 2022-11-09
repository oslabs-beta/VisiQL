const express = require('express');
const router = express.Router();
const dbLinkController = require('../controllers/dbLinkController');
const fnKeyController = require('../controllers/fnKeyController');

router.post('/', dbLinkController.connectDb, dbLinkController.extractFnKeys, fnKeyController.parseFnKeyData, (req,res) => {
    return res.status(202).json('successly parsed database data!')
})

module.exports = router;