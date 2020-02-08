const db = require('../data/db-config.js')

function find () {
    return db('projects');
};

function findById(id) {
    return db('projects')
        .where({ id })
        .first()
}

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