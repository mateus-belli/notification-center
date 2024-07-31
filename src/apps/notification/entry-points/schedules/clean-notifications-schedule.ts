import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { CleanNotificationsService } from '../../domain/services/clean-notifications.service';

@Injectable()
export class CleanNotificationSchedule {
  static readonly REMOVE_AFTER_DAYS = 30;

  constructor(
    private readonly cleanNotificationsService: CleanNotificationsService,
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_1PM)
  async trigger() {
    await this.cleanNotificationsService.execute({
      days: CleanNotificationSchedule.REMOVE_AFTER_DAYS,
    });
  }
}
