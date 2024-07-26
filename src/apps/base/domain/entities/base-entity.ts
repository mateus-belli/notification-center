import { randomUUID, UUID } from 'crypto';

export interface IBaseProperties {
  id: UUID;
  createdAt: number;
  updatedAt: number;
}

type IOmittedProperties = 'id' | 'createdAt' | 'updatedAt' | 'update';

export class BaseEntity {
  protected _id: UUID;
  protected _createdAt: number;
  protected _updatedAt: number;

  static create<T extends BaseEntity>(
    this: new () => T,
    properties: Omit<T, IOmittedProperties>,
  ): T {
    const instance = new this();

    instance._id = randomUUID();
    instance._createdAt = new Date().getTime();
    instance._updatedAt = new Date().getTime();

    Object.assign(instance, properties);

    return instance;
  }

  update<P extends Partial<Omit<this, IOmittedProperties>>>(properties: P) {
    Object.assign(this, properties);

    this._id = randomUUID();
    this._createdAt = new Date().getTime();
    this._updatedAt = new Date().getTime();
  }

  public get id() {
    return this._id;
  }

  protected set id(val: UUID) {
    this._id = val;
  }

  public get createdAt() {
    return this._createdAt;
  }

  protected set createdAt(val: number) {
    this._createdAt = val;
  }

  public get updatedAt() {
    return this._updatedAt;
  }

  protected set updatedAt(val: number) {
    this._updatedAt = val;
  }
}
