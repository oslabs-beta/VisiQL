

const treeController = {};

treeController.treeSchema = (req, res, next) => {
const db = res.locals.dbSchema;

const tree = {
    name: db.db_name,
    children: [],
};
const tables = db.tables;
for (const table in db.tables) { //--need to iterate over so children isn't getting over written each time
    const obj = {
        name: table,
        children: [],
    };
    for (const col in db.tables[table].columns){
        const ob = {
            name: col,
        };
        obj.children.push(ob);
    };
    tree.children.push(obj);
};
res.locals.tree = tree;
console.log(tree);
console.log(tree.children[2]);

return next();
};

module.exports = treeController;