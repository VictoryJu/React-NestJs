import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly userId: string;

  @IsString()
  readonly password: number;

  @IsEmail()
  readonly email: string;
  // 배열이면 each true, 옵션값이면 IsOptional 사용
  // @IsOptional()
  // @IsString({ each: true })
  // readonly address: string[];
}
