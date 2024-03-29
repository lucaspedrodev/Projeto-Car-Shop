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

    const newCar = await carModel.createVehicle(car);

    return this.createCarDomain(newCar);
  }

  public async findCar(id:string | null = null) {
    const carModel = new CarModel();
    if (id) {
      const car = await carModel.getVehicleById(id);
      return this.createCarDomain(car);
    }
    const cars = await carModel.getAllVehicles();
    return cars.map((car) => this.createCarDomain(car));
  }

  public async updateCar(id: string, body: ICar): Promise<Car | null> {
    const carModel = new CarModel();
    const updatedCar = await carModel.updateVehicle(id, body);    
    return this.createCarDomain(updatedCar);
  }
}