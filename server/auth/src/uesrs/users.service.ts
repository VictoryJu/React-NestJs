import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserRequestDto } from './dto/users.request.dto';
import { User } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.id) private readonly userModel: Model<User>) {}

  async login(body: UserRequestDto) {
    const { id, password } = body;
    const isUserExist = await this.userModel.exists({ id });
    if (!isUserExist) {
      throw new UnauthorizedException('해당하는 유저가 없습니다.');
    }
  }
}
