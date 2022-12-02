require('dotenv').config();
const userDb = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const userController = {};

userController.checkUsernameExistence = async (req, res, next) => {
  try {
    const { username } = req.body;

    const existenceQuery = `SELECT * FROM users WHERE username = '${username}';`;
    // const value = [username];
    const { rows } = await userDb.query(existenceQuery);
    if (rows[0]) res.locals.existence = 'exists';
    else res.locals.existence = 'nonexistent';
    // console.log('res.locals.existence: ', res.locals.existence);
    return next();
  } catch (err) {
    return next({
      log: `error occured in userController.checkUsernameExistence: ${err}`,
      status: 400,
      message: {err: 'error checking credentials'},
    });
  }
};

userController.signUp = async (req, res, next) => {
  try {
    const { firstName, lastName, email, username, password } = req.body;
    // create hash password via bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    // execute query to create new user row in user table
    const textQuery = `INSERT INTO users(firstname, lastname, email, username, password) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const values = [firstName, lastName, email, username, hashed];
    const { rows } = await userDb.query(textQuery, values);
    // send back data of newly created account to client-side
    res.locals.signedUp = rows[0];
    return next();
  } catch (err) {
    return next({
      log: `error occured in userController.signUp: ${err}`,
      status: 400,
      message: 'error in signup',
    });
  }
};

userController.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    // execute query to check if username exists in users table
    const loginQuery = `SELECT * FROM users WHERE username = '${username}'`;
    const { rows } = await userDb.query(loginQuery);

    // compare inputted password to stored hashed password
    if (await bcrypt.compare(password, rows[0].password)) {
      // console.log('id', rows[0]._id);
      const user = { name: username, id: rows[0]._id };
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SERVER);
      console.log(accessToken);
      res.cookie('token', accessToken);
      res.locals.loggedIn = { accessToken: accessToken };
    } else {
      return next({ status: 403 });
    }
    next();
  } catch (err) {
    return next({
      log: `error occured in userController.login: ${err}`,
      status: 400,
      message: {err: 'error in login'},
    });
  }
};

module.exports = userController;
