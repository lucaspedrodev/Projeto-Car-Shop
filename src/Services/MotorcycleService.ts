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
}