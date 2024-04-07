import { Injectable } from '@nestjs/common';
import { prisma } from '../../prisma/client';
import { CreatePostDto } from './Dto';

@Injectable()
export class PostService {
  // 投稿一覧取得
  async listPosts() {
    const posts = await prisma.post.findMany({
      include: {
        user: true,
      },
    });

    return posts.map((post) => {
      return {
        id: post.id,
        text: post.text,
        createdAt: post.createdAt,
        user: {
          id: post.user.id,
          name: post.user.name,
        },
      };
    });
  }

  // 投稿作成
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
