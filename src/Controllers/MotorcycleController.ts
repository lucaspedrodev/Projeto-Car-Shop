import { Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private service: MotorcycleService;

  constructor(
    public req: Request,
    public res: Response,
  ) {
    this.service = new MotorcycleService();
  }

  public async createMotorcycle() {
    try {
      const newMotorcycle = await this.service.createMotorcycle(this.req.body);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      return this.res.status(400).json('error');
    }
  }
}