import { Body, Controller, Post, Request, UseGuards, UsePipes } from '@nestjs/common';

import { SigninRequestDto } from './dto/request/signin.dto';
import { signinSchema } from './joi/signin.schema';
import { SigninService } from './services/signin.service';
import { JoiValidationPipe } from '../../common/pipes/joi-validation.pipe';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { LocalAuthGuard } from '../../common/guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly signinService: SigninService) {}

  @Post('signin')
  @UsePipes(new JoiValidationPipe(signinSchema))
  public signin(@Body() body: SigninRequestDto) {
    return this.signinService.singin(body);
  }

  @Post('passport/signin')
  // @UseGuards(JwtAuthGuard)
  @UseGuards(LocalAuthGuard)
  // @UsePipes(new JoiValidationPipe(signinSchema))
  public passportSignin(@Request() req, @Body() body) {
    return req.user;
  }
}
