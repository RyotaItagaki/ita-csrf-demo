import { Controller, Post, Body, Session, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './CreateUserDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: CreateUserDto) {
    return await this.authService.createUser(body);
  }

  @Post('signin')
  async signin(
    @Body() body: { email: string; password: string },
    @Session()
    session: {
      userId: number;
    },
  ) {
    const { email, password } = body;
    const user = await this.authService.validateUser(email, password);

    if (!user) {
      throw new HttpException(
        'メールアドレスかパスワードが間違っています。',
        401,
      );
    }

    session.userId = user.id;

    return user;
  }
}
