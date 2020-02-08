
exports.up = async (knex) => {
    await knex.schema.createTable('projects', (table) => {
        table.increments('id').unique().notNullable();
        table.text('projects_name').uniqute().notNullable();
        table.string('projects_description');
        table.boolean('completed').notNullable().defaultTo(false);
    })

    await knex.schema.createTable('presources', table => {
        
    })

    await knex.schema.createTable('tasks', table => {
        
    })
  
};

exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('tasks')
    await knex.schema.dropTableIfExists('resources')
    await knex.schema.dropTableIfExists('projects')
  
};
