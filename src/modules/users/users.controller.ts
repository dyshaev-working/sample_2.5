import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  SetMetadata,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './interfaces/user.interface';
import { AccessGuard } from '../../common/guards/roles.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UsePipes()
  public create(@Body() createUserDto: CreateUserDto): IUser {
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  @UseGuards(AuthGuard('local'))
  public findOneById(@Param('id') id: number): IUser {
    return this.usersService.findOneById(id);
  }

  @Get()
  @UseGuards(AccessGuard)
  @SetMetadata('role', ['admin'])
  public getAll(): IUser[] {
    return this.usersService.getAll();
  }
}
