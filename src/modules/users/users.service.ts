import { Injectable } from '@nestjs/common';
import { IUser } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private idSequence = 0;
  private readonly users: IUser[] = [];

  public create(user: CreateUserDto): IUser {
    const newUser = {
      ...user,
      id: (this.idSequence += 1),
    };

    this.users.push(newUser);

    return newUser;
  }

  public findOneById(id: number): IUser {
    return this.users.find((item) => item.id === id);
  }

  public getAll(): IUser[] {
    return this.users;
  }
}
