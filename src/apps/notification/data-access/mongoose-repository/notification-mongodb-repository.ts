import { Injectable } from '@nestjs/common';
import { InjectModel, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';

export type NotificationMongooseDocument =
  HydratedDocument<NotificationMongoose>;

@Schema()
export class NotificationMongoose {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const NotificationMongooseSchema =
  SchemaFactory.createForClass(NotificationMongoose);

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(NotificationMongoose.name)
    private notificationModel: Model<NotificationMongoose>,
  ) {}

  create() {
    const notificationModel = new this.notificationModel({});

    notificationModel.save();
  }
}
