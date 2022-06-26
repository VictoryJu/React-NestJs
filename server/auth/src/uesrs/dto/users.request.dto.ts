import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UserRequestDto {
  @ApiProperty({
    example: 'userId',
    description: 'id',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    example: 'asdf1234',
    description: 'password',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
