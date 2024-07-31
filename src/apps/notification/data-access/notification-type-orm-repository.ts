import { NotificationEntity } from '../domain/entities/notification-entity';
import {
  INotificationFilter,
  INotificationRepository,
} from '../domain/repositories/notification-repository';

export class NotificationTypeOrmRepository implements INotificationRepository {
  list: (filter?: INotificationFilter) => Promise<NotificationEntity[]>;
  create: (notificationEntity: NotificationEntity) => Promise<void>;
  update: (id: string, notificationEntity: NotificationEntity) => Promise<void>;
  delete: (id: string) => Promise<void>;
  deleteMany: (filter?: INotificationFilter) => Promise<void>;
}
