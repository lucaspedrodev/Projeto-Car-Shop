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
}