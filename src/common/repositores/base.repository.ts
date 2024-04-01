import { Model } from 'mongoose';
import { IAbstractRepository } from '../interfaces/abstract.repository.interface';

export class BaseRepository<T> implements IAbstractRepository<T> {
  constructor(private readonly model: Model<T>) {}

  findAll(): Promise<T[]> {
    return this.model.find().exec();
  }

  findById(id: string): Promise<T> {
    return this.model.findById(id).exec();
  }

  create(createDto: T): Promise<T> {
    return this.model.create(createDto);
  }

  update(id: string, updateDto: T): Promise<T> {
    return this.model.findByIdAndUpdate(id, updateDto, { new: true }).exec();
  }

  delete(id: string): Promise<T> {
    return this.model.findByIdAndDelete(id).exec();
  }
}
