const express = require('express');
const router = express.Router();
const dbLinkController = require('../controllers/dbLinkController');

router.post('/', dbLinkController.connectDb, dbLinkController.test, (req,res) => {
    return res.status(202).json(res.locals.fK)
})

module.exports = router;