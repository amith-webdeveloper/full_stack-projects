import Todo  from "../Models/todo.model.js";

export const createTodo = async (req, res) => {
  const { title, description, tags } = req.body;

  try {
    const newTodo = new Todo({
      userId: req.user.id,
      title,
      description,
      tags
    });
    await newTodo.save();
    res.status(201).json({ message: 'Todo created' });
  } catch (err) {
    res.status(400).json({ message: 'Error creating todo' });
  }
};

export const getTodos = async (req, res) => {
  const todos = await Todo.find({ userId: req.user.id });
  res.json(todos);
};

export const searchTodosByTag = async (req, res) => {
  const { tag } = req.query;
  const todos = await Todo.find({ userId: req.user.id, tags: { $in: [tag] } });
  res.json(todos);
};
