import express from 'express';
import carRouter from './Router/CarRouter';

const app = express();
app.use(express.json());
app.use('/cars', carRouter);
export default app;