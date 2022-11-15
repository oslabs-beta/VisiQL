const fnKeyController = {};

fnKeyController.parseFnKeyData = async (req, res, next) => {
  try {
    const foreignKeys = {};
    await res.locals.fnKeys.forEach((ele) => {
      if (!foreignKeys[ele.table_name]) foreignKeys[ele.table_name] = {};
      const arr = ele.pg_get_constraintdef.split(' ');
      const fnKey = arr[2].slice(1, -1);
      foreignKeys[ele.table_name][fnKey] = {};
      const rawRef = arr[4].split('(');
      const refTable = rawRef[0];
      const refKey = rawRef[1].slice(0, -1);
      foreignKeys[ele.table_name][fnKey][refTable] = refKey;
    });
    res.locals.parsedFnKeys = foreignKeys;
    next();
    
  } catch (err) {
    return next({
      error: err,
      message: 'error occured in fnKeyController.parseFnKeyData',
      status: 400,
    });
  }
};

fnKeyController.parsePrimaryKeyData = async (req, res, next) => {
  try {
    const primaryKeys = {};
    await res.locals.fnKeys.forEach((ele) => {
      const arr = ele.pg_get_constraintdef.split(' ');
      const fnKey = arr[2].slice(1, -1);
      const rawRef = arr[4].split('(');
      const refTable = rawRef[0];
      const refKey = rawRef[1].slice(0, -1);
      if (!primaryKeys[refTable]) primaryKeys[refTable] = [];
      primaryKeys[refTable].push(ele.table_name);
    });
    res.locals.parsedPrimaryKeys = primaryKeys;
    console.log('res.locals.parsedPrimaryKeys: ', res.locals.parsedPrimaryKeys);
    next();
    
  } catch (err) {
    return next({
      error: err,
      message: 'error occured in fnKeyController.parsePrimaryKeyData',
      status: 400,
    });
  }
};

module.exports = fnKeyController;
