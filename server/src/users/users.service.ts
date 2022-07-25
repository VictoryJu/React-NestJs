import { Connection, Model } from 'mongoose';
import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create.user.dto';
import { User, UserDocument } from 'src/schemas/user.schema';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { hash } from 'src/util/hashed.password';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(
    @InjectConnection() private connection: Connection,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async signUp(body: CreateUserDto) {
    const { userId, password, email } = body;
    const isUserExist = await this.userModel.exists({ email });

    if (isUserExist) {
      throw new UnauthorizedException('이미 존재하는 유저입니다.');
    }

    const hashedPassword = await hash(password);

    const user = await this.userModel.create({
      userId,
      email,
      password: hashedPassword,
    });

    return user.readOnlyData;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
