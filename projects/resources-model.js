const db = require('../db-Config.js');


function add(resource) {
    return db('resources')
        .insert(resource, 'id')
}

function find(id) {
    return db('projects as p')
        .join(
            'resources as r', 
            'r.project_id', 
            'p.id')
        .select(
            'r.id', 
            'r.name', 
            'r.description')
        .where({ project_id: id })
}

module.exports = {
    add,
    find
}