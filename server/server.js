const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../client')));

app.listen(port, () => console.log('server listening on port ' + port));
module.exports = app;
