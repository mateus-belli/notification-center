import { UUID } from 'crypto';
import dayjs from 'dayjs';

export class BaseError extends Error {
  readonly service = 'notification';
  readonly timestamp: number = dayjs().unix();

  private _correlationId: UUID;

  set correlationId(value: UUID) {
    this._correlationId = value;
  }

  get correlationId(): UUID {
    return this._correlationId;
  }
}
