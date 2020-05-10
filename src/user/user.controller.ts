import { Controller, Post, Get, Body, UsePipes, Logger } from '@nestjs/common';

import { UserDTO } from './user.dto';
import { UserService } from './user.service';
import { ValidationPipe } from 'src/shared/validation.pipe';

@Controller('api')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('users')
  showAllUsers() {
    Logger.log('test api/users');
    return this.userService.showAll();
  }

  @Post('login')
  @UsePipes(new ValidationPipe())
  login(@Body() data: UserDTO) {
    Logger.log('test login');
    return this.userService.login(data);
  }

  @Post('register')
  @UsePipes(new ValidationPipe())
  register(@Body() data: UserDTO) {
    Logger.log('test register');
    return this.userService.register(data);
  }
}
