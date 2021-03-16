import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { SigninService } from './services/signin.service';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import * as config from 'config';
import { JwtStrategy } from './strategies/jwt.strategy';

const JWT_SECRET: string = config.get('jwt.jwt_secret');

@Module({
  imports: [PassportModule,
    JwtModule.register({
    secret: JWT_SECRET,
  }),
  ],
  controllers: [AuthController],
  exports: [SigninService, AuthService],
  providers: [SigninService, AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
