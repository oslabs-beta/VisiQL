const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const dbLinkRouter = require('./routes/dbLink');

// parse incoming request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// send database link to appropriate router
app.use('/db', dbLinkRouter);

// catch all error handler
app.use((req, res) => res.status(404).send('This page does not exist.'));

// global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Global Error handler triggered',
        status: 500,
        message: { err: 'Error occurred' },
    };
    const errorObj = {
        ...defaultErr,
        err
    }
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
})

app.use(express.static(path.resolve(__dirname, '../client')));

app.listen(port, () => console.log('server listening on port ' + port));
module.exports = app;
