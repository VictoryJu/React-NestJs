import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);