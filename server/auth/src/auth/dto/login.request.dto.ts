import { PickType } from '@nestjs/swagger';
import { User } from 'src/uesrs/user.schema';

export class LoginRequestDto extends PickType(User, [
  'id',
  'password',
] as const) {}
