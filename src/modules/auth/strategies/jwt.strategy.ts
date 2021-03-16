import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import * as config from 'config';

const JWT_SECRET: string = config.get('jwt.jwt_secret');

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET,
    });
  }

  public async validate(payload: any) {
    const user = await this.authService.validateUser(payload.name, payload.password);

    if (!user) { throw new UnauthorizedException(); }

    return user;
  }}
