import { Body, Controller, Get, Param, Post, UseInterceptors, UsePipes } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './interfaces/user.interface';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { ParseIntPipe } from '../../common/pipes/parse-int.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseInterceptors(LoggingInterceptor)
  async create(@Body() createUserDto: CreateUserDto): Promise<IUser> {
    return this.usersService.create(createUserDto);
  }

  @Get(':age')
  @UsePipes(ParseIntPipe)
  async findOne(@Param('age') age: number): Promise<IUser> {
    return this.usersService.findOne(age);
  }
}
