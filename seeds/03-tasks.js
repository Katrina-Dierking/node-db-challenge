exports.seed =  async (knex) => {
  await knex('tasks').insert ([
    {
      tasks_id: 1,
      tasks_description: 'create template from GoogleDoc',
      tasks_completed: false,
      projects_id: 1
    },

    {
      tasks_id: 2,
      tasks_description: 'Scan training kit for terminology',
      tasks_completed: false,
      projects_id: 1
    },

    {
      tasks_id: 3,
      tasks_description: 'Setup private channel',
      tasks_completed: false,
      projects_id: 2
    },

    {
      tasks_id: 4,
      tasks_description: 'pull names from dashboard',
      tasks_completed: false,
      projects_id: 2
    },

    {
      tasks_id: 5,
      tasks_description: 'send intro message',
      tasks_completed: false,
      projects_id: 2
    },

    {
      tasks_id: 6,
      tasks_description: 'set up github organization',
      tasks_completed: false,
      projects_id: 3
    },

    {
      tasks_id: 7,
      tasks_description: 'Set up Trello & walk through',
      tasks_completed: false,
      projects_id: 3
    },

    {
      tasks_id: 8,
      tasks_description: 'set up pair programming',
      tasks_completed: false,
      projects_id: 3
    },
  ]);
};

