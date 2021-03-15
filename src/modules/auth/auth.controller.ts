import { Body, Controller, Post, Request, UseGuards, UsePipes } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { SigninRequestDto } from './dto/request/signin.dto';
import { signinSchema } from './joi/signin.schema';
import { SigninService } from './services/signin.service';
import { JoiValidationPipe } from '../../common/pipes/joi-validation.pipe';

@Controller('auth')
export class AuthController {
  constructor(private readonly signinService: SigninService) {}

  @Post('signin')
  @UsePipes(new JoiValidationPipe(signinSchema))
  public signin(@Body() body: SigninRequestDto) {
    return this.signinService.singin(body);
  }

  @Post('passport/signin')
  @UsePipes(new JoiValidationPipe(signinSchema))
  public passportSignin(@Request() req) {
    return req.user;
  }
}
