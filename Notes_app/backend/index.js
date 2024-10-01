import express from 'express';
import { ConnectDB } from './config/db.js';
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());

ConnectDB();

app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
