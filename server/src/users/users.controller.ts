import { Body, Controller, Get, HttpException, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create.user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  async getAll() {
    const nameArr = [
      {
        id: 1,
        name: 'choi',
        age: 25,
      },
      {
        id: 2,
        name: 'lee',
        age: 20,
      },
    ];
    return nameArr;
  }

  @Post('regist')
  async createUser(@Body() data: CreateUserDto) {
    return this.usersService.signUp(data);
  }
}
