import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { NotificationModule } from './apps/notification/notification.module';
import { ScheduleModule } from '@nestjs/schedule';
import { CorrelationMiddlewareMiddleware } from './middlewares/correlation/correlation.middleware';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
    NotificationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorrelationMiddlewareMiddleware).forRoutes('*');
  }
}
