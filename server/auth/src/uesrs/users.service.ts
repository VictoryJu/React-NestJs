import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRequestDto } from './dto/users.request.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  async login(body: UserRequestDto) {
    const { id, password } = body;
    const isUserExist = await this.userRepository.findUserById({ id });
    if (!isUserExist) {
      throw new UnauthorizedException('해당하는 유저가 없습니다.');
    }
  }

  async getAllUser() {
    const users = await this.userRepository.findAll();
    const readOnlyUsers = users.map((cat) => cat.readOnlyData);
    return readOnlyUsers;
  }
}
