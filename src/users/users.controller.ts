import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserBody } from './dtos/create-user-body';
import { UsersRepository } from './repositories/users-repository';

@Controller()
export class UsersController {
  constructor(private usersRepository: UsersRepository) {}

  @Get()
  async get() {
    return await this.usersRepository.get();
  }

  @Post()
  async create(@Body() data: CreateUserBody) {
    return await this.usersRepository.create(data.name, data.email);
  }
}
