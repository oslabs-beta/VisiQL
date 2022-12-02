import express, { Request, Response, Router } from 'express';
const jwt = require('jsonwebtoken');
const path = require('path');
const router: Router = express.Router();
const authController = require('../controllers/authController');
const testController = require('../controllers/testController');
const userController = require('../controllers/userController');

router.get('/checkToken', authController.checkToken, (req, res) => {
  return res.status(200).json(res.locals.authenticate);
});
router.get('/signOut', (req, res) => {
  return res.clearCookie('token').status(200);
});
router.post('/check', userController.checkUsernameExistence, (req, res) => {
  return res.status(200).json(res.locals.existence);
});

router.post('/signup', userController.signUp, (req, res) => {
  return res.status(201).json(res.locals.signedUp);
});

router.post('/login', userController.login, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.loggedIn);
});

module.exports = router;
