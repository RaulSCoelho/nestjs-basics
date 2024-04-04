import { PrismaService } from 'src/prisma/prisma.service';
import { UsersRepository } from './repositories/users-repository';
import { User } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService implements UsersRepository {
  constructor(private prisma: PrismaService) {}

  async get(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async create(name: string, email: string): Promise<User> {
    return await this.prisma.user.create({
      data: { name, email },
    });
  }
}
