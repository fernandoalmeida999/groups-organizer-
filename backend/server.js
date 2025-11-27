import express from 'express';
import cors from 'cors';
import initDb from './config/db';

import usersRoutes from './routes/usersRoutes.js';
import itemsRoutes from './routes/itemsRoutes.js';  

const app = express();
app.use(cors());
app.use(express.json());

// middleware to attach db to req

app.use(async (req, res, next) => {
    req.db = await initDb();
    next();
});

app.use('/api', usersRoutes);
app.use('/api', itemsRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});