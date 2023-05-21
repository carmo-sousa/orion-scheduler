import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger();
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);

    if (user?.password !== pass) {
      return new UnauthorizedException();
    }

    const payload = {
      username: user.username,
      sub: user.id,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
