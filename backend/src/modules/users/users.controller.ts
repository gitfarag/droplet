import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AppConstants } from 'src/utils/constants';
import { JwtGuard } from 'src/guards/jwt.guard';
import { BaseController } from 'src/utils/base.controller';
import { RolesGuard } from 'src/guards/roles.guard';
import { UserDto } from './dto/users.dto';
import { Users } from 'src/utils/modelCtor';

@UseGuards(JwtGuard, RolesGuard)
@Controller(AppConstants.BASICURL + 'users')
export class UsersController extends BaseController {
  constructor(private readonly usersService: UsersService) {
    super();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    let res = await this.usersService.create(createUserDto);
    return new UserDto(res);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async findAll(): Promise<UserDto[]> {
    let res = await this.usersService.findAll();
    return res.map(el=> {return new UserDto(el.dataValues)})
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserDto> {
    let res = await this.usersService.findOne(+id);
    if (!res) throw new BadRequestException('User not found');
    return new UserDto(res);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.usersService.remove(+id);
  }
}
