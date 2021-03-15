import { Injectable } from '@nestjs/common';
import * as config from 'config';
import * as jwt from 'jsonwebtoken';

import { SigninRequestDto } from '../dto/request/signin.dto';

const JWT_SECRET: string = config.get('jwt.jwt_secret');

@Injectable()
export class SigninService {
  public singin({ email, password }: SigninRequestDto) {
    const user = { id: 1, email, password };

    return {
      id: user.id,
      token: jwt.sign({ id: user.id, roles: ['admin'] }, JWT_SECRET),
    };
  }

  public getUserByName(name: string) {
    const user = { id: 1, roles: ['admin'], password: 'password' }; // get user by name

    return {
      id: 1,
      password: user.password,
      token: jwt.sign({ id: user.id, roles: user.roles }, JWT_SECRET),
    };
  }
}
