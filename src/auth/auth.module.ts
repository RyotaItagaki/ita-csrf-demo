import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { UserController } from './user.controller';
import { AuthController } from './auth.controller';

@Module({
  imports: [PassportModule.register({ session: true })],
  controllers: [AuthController, UserController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
