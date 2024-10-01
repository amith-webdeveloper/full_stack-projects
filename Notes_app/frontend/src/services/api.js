import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const login = (username, password) => api.post('/auth/login', { username, password });
export const register = (username, password) => api.post('/auth/register', { username, password });
export const createTodo = (todo, token) => api.post('/todos', todo, { headers: { Authorization: token } });
export const getTodos = (token) => api.get('/todos', { headers: { Authorization: token } });
export const searchTodos = (tag, token) => api.get(`/todos/search?tag=${tag}`, { headers: { Authorization: token } });
