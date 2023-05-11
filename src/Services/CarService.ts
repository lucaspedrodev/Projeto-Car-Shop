import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

export default class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async createCar(car: ICar): Promise<Car | null> {    
    const carModel = new CarModel();

    const newCar = await carModel.createCar(car);

    return this.createCarDomain(newCar);
  }

  public async findCar(id:string | null = null) {
    const carModel = new CarModel();
    if (id) {
      const car = await carModel.getById(id);
      return this.createCarDomain(car);
    }
    const cars = await carModel.getAll();
    return cars.map((car) => this.createCarDomain(car));
  }
}