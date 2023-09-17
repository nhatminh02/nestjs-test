import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { AddUserDto } from 'src/users/dtos/AddUser.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getUsers() {
    return this.userRepository.find();
  }

  addUser(userData: AddUserDto) {
    const newUser = this.userRepository.create({ ...userData });
    return this.userRepository.save(newUser);
  }

  updateUser(id: number, userUpdatedData: AddUserDto) {
    this.userRepository.update({ id }, { ...userUpdatedData });
  }

  deleteUser(id: number) {
    this.userRepository.delete({ id });
  }
}
