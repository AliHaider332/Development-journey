const Todo = require('../module/todoSchema');

exports.addTodo = (req, res) => {
  console.log(req.body);
  const todo = new Todo(req.body);

  todo
    .save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({
        message: 'Error while adding data',
        error: err.message,
      });
    });
};

exports.getAllTodos = (req, res) => {
  Todo.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({
        message: 'Error while fetching data',
        error: err.message,
      });
    });
};

exports.deleteTodo = (req, res) => {
  const id = req.params.id;
  Todo.findByIdAndDelete(id)
    .then((data) => {
      res.status(200).json({
        message: 'Todo deleted successfully',
        data: data,
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: 'Error while deleting todo',
        error: err.message,
      });
    });
};

exports.completeTodo = (req, res) => {
  const id = req.params.id;
  Todo.findByIdAndUpdate(id, {
    status: true,
  })
    .then((data) => {
      res.status(200).json({
        message: 'Todo marked as completed',
        data: data,
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: 'Error while updating todo',
        error: err.message,
      });
    });
};
