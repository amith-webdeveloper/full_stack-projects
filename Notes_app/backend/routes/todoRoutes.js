import express from 'express';

import {createTodo , getTodos , searchTodosByTag} from '../controllers/todoController.js'
import authMiddleware from '../middlewares/authMiddleware.js'
const router = express.Router();

router.post('/', authMiddleware, createTodo);
router.get('/', authMiddleware, getTodos);
router.get('/search', authMiddleware, searchTodosByTag);

export default router;