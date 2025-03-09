import { Controller, Get, Post } from '@nestjs/common';

@Controller('/api/users')
export class UserController {
  @Post()
  post(): string {
    return 'POST /api/users';
  }

  @Get('/sample')
  get(): string {
    return 'GET /api/users/sample';
  }
}
