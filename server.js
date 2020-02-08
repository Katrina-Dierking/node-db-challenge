const express = require('express');
const helmet = require('helmet');

const Projects = require('./projects/projects-routes.js');
const Resources = require('./projects/resources-routes.js');
const Tasks = require('./projects/tasks-routes.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', Projects);
server.use('/api/projects', Resources);
server.use('/api/projects', Tasks);

module.exports = server;