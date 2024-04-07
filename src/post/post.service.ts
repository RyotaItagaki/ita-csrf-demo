import { Injectable } from '@nestjs/common';
import { prisma } from '../../prisma/client';
import { CreatePostDto } from './CreatePostDto';

@Injectable()
export class PostService {
  async createPost(post: CreatePostDto) {
    // 分割代入
    const { userId, text } = post;

    // 投稿を作成
    return prisma.post.create({
      data: {
        text,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }
}
