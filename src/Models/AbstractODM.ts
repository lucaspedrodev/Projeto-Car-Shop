import { Model, Schema, model, models } from 'mongoose';

export default abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected modelType: string;
  protected schema: Schema;
 
  constructor(schema: Schema, modelType: string) {
    this.modelType = modelType;
    this.schema = schema;
    this.model = models[this.modelType] || model(this.modelType, this.schema);
  }

  public async createVehicle(vehicle: T): Promise<T> {
    return this.model.create({ ...vehicle });
  }

  public async getAllVehicles(): Promise<T[]> {
    return this.model.find();
  }

  public async getVehicleById(id: string): Promise<T | null> {
    if (id) {
      return this.model.findById(id);
    }
    return null;
  }

  public async updateVehicle(id: string, body: T): Promise<T | null> {
    if (id) {
      return this.model.findOneAndUpdate({ _id: id }, body, { new: true });
    }
    return null;
  }
}