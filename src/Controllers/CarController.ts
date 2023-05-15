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
    // console.log(this.req.body);
    
    try {
      const newCar = await this.service.createCar(this.req.body);
      return this.res.status(201).json(newCar);
    } catch (error) {
      return this.res.status(400).json('error');
    }
  }

  public async getAll() {
    const result = await this.service.findCar();
    return this.res.status(200).json(result);
  }

  public async findCarById() {
    try {
      const { id } = this.req.params;
      const car = await this.service.findCar(id);
      if (!car) {
        return this.res.status(404).json({ message: 'Car not found' });
      }
      return this.res.status(200).json(car);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }

  public async updateCar() {
    const { id } = this.req.params;
    const { body } = this.req;
    try {
      const car = await this.service.updateCar(id, body);

      if (!car) {
        return this.res.status(404).json({ message: 'Car not found' });
      }
      return this.res.status(200).json(car);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
} 
