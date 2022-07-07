import {
  Body,
  Controller,
  Get,
  HttpException,
  Post,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { LoginRequestDto } from 'src/auth/dto/login.request.dto';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { UsersService } from './users.service';

@Controller('user')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpException)
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  // @ApiResponse({
  //   status: 500,
  //   description: 'Server Error...',
  // })
  // @ApiResponse({
  //   status: 200,
  //   description: '로그인 성공!',
  // })
  // @ApiOperation({ summary: '로그인' })
  // @Post('login')
  // login(@Body() data: LoginRequestDto) {
  //   return this.authService.jwtLogIn(data);
  // }

  @Get('all')
  getAllUser() {
    return this.usersService.getAllUser();
  }
}
