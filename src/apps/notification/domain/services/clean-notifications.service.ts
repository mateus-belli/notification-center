import { Injectable } from '@nestjs/common';
import { INotificationRepository } from '../repositories/notification-repository';
import dayjs from 'dayjs';

@Injectable()
export class CleanNotificationsService {
  constructor(
    private readonly notificationRepository: INotificationRepository,
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
