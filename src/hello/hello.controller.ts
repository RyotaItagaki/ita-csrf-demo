import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get()
  getHello(): object {
    return {
      message: 'Hello World!',
    };
  }
}
