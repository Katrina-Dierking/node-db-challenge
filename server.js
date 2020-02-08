const express = require('express');

// const Router = require('./projects/router.js');

const server = express();

server.use(express.json());
// server.use('/api/projects', ProjectRouter);

module.exports = server;