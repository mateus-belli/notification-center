import { Module } from '@nestjs/common';
import { ListNotificationsController } from './entry-points/controllers/list-notifications.controller';
import { SendNotificationsController } from './entry-points/controllers/send-notifications.controller';
import { SendNotificationService } from './domain/services/send-notification.service';
import { CleanNotificationsService } from './domain/services/clean-notifications.service';
import { CleanNotificationSchedule } from './entry-points/schedules/clean-notifications-schedule';
import { INotificationRepository } from './domain/repositories/notification-repository';
import { NotificationTypeOrmRepository } from './data-access/notification-type-orm-repository';
import { ListNotificationsService } from './domain/services/list-notifications.service';

@Module({
  providers: [
    // Services
    ListNotificationsService,
    SendNotificationService,
    CleanNotificationsService,
    // Schedulers
    CleanNotificationSchedule,
    // Repositories
    {
      provide: INotificationRepository,
      useClass: NotificationTypeOrmRepository,
    },
  ],
  controllers: [ListNotificationsController, SendNotificationsController],
})
export class NotificationModule {}
