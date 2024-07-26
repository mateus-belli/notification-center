import { BaseError } from 'src/apps/base/domain/errors/base-error';

export class NotificationMessageFormatError extends BaseError {
  constructor() {
    super();

    this.name = 'NOTIFICATION_MESSAGE_FORMAT_ERROR';
    this.message = `Notification message is wrongly formatted. Make sure that:
        * title has a minimum length of 15 characters;
        * title has a maximum length of 100 characters;
        * the message has a maximum of 420 characters.
      `;
  }
}
