import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken';
import * as config from 'config';

const JWT_SECRET: string = config.get('jwt.jwt_secret');

@Injectable()
export class AccessGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  public canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const currentRouteRole = this.reflector.get<string>('role', context.getHandler());
      const request = context.switchToHttp().getRequest();
      const authorization = request.headers.authorization;
      const token = authorization && authorization.replace(/Bearer /, '');
      const payload: any = jwt.verify(token, JWT_SECRET);

      if (currentRouteRole && !payload.roles.includes(...currentRouteRole)) {
        throw new ForbiddenException();
      }

      request.user = payload;
      return true;
    } catch (e) {
      throw new HttpException('Authorization error', HttpStatus.FORBIDDEN);
    }
  }
}
