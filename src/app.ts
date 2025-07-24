import express from 'express';
import cors from 'cors'
import routes from './Routers';
// const cors=require("cors")
const app = express();

app.use(cors());
app.use(express.json());

app.use('/', routes);

export default app;