import { BaseEntity } from 'src/apps/base/domain/entities/base-entity';
import { NotificationMessageEntity } from './notification-message.entity';

export class NotificationEntity extends BaseEntity {
  private _receiversIds: string[];
  private _message: NotificationMessageEntity;

  set receiversIds(val: string[]) {
    this._receiversIds = val;
  }

  get receiversIds() {
    return this._receiversIds;
  }

  set message(val: NotificationMessageEntity) {
    this._message = val;
  }

  get message() {
    return this._message;
  }
}
