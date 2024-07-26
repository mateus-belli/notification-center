import { NotificationEntity } from '../entities/notification-entity';

export class NotificationResponse {
  toHttp(notificationEntity: NotificationEntity) {
    return {
      id: notificationEntity.id,
      receiversIds: notificationEntity.receiversIds,
      title: notificationEntity.message.title,
      message: notificationEntity.message.text,
    };
  }
}
