const express = require('express');
const routes = express.Router();
const { ... Users } = require('../../Controllers/UsersController');

routes.get('/users', Users.index);

module.exports = routes;