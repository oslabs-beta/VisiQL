import express, { Request, Response } from 'express';
const router = express.Router();
const projectController = require('../controllers/projectController');

router.post('/save', projectController.saveProject, (req, res) => {
  return res.status(200).json(res.locals.savedProject);
});

router.get('/:id', projectController.getProjects, (req, res) => {
  return res.status(200).json(res.locals.projects);
})
module.exports = router;
