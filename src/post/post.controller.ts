import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Session,
} from '@nestjs/common';
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
  // @UseGuards(AuthGuard)
  @Post('create')
  async createPost(
    @Body() body: CreatePostDto,
    @Session() session: Record<string, any>,
  ) {
    console.log('session.userId', session.userId);

    const post = await this.postService.createPost({
      userId: session.userId,
      text: body.text,
    });

    return post;
    // return await this.postService.createPost(body);
  }
}
