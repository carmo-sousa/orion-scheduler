import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UUID } from 'crypto';

@Injectable()
export class UsersService {
  private readonly logger: Logger = new Logger(UsersService.name);

  constructor(
    @Inject('USERS_REPOSITORY') private usersRepository: Repository<User>,
  ) {}

  public async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.username = createUserDto.username;
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.email = createUserDto.email;

    const saltOrRounds = 10;
    const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);

    user.password = hash;

    this.logger.debug(user);

    return this.usersRepository.save(user);
  }

  public findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  public findOne(id: string): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  public findByUsername(username: string) {
    return this.usersRepository.findOneBy({
      username,
    });
  }

  public async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`O usuário com o id: ${id} não existe.`);
    }

    Object.assign(user, updateUserDto);

    return await this.usersRepository.save(user);
  }

  remove(id: string) {
    return this.usersRepository.delete(id);
  }
}
