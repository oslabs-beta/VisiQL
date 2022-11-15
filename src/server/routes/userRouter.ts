import express, {
  Request,
  Response,
  Router,
} from 'express';

const router: Router = express.Router();
const userController = require('../controllers/userController');

router.post('/check', userController.checkUsernameExistence, (req, res) => {
  return res.status(200).json(res.locals.existence);
}
);

router.post('/signup', userController.signUp, (req, res) => {
    return res.status(201).json(res.locals.signedUp);
  }
);

router.post('/login', userController.login, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.loggedIn);
}
);

module.exports = router;