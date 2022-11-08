const express = require('express');
const app = express();
const port = 3000;

const controller = require('./controller');



app.post('/dbConnect', controller.getDbStructure, (req, res, next) => {
    res.status(200).send(res.locals.parsed)
});







app.listen(port, () => console.log('server listening on port ' + port));
module.exports = app;