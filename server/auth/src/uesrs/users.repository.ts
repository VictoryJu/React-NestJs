import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async findUserById(id: any): Promise<User | null> {
    const user = await this.userModel.findOne({ id });
    return user;
  }

  //password를 제외하고 가져옴 select("-password") 보안상의 이유로 password를 가져오지않음
  async findCatByIdWithoutPassword(userId: string): Promise<User | null> {
    const user = await this.userModel.findById(userId).select('-password');
    return user;
  }

  async findAll() {
    const users = await this.userModel.find();
    return users;
  }
}
