const userDb = require('../models/userModel');

const projectController = {};

projectController.saveProject = async (req, res, next) => {
  try {
    const { user, projectName, schemaData, treeData, date, resolverData } = req.body; 
    console.log('date:', date)
    const saveQuery =
      'INSERT INTO projects(project_name, schema_data, tree_data, user_id, last_updated, resolver_data) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';

    const values = [projectName, schemaData, treeData, user, date, resolverData]; 
    console.log(values);
    const { rows } = await userDb.query(saveQuery, values);
    console.log('rows0',rows[0]);
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

projectController.getProjects = async (req, res, next) => {
  console.log('in get projects');
  const { id } = req.params;
  console.log('id in getprojects:', id)
  try{
    const projectQuery = `SELECT * FROM projects WHERE user_id = ${id}`
    const { rows } = await userDb.query(projectQuery);
    console.log('the data', rows);
    res.locals.projects = rows;
    return next();
  }
  catch(err){
    return next({
      error: err,
      message: 'couldn\'t get projects',
      status: 400,
    });
  }
}

module.exports = projectController;
