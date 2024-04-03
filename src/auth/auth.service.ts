import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { prisma } from '../../prisma/client';
import { CreateUserDto } from './CreateUserDto';

@Injectable()
export class AuthService {
  async createUser(user: CreateUserDto) {
    // 分割代入
    const { name, email, password } = user;
    // ハッシュ化
    const hashedPassword = await bcrypt.hash(password, 10);
    // ユーザーを作成
    return prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  }

  async validateUser(email: string, password: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return null;
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return null;
    }
    return user;
  }
}
