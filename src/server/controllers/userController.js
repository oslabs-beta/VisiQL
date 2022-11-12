const userDb = require('../models/userModel');
const bcrypt = require('bcrypt');

const userController = {};

userController.checkUsernameExistence = async (req, res, next) => {
  try {
    const { username } = req.body;
    const existenceQuery = 'SELECT * FROM users WHERE username = $1'
    const value = [username];
    const { rows } = await userDb.query(existenceQuery, value)
    if (rows[0]) res.locals.existence = 'exists';
    else res.locals.existence = 'nonexistent'
    // console.log('res.locals.existence: ', res.locals.existence);
    return next();
  } catch (err) {
    return next({
      error: err,
      message: 'error occured in userController.checkUsernameExistence',
      status: 400,
    });
  }
}

userController.signUp = async (req, res, next) => {
  try {
    const { name, email, username, password } = req.body;
    // create hash password via bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    // execute query to create new user row in user table
    const textQuery =
      "INSERT INTO users VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [ name, email, username, hashed ];
    const { rows } = await userDb.query(textQuery, values);
    // send back data of newly created account to client-side
    res.locals.signedUp = rows[0];
    return next();
  } catch (err) {
    return next({
        error: err,
        message: 'error occured in userController.signUp',
        status: 400,
      });
  }
}

userController.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    // execute query to check if username exists in users table
    const loginQuery =
      'SELECT * FROM users WHERE username = $1';
    const value = [username];
    const { rows } = await userDb.query(loginQuery, value);
    // compare inputted password to stored hashed password
    if (await bcrypt.compare(password, rows[0].password)) {
      res.locals.loggedIn = 'login success';
    } else {
      res.locals.loggedIn = 'login failed';
    }
    next();
  } catch (err) {
    return next({
      error: err,
      message: 'error occured in userController.login',
      status: 400,
    });
  }
};

module.exports = userController;