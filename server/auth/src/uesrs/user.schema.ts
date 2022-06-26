import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaOptions } from 'mongoose';

type UserType = {
  id: string;
  password: string;
};

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class User extends Document {
  @Prop({
    required: true,
    unique: true,
  })
  id: string;

  @Prop({
    required: true,
  })
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
