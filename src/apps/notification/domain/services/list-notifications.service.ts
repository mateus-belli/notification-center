import { Injectable } from '@nestjs/common';
import {
  INotificationFilter,
  INotificationRepository,
} from '../repositories/notification-repository';

@Injectable()
export class ListNotificationsService {
  constructor(
    private readonly notificationRepository: INotificationRepository,
  ) {}

  async execute(filter?: INotificationFilter) {
    return await this.notificationRepository.list(filter);
  }
}
