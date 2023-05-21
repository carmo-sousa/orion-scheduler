import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Logger,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger();

  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  public signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  public getProfile(@Request() req: any) {
    return req.user;
  }
}
