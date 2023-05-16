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

  public async getAll() {
    const result = await this.service.findMotorcycle();
    return this.res.status(200).json(result);
  }

  public async getMotorcycleById() {
    try {
      const { id } = this.req.params;
      const car = await this.service.findMotorcycle(id);
      if (!car) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      return this.res.status(200).json(car);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }

  public async updateMotorcycle() {
    const { id } = this.req.params;
    const { body } = this.req;
    try {
      const motorcycle = await this.service.updateMotorcycle(id, body);

      if (!motorcycle) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      return this.res.status(200).json(motorcycle);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}