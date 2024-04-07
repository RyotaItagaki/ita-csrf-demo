import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './Dto';
import { AuthGuard } from '../auth/guards/auth.guard';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}
  // 投稿一覧を取得
  @Get('list')
  async listPosts() {
    return await this.postService.listPosts();
  }

  // 投稿を作成
  @UseGuards(AuthGuard)
  @Post('create')
  async createPost(@Body() body: CreatePostDto) {
    return await this.postService.createPost(body);
  }
}
