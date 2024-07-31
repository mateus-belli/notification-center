import { Controller, Get } from '@nestjs/common';
import { ListNotificationsService } from '../../domain/services/list-notifications.service';

@Controller('/notifications')
export class ListNotificationsController {
  constructor(
    private readonly listNotificationsService: ListNotificationsService,
  ) {}

  @Get()
  async execute() {
    return await this.listNotificationsService.execute();
  }
}
