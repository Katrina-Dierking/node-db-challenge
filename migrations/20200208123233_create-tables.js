
exports.up = async (knex) => {
    await knex.schema.createTable('projects', (table) => {
        table.increments('id').unique().notNullable();
        table.text('projects_name').uniqute().notNullable();
        table.string('projects_description', 159);
        table.boolean('projects_completed').notNullable().defaultTo(false);
    })

    await knex.schema.createTable('resources', table => {
        table.increments('id').unique().notNullable();
        table.text('resources_name').notNullable();
        table.string('resources_description', 159);

    })

    await knex.schema.createTable('tasks', table => {
        table.increments('id').unique().notNullable();
        table.string('tasks_description', 159).notNullable();
        table.text('tasks_notes');
        table.boolean('tasks_completed').notNullable().defaultTo(false);
        table.integer('projects_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .ondDelete('CASCADE');
    })
  
};

exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('tasks')
    await knex.schema.dropTableIfExists('resources')
    await knex.schema.dropTableIfExists('projects')
  
};
