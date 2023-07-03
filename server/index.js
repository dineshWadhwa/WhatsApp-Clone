import express from 'express';
import cors from 'cors';
import Connection from './Database/db.js';
import route from './routes/routes.js';

const app = express();
Connection();

app.use(cors());
app.use(express.json())
app.use('/',route);

const PORT = 8000;
app.listen(PORT,()=>console.log(`Server is running successfully on PORT ${PORT}`))