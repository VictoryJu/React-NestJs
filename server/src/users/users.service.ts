import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import User from './users.model';
import { CreateUserDto } from 'src/dto/create.user.dto';

@Injectable()
export class CatsService {
  constructor(
    @Inject('USER_MODEL')
    private catModel: Model<User>,
  ) {}

  async create(createCatDto: CreateUserDto): Promise<User> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<User[]> {
    return this.catModel.find().exec();
  }
}
