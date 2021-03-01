import { Injectable } from '@nestjs/common';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users: IUser[] = [];

  public create(user: IUser) {
    this.users.push(user);
  }

 public findAll(): IUser[] {
    return this.users;
  }
}
