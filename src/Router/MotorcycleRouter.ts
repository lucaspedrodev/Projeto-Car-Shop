import { Request, Response, Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleRouter = Router();

motorcycleRouter.post(
  '/',
  (req: Request, res: Response) => new MotorcycleController(req, res).createMotorcycle(),
);
motorcycleRouter.get('/', (req, res) => new MotorcycleController(req, res).getAll());
motorcycleRouter.get('/:id', (req, res) => new MotorcycleController(req, res).getMotorcycleById());
motorcycleRouter.put(
  '/:id',
  (req: Request, res: Response) => new MotorcycleController(req, res).updateMotorcycle(),
);

export default motorcycleRouter;