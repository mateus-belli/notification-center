import { NotificationEntity } from '../entities/notification-entity';

export interface INotificationFilter {
  id?: string | string[];
  createdAt?: {
    lte?: number;
    gte?: number;
  };
}

export abstract class INotificationRepository {
  abstract list: (
    filter?: INotificationFilter,
  ) => Promise<NotificationEntity[]>;
  abstract create: (notificationEntity: NotificationEntity) => Promise<void>;
  abstract update: (
    id: string,
    notificationEntity: NotificationEntity,
  ) => Promise<void>;
  abstract delete: (id: string) => Promise<void>;
  abstract deleteMany: (filter?: INotificationFilter) => Promise<void>;
}
