import { Request, Response } from 'express';
// import Car from '../Domains/Car';
import CarService from '../Services/CarService';

export default class CarController {
  private service: CarService;

  constructor(
    public req: Request,
    public res: Response,
  ) {
    this.service = new CarService();
  }

  public async createCar() {
    console.log(this.req.body);
    
    try {
      const newCar = await this.service.createCar(this.req.body);
      return this.res.status(201).json(newCar);
    } catch (error: any) {
      return this.res.status(400).json(error.message);
    }
  }
}