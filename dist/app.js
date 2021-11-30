import express from 'express';
import compression from 'compression';
import cors from 'cors';
import config from './config/index.js';
const app = express();
app.get('/', (req, res)=>{
    res.send('GraphQL API with Express + Typescript Server ' + req.query.param);
});
app.get('/about', (req, res)=>res.send("It's all about me!")
);
app.use(compression);
app.use(cors());
app.listen(config.port, ()=>{
    console.log(`⚡️[server]: Server is running at http://localhost:${config.port}`);
});
