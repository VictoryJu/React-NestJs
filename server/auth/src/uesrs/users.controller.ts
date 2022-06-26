import {
  Controller,
  Get,
  HttpException,
  Post,
  UseFilters,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';

@UseFilters(HttpException)
@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUser() {
    return 'all User';
  }

  @Get(':id')
  getUser() {
    return 'user';
  }

  @ApiResponse({
    status: 500,
    description: 'Server Error...',
  })
  @ApiResponse({
    status: 200,
    description: '로그인 성공!',
  })
  @ApiOperation({ summary: '로그인' })
  @Post('login')
  async login() {
    return 'login';
  }
}
