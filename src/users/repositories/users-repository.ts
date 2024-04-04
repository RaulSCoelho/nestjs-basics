import { User } from '@prisma/client';

export abstract class UsersRepository {
  abstract get(): Promise<User[]>;
  abstract create(name: string, email: string): Promise<User>;
}
