
import express from 'express';
import cors from 'cors';
import routes from './routes';
const app = express();
//http://localhost:3333/users
//http://localhost:3333/contact
app.use(cors());
app.use(express.json());
app.use(routes); 
app.listen(3333);