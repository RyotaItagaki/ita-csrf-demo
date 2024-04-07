import { Controller, Post, Body } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './CreatePostDto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  // 投稿を作成
  @Post('create')
  async createPost(@Body() body: CreatePostDto) {
    return await this.postService.createPost(body);
  }
}
