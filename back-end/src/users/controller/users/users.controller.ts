import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { UsersService } from 'src/users/services/users/users.service';
import { updateUser } from 'src/utils/type';

@Controller('users')
export class UsersController {
  constructor(private userSevice: UsersService) {}

  @Get()
  async getUsers() {
    const users = await this.userSevice.getUsers();
    return users;
  }

  @Post()
  addUser(@Body() user: updateUser) {
    this.userSevice.addUser(user);
  }

  @Put(':id')
  updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: updateUser) {
    this.userSevice.updateUser(id, user);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    this.userSevice.deleteUser(id);
    console.log(id);
  }
}
