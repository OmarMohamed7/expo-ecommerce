import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import ENV from '../backend/src/config/env.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


const __dirname = path.resolve();

app.get('/api/health', (req, res) => {
    res.status(200).json({ message: 'success' });
});


// Make app ready for deployment
if (ENV.NODE_ENV === 'prod') {
    app.use(express.static(path.join(__dirname, '../admin/dist')));
    app.get('/{*any}', (req, res) => {
        res.sendFile(path.join(__dirname, '../admin/dist/index.html'));
    });
}

export default app;
