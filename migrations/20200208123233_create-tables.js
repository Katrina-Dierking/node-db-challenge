
exports.up = async (knex) => {
    await knex.schema.createTable('projects', (table) => {
        table.increments('projects_id').unique().notNullable();
        table.text('projects_name').unique().notNullable();
        table.string('projects_description', 159);
        table.boolean('projects_completed').notNullable().defaultTo(false);
    })

    await knex.schema.createTable('resources', table => {
        table.increments('resources_id').unique().notNullable();
        table.text('resources_name').notNullable();
        table.string('resources_description', 159);

    })

    await knex.schema.createTable('tasks', table => {
        table.increments('tasks_id').unique().notNullable();
        table.string('tasks_description', 159).notNullable();
        table.text('tasks_notes');
        table.boolean('tasks_completed').notNullable().defaultTo(false);
        table.integer('projects_id')
            .unsigned()
            .notNullable()
            .references('projects_id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
  
};

exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('tasks')
    await knex.schema.dropTableIfExists('resources')
    await knex.schema.dropTableIfExists('projects')
  
};
