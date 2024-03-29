import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

export default class CarM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Car');
  }
}
// public async createCar(car: ICar): Promise<ICar> {
//   return this.model.create({ ...car });
// }

// public async getAll(): Promise<ICar[]> {
//   return this.model.find();
// }

// public async getById(id: string): Promise<ICar | null> { 
//   return this.model.findById(id);
// }
// public async updateCar(id:string, body: ICar): Promise<ICar | null> {
//   return this.model.findByIdAndUpdate({ _id: id }, body, { new: true });
// }
