import  { useState, useEffect } from 'react';
import { createTodo, getTodos, searchTodos } from '../services/api';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [searchTag, setSearchTag] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const { data } = await getTodos(token);
    setTodos(data);
  };

  const handleCreateTodo = async () => {
    const newTodo = { title, description, tags: tags.split(',') };
    await createTodo(newTodo, token);
    fetchTodos();
  };

  const handleSearch = async () => {
    const { data } = await searchTodos(searchTag, token);
    setTodos(data);
  };

  return (
    <div className="container">
      <header>
        <div className="logo">Notes</div>
        <div>
          <button onClick={() => { localStorage.removeItem('token'); window.location.href = '/' }}>Logout</button>
        </div>
      </header>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by tag"
          value={searchTag}
          onChange={(e) => setSearchTag(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div>
        <h2>Create New Todo</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tags (comma-separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <button onClick={handleCreateTodo}>Create Todo</button>
      </div>

      <div>
        <h2>Todos</h2>
        {todos.map((todo) => (
          <div key={todo._id} className="todo">
            <h3 className="todo-title">{todo.title}</h3>
            <p>{todo.description}</p>
            <p>Tags: {todo.tags.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
