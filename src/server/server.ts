import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from 'express';
const path = require('path');
const app = express();
const PORT = 3000;
const dbLinkRouter = require('./routes/dbLink');
const userRouter = require('./routes/userRouter');
const projectRouter = require('./routes/projectRouter');
const authController = require('./controllers/authController');
const cookieParser = require('cookie-parser');
const graphqlHTTP = require('express-graphql');

type ServerError = {
  log: string;
  status: number;
  message: {
    err: string;
  };
};

// parse incoming request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.use(express.static(path.resolve(__dirname, './src/client')));

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
//   );
//   res.status(200);
//   next();
// });

// for login/signup
app.use('/user', userRouter);
app.use('/projects', projectRouter);
app.use('/graphql', graphqlHTTP);

// send database link to appropriate router
app.use('/db', dbLinkRouter, (req, res) => {
  res.status(200);
});

// catch all error handler
app.use((req, res) => res.status(404).send('This page does not exist.'));

// global error handler
app.use((err: ServerError, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Global Error handler triggered',
    status: 500,
    message: { err: 'Error occurred' },
  };
  const errorObj = {
    ...defaultErr,
    err,
  };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log('server listening on port ' + PORT));
module.exports = app;
