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
      log: `error occurred in projectController.saveProject: ${err}`,
      status: 400,
      message: {err: 'Couldn\'t save project.'},
    });
  }
};

projectController.getProjects = async (req, res, next) => {
  const { id } = req.params;
  try{
    const projectQuery = `SELECT * FROM projects WHERE user_id = ${id}`
    const { rows } = await userDb.query(projectQuery);
    // console.log('the data', rows);
    res.locals.projects = rows;
    return next();
  }
  catch(err){
    return next({
      log: `error occurred in projectController.getProjects: ${err}`,
      status: 400,
      message: {err: 'couldn\'t get projects'},
    });
  }
};

projectController.updateProject = async (req, res, next) => {
  const { id, name, schema, date, resolver } = req.body;
  const updateQuery = `UPDATE projects SET project_name=$1, schema_data=$2, last_updated=$3, resolver_data=$4 WHERE id=${id} RETURNING *`;
  const values = [name, schema, date, resolver];
  try{
    const { rowCount, rows } = await userDb.query(updateQuery, values);
    res.locals.updated = rows[0];
    res.locals.success = rowCount === 1 ? true : false;
    return next();
  }
  catch(err){
    console.log('error in updateproj:', err);
    return next({
      log: `error occurred in projectController.updateProject: ${err}`,
      status: 400,
      message: {err: 'couldn\'t update project'},
    });
  }
};

projectController.deleteProject = async (req, res, next) => {
  const { id } = req.params;
  const deleteQuery = `DELETE FROM projects WHERE id=${id}`;
  try{
    const { rowCount } = await userDb.query(deleteQuery);
    res.locals.deleted = `${rowCount} project(s) deleted.`
    res.locals.success = rowCount === 1 ? true : false;
    console.log(res.locals.deleted)
    return next();
  }
  catch(err){
    return next({
      log: `error occurred in projectController.deleteProject: ${err}`,
      status: 400,
      message: {err: 'couldn\'t delete project'},
    });
  }
};

module.exports = projectController;
