import { Request, Response, Router } from 'express';
import CarController from '../Controllers/CarController';

const carRouter = Router();

carRouter.post('/', (req: Request, res: Response) => new CarController(req, res).createCar());
carRouter.get('/', (req, res) => new CarController(req, res).getAll());
carRouter.get('/:id', (req, res) => new CarController(req, res).findCarById());

export default carRouter;