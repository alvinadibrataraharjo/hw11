const Todo = require("../repositories/todoRepo");

class todoController {
  static showAllTodo(req, res) {
    Todo.showAllTodo((err, result) => {
      if (err) {
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.status(200).json({
            data: result.rows,
            message:'Success'
        });
      }
    });
  }

  static showTodoById(req, res) {
    Todo.showTodoById(req.params.id, (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.status(200).json({
            data: result.rows,
            message:'Success'
        });
      }
    });
  }

  static createTodo(req, res) {
    const title = req.body.title

    console.log(req.body.title, 'body')
    Todo.createTodo(title, (err, result) => {
        console.log(err); 
      if (err) {
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.status(200).json({
            message:'Success'
        });
      }
    });
  }

  static updateTodo(req, res) {
    const title = req.body.title
    const id = req.params.id

    console.log(req.body.title, 'body')

    Todo.updateById(id,title, (err, result) => {
        console.log(err); 
      if (err) {
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.status(200).json({
            message:'Success'
        });
      }
    });
  }

  static softDelete(req, res) {
    const id = req.params.id


    Todo.delete(id, (err, result) => {
        console.log(err); 
      if (err) {
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.status(200).json({
            message:'Success'
        });
      }
    });
  }
}

module.exports = todoController;