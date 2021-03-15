import { Injectable } from '@nestjs/common';
import { SigninService } from './services/signin.service';

@Injectable()
export class AuthService {
  constructor(private signinService: SigninService) {}

  public async validateUser(name: string, password: string) {
    const user = await this.signinService.getUserByName(name);

    if (user && user.password === password) {
      const { password: userPassword, ...result } = user;

      return result;
    }

    return null;
  }
}
