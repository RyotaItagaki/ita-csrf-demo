import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './hello/hello.controller';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [AuthModule, PostModule],
  controllers: [AppController, HelloController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
