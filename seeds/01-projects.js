exports.seed =  async (knex) => {
  await knex('projects').insert ([
    {
      projects_id: 1,
      projects_name: 'Create Lambda Glossary', 
      projects_description: 'The user-friendly handbook to WebDev terminology',
      projects_completed: 'false'
    },

    {
      projects_id: 2,
      projects_name: 'Build Web29_KatrinaDierking Channel', 
      projects_description: 'Our Small Corner of the World',
      projects_completed: 'false'
    },

    {
      projects_id: 3,
      projects_name: 'BuildWeek Bootcamp', 
      projects_description: 'Prepping for buildweek: Practice makes perfect',
      projects_completed: 'false'
    },
  ]);
};