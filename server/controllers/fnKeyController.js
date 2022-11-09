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
    console.log('res.locals.parsedFnKeys: ', res.locals.parsedFnKeys);
    next();
  } catch (err) {
    return next({
      error: err,
      message: 'error occured in dbLinkController.test',
      status: 400,
    });
  }
};

module.exports = fnKeyController;
