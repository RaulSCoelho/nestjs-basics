import { Module } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './repositories/users-repository';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [
    PrismaService,
    { provide: UsersRepository, useClass: UsersService },
  ],
})
export class UsersModule {}
