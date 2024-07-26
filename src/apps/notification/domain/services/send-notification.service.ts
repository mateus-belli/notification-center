import { Injectable } from '@nestjs/common';
import { NotificationEntity } from '../entities/notification-entity';
import { NotificationMessageEntity } from '../entities/notification-message-entity';

@Injectable()
export class SendNotificationService {
  async execute(request: {
    receiversIds: string[];
    title: string;
    text: string;
  }) {
    const { receiversIds, title, text } = request;

    const notificationEntity = NotificationEntity.create({
      receiversIds,
      message: NotificationMessageEntity.create({
        title,
        text,
      }),
    });

    return { notificationEntity };
  }
}
