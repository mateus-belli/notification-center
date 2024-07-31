import { BaseEntity } from 'src/apps/base/domain/entities/base-entity';
import { NotificationMessageFormatError } from '../errors/notification-message-format-error';

export class NotificationMessageEntity extends BaseEntity {
  private _title: string;
  private _text: string;

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    if (value.length > 420) {
      throw new NotificationMessageFormatError();
    }

    this._text = value;
  }
}
