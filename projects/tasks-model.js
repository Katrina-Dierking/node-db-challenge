const db = require('../db-Config.js');

module.exports = {
    add,
    find
}

function add(task) {
    return db('tasks')
        .insert(task, 'id')
}

function find(id) {
    return ('projects as p')
        .join (
            'tasks as t', 
            't.project_id', 
            'p.id')

        .select (
            't.id', 
            't.project_id', 
            't.description',
            't.notes', 
            't.completed')

        .where({ project_id: id })
}