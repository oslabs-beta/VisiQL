const userDb = require('../models/userModel');

const projectController = {};

projectController.saveProject = async (req, res, next) => {
  try {
    const { user, projectName, schemaData, treeData } = req.body;
    const saveQuery =
      'INSERT INTO projects(project_name, schema_data, tree_data, user_id) VALUES ($1, $2, $3, $4) RETURNING *';

    const values = [projectName, schemaData, treeData, user];
    console.log(values);
    const { rows } = await userDb.query(saveQuery, values);
    console.log(rows[0]);
    // send back data of newly created account to client-side
    res.locals.savedProject = rows[0];
    return next();
  } catch (err) {
    return next({
      error: err,
      message: 'error occured in projectController.saveProject',
      status: 400,
    });
  }
};

module.exports = projectController;
