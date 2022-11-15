const jwt = require('jsonwebtoken');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const userRouter = require('../routes/userRouter');

const authController = {};

authController.checkToken = (req, res, next) => {
  console.log('here');
  try {
    const authCookie = req.cookies.token;
    if (authCookie === null) {
      console.log('nope');
      return res.redirect('/login');
    } else {
      jwt.verify(authCookie, process.env.ACCESS_TOKEN_SERVER, (err, user) => {
        if (err) {
          res.locals.authenticate = 'fail';
          return next();
        } else {
          res.locals.authenticate = 'success';
          return next();
        }
      });
    }
  } catch (err) {
    return next({
      error: err,
      message: 'error occured in authController.checkToken',
      status: 400,
    });
  }
};

module.exports = authController;
