import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User.id) private readonly userModel: Model<User>) {}

  async existsById(id: string): Promise<boolean> {
    try {
      const result = await this.userModel.exists({ id });
      return result;
    } catch {
      throw new HttpException('db error', 400);
    }
  }
}
