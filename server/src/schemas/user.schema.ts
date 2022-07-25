import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsString } from 'class-validator';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  @IsString()
  userId: string;

  @IsString()
  @Prop({ required: true })
  password: string;

  @IsEmail()
  @Prop()
  email: string;

  readonly readOnlyData: { email: string; userId: string };
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.virtual('readOnlyData').get(function (this: User) {
  return {
    userId: this.userId,
    email: this.email,
  };
});
