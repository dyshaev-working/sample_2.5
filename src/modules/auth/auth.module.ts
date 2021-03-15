import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { SigninService } from './services/signin.service';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [PassportModule],
  controllers: [AuthController],
  exports: [SigninService, AuthService],
  providers: [SigninService, AuthService, LocalStrategy],
})
export class AuthModule {}
