import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const originRegExp = new RegExp(/.*/);

  app.enableCors({
    origin: originRegExp,
    credentials: true,
  });
  app.use(cookieParser());
  app.use(
    session({
      secret: '24061817-0fb5-99b9-f8b8-089f0ec08c9b',
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        // sameSite: 'none',
        // secure: true,
        // maxAge: 24 * 60 * 60 * 1000,
        // path: '/',
      },
    }),
  );
  // app.use(
  //   cookieSession({
  //     keys: ['key1'],
  //   }),
  // );

  await app.listen(3000);
}
bootstrap();
