const treeController = {};

treeController.treeSchema = (req, res, next) => {
const db = res.locals.dbSchema;
const foreignTables = Object.keys(res.locals.parsedFnKeys);
if (!db) {
    return next({
        error: err,
        message: 'error occured in treeController.treeSchema',
        status: 400,
      });
};
const tree = {
    name: db.db_name,
    children: [],
};
const tables = db.tables;
for (const table in db.tables) { 
    const obj = {
        name: table,
        children: [],
    };
    for (const col in db.tables[table].columns){
        const ob = {
            name: col,
        };
        // if table has foreign key(s)
        if (foreignTables.includes(table) && res.locals.parsedFnKeys[table][col]) {
          const refTable = Object.keys(res.locals.parsedFnKeys[table][col])[0];
          const refCol = Object.values(res.locals.parsedFnKeys[table][col])[0];
          const foreignChildren = [];
          for (const fnCol in db.tables[refTable].columns) {
            const fnOb = {
                name: fnCol,
            };
            if (fnCol === refCol) fnOb.name = `primKey${fnCol}`
            foreignChildren.push(fnOb);
          }
          ob.children = [{ name: refTable, children: foreignChildren }];
        }
        obj.children.push(ob);
    };
    tree.children.push(obj);
};
res.locals.tree = tree;
// console.log(res.locals.tree);
// console.log(tree.children[2]);

return next();
};

module.exports = treeController;