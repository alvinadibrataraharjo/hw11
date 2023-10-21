const route = require('express').Router()

const controller = require('../controller/todoController.js')

route.get('/', controller.showAllTodo)
route.get('/:id', controller.showTodoById)
route.post('/', controller.createTodo)
route.put('/:id', controller.updateTodo)
route.delete('/:id', controller.softDelete)

module.exports = route