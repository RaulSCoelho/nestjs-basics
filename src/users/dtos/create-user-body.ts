import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty()
  @Length(1, 255)
  @ApiProperty()
  name: string;

  @IsNotEmpty({ message: 'Email is required' })
  @ApiProperty()
  email: string;
}
