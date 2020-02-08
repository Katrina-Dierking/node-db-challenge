const db = require('../data/db-config.js')

function find () {
    return db('projects');
};

function add (project) {
    return db('projects')
    .insert (project, "id")
    .then(([id]) => {
        return findById(id);
    });
}

module.exports = {
    find,
    findById,
    add
}