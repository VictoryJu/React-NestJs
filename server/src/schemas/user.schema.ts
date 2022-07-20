import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  userId: String,
  password: String,
  name: String,
  email: String,
});
