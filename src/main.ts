import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.use(
    session({
      secret: '24061817-0fb5-99b9-f8b8-089f0ec08c9b',
      resave: false,
      saveUninitialized: false,
    }),
  );

  await app.listen(3000);
}
bootstrap();
