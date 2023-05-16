import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotorcycleModel';

export default class MotorcycleService {
  public createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async createMotorcycle(motorcycle: IMotorcycle): Promise< Motorcycle | null> {    
    const motorcycleModel = new MotorcycleModel();
    const newMotorcycle = await motorcycleModel.createVehicle(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async findMotorcycle(id:string | null = null) {
    const motorcycleModel = new MotorcycleModel();
    if (id) {
      const car = await motorcycleModel.getVehicleById(id);
      return this.createMotorcycleDomain(car);
    }
    const cars = await motorcycleModel.getAllVehicles();
    return cars.map((motorcycle) => this.createMotorcycleDomain(motorcycle));
  }
}