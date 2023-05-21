import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly logger: Logger = new Logger(UsersService.name);

  constructor(
    @Inject('USERS_REPOSITORY') private usersRepository: Repository<User>,
  ) {}

  public create(createUserDto: CreateUserDto): Promise<User> {
    this.logger.log('createUserDto: ' + JSON.stringify(createUserDto));
    return this.usersRepository.save(createUserDto);
  }

  public findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  public findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  public findByUsername(username: string) {
    return this.usersRepository.findOneBy({
      username,
    });
  }

  public update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    return this.usersRepository.save(updateUserDto);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
