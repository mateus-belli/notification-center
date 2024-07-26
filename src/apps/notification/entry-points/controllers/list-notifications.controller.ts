import { Controller, Post } from '@nestjs/common';
import { SendNotificationService } from '../../domain/services/send-notification.service';

@Controller()
export class ListNotificationsController {
  constructor(
    private readonly sendNotificationService: SendNotificationService,
  ) {}

  @Post()
  async send() {}
}
