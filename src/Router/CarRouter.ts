import { Request, Response, Router } from 'express';
import CarController from '../Controllers/CarController';

const carRouter = Router();

carRouter.post('/', (req: Request, res: Response) => new CarController(req, res).createCar());

export default carRouter;