import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification-repository';
import dayjs from 'dayjs';

@Injectable()
export class CleanNotificationsService {
  constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {}

  async execute(request: { days: number }) {
    const { days } = request;

    const notificationEntityList = await this.notificationRepository.list({
      createdAt: {
        lte: dayjs().subtract(days, 'day').unix(),
      },
    });

    await this.notificationRepository.deleteMany({
      id: notificationEntityList.map(
        (notificationEntity) => notificationEntity.id,
      ),
    });
  }
}
