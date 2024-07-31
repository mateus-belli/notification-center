import { Injectable } from '@nestjs/common';
import { NotificationMessageEntity } from '../entities/notification-message.entity';
import { NotificationEntity } from '../entities/notification-entity';
import { INotificationRepository } from '../repositories/notification-repository';

@Injectable()
export class SendNotificationService {
  constructor(
    private readonly notificationRepository: INotificationRepository,
  ) {}

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

    await this.notificationRepository.create(notificationEntity);

    return { notificationEntity };
  }
}
