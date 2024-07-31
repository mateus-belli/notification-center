import { Injectable } from '@nestjs/common';
import { NotificationEntity } from '../entities/notification-entity';

@Injectable()
export class NotificationResponse {
  toHttp(notificationEntity: NotificationEntity) {
    return {
      id: notificationEntity.id,
      title: notificationEntity.message.title,
      message: notificationEntity.message.text,
    };
  }
}
