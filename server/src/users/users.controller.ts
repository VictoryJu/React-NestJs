import { Body, Controller, Get, HttpException, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create.user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  async getAll() {
    throw new HttpException('api is broken', 401);
    return 'get All user';
  }

  @Post('regist')
  async createUser(@Body() data: CreateUserDto) {
    return this.usersService.signUp(data);
  }
}
