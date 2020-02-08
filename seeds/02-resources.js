exports.seed =  async (knex) => {
  await knex('resources').insert ([
    {
      resources_id: 1,
      resources_name: 'Lambda Training Kit', 
      resources_description: 'Locating every new word used',
    },

    {
      resources_id: 2,
      resources_name: 'Websters Dictionary', 
      resources_description: 'Layman\'s terms for understand technology'
    },

    {
      resources_id: 3,
      resources_name: 'TL Dashboard', 
      resources_description: 'Used to locate current students',
    },

    {
      resources_id: 4,
      resources_name: 'Trello', 
      resources_description: 'Understanding the buildweek flow and teamwork',
    },

    {
      resources_id: 5,
      resources_name: 'VSCode LiveShare', 
      resources_description: 'Understanding how to pair-program & handle merge conflicts',
    },

    {
      resources_id: 6,
      resources_name: 'Github', 
      resources_description: 'Using repos, merges, commands',
    },
  ]);
};
