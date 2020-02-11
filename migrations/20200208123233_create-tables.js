
exports.up = async (knex) => {
    await knex.schema.createTable('projects', (table) => {
        table.increments().unique().notNullable();
        table.text('name').unique().notNullable();
        table.string('description', 159);
        table.boolean('completed').notNullable().defaultTo(false);
    })

    await knex.schema.createTable('resources', table => {
        table.integers('project_id')
        table.text('name').notNullable();
        table.text('description', 159);

    })

    await knex.schema.createTable('tasks', table => {
        table.increments().unique().notNullable();
        table.string('description', 159).notNullable();
        table.text('notes');
        table.boolean('completed').notNullable().defaultTo(false);
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
