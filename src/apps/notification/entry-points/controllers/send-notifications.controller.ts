import { Body, Controller, Post } from '@nestjs/common';
import { SendNotificationService } from '../../domain/services/send-notification.service';

@Controller('/notifications')
export class SendNotificationsController {
  constructor(
    private readonly sendNotificationService: SendNotificationService,
  ) {}

  @Post()
  async send(
    @Body() body: { receiversIds: string[]; title: string; text: string },
  ) {
    const { receiversIds, title, text } = body;

    await this.sendNotificationService.execute({
      receiversIds,
      title,
      text,
    });
  }
}
