const route = require('express').Router();
const todoRoute = require('./todoRoutes.js')

route.use('/', todoRoute)

module.exports = route;