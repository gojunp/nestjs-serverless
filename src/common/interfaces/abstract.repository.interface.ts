export interface IAbstractRepository<T> {
  findAll(): Promise<T[]>;
  findById(id: string): Promise<T>;
  create(createDto: T): Promise<T>;
  update(id: string, updateDto: T): Promise<T>;
  delete(id: string): Promise<T>;
}
