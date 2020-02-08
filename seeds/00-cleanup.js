// const cleaner = require('knex-cleaner');

exports.seed = async (knex) => {
  await knex("tasks").truncate()
  await knex("resources").truncate()
  await knex("projects").truncate()
  
};

