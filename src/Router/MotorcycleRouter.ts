import { Request, Response, Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleRouter = Router();

motorcycleRouter.post(
  '/',
  (req: Request, res: Response) => new MotorcycleController(req, res).createMotorcycle(),
);

export default motorcycleRouter;