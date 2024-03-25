import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { prisma } from '../../prisma/client';

@Injectable()
export class AuthService {
  async createUser(userInput: {
    name: string;
    email: string;
    password: string;
  }) {
    // 分割代入
    const { name, email, password } = userInput;
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
}
