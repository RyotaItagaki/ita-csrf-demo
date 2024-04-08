import { Controller, UseGuards, Post, Req, Res, Session } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('signin')
  async signin(
    @Req()
    req: Request,
    @Res()
    res: Response,
    @Session() session: Record<string, any>,
  ) {
    const user = req.user as {
      id: string;
      name: string;
      email: string;
    };

    session.userId = user.id;

    res.cookie('userId', user.id, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
      // 有効期限: 24時間
      maxAge: 24 * 60 * 60 * 1000,
      path: '/',
    });

    res.json({
      ...req.user,
    });
  }
}
