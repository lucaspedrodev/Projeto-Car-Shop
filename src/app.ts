import express from 'express';
import carRouter from './Router/CarRouter';
import motorcycleRouter from './Router/MotorcycleRouter';

const app = express();
app.use(express.json());
app.use('/cars', carRouter);
app.use('/motorcycles', motorcycleRouter);
export default app;