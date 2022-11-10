const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/signup', userController.signUp, (req, res) => {
    return res.status(201).json(res.locals.signedUp);
  }
);

router.post('/login', userController.login, (req, res) => {
  return res.status(200).json(res.locals.loggedIn);
}
);

module.exports = router;