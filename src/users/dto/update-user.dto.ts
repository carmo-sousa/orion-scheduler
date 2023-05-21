import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto {
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
}
