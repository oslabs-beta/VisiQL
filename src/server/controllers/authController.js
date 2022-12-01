require('dotenv').config();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const authController = {};

authController.checkToken = (req, res, next) => {
  const authCookie = req.cookies.token;
  if (!authCookie) {
    return next();
  } else {
    jwt.verify(authCookie, process.env.ACCESS_TOKEN_SERVER, (err, user) => {
      if (err) {
        res.locals.authenticate = 'fail';
        return next();
      } else {
        res.locals.authenticate = { status: 'success', id: user.id };
        return next();
      }
    });
  }
};

module.exports = authController;
