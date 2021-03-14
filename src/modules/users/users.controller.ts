import {Body, Controller, Get, Param, Post, SetMetadata, UseGuards} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './interfaces/user.interface';
import {AccessGuard} from "../../common/guards/roles.guard";

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
  @UseGuards(AccessGuard)
  @SetMetadata('role', ['admin'])
  public getAll(): IUser[] {
    return this.usersService.getAll();
  }
}
