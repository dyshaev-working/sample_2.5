import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  public create(@Body() createUserDto: CreateUserDto): IUser {
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  public findOneById(@Param('id') id: number): IUser {
    return this.usersService.findOneById(id);
  }

  @Get()
  public getAll(): IUser[] {
    return this.usersService.getAll();
  }
}
