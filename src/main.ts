import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log(process.env.CORS_ORIGIN);

  app.enableCors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3001',
    credentials: true,
  });
  app.use(cookieParser());
  // app.use(
  //   session({
  //     secret: '24061817-0fb5-99b9-f8b8-089f0ec08c9b',
  //     resave: false,
  //     saveUninitialized: false,
  //     cookie: {
  //       httpOnly: true,
  //       sameSite: 'none',
  //     },
  //   }),
  // );
  // app.use(
  //   cookieSession({
  //     keys: ['key1'],
  //   }),
  // );

  await app.listen(3000);
}
bootstrap();
