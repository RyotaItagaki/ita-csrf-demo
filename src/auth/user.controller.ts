import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './CreateUserDto';

@Controller('auth')
export class UserController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: CreateUserDto) {
    return await this.authService.createUser(body);
  }
}
