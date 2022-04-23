export abstract class BaseInfrastructure<T, U> {
  update(user: T): Promise<T> {
    throw new Error("Method not implemented.");
  }
  delete(id: U): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  findById(id: U): Promise<T> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<T[]> {
    return Promise.resolve([{ username: "user" }, { username: "user 2" }] as any[]);
  }
  insert(user: T): Promise<T> {
    return Promise.resolve(user);
  }
}
