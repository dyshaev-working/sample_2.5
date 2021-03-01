import { Injectable } from '@nestjs/common';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users: IUser[] = [];

  public create(user: IUser): IUser {
    this.users.push(user);

    return user;
  }

 public findOne(age: number): IUser {
    return this.users.find((item) => item.age === age);
  }
}
