import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from '../../database/models/users.model';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';
import { AppConstants } from 'src/utils/constants';
import { Roles } from 'src/database/models/roles.model';
import { Agency } from 'src/database/models/agency.model';
import { TranslatedNames } from 'src/database/models/translatedNames';
import { Permissions } from 'src/database/models/permissions.model';
import { SysRoutes } from 'src/database/models/sysRoutes.model';
import { Op } from 'sequelize';
import { UserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users)
    private usersModel: typeof Users,
  ) {}
  async create(createUserDto: CreateUserDto) {
    let isExisted = await this.usersModel.findOne({
      where: {
        [Op.or]: [
          { username: createUserDto.userName },
          { email: createUserDto.email },
        ],
      },
    });
    if (isExisted)
      throw new HttpException(
        'Username or Email is existed',
        HttpStatus.BAD_REQUEST,
      );
    let hashedPassword = await bcrypt.hash(
      createUserDto.password,
      Number(AppConstants.SALT),
    );
    let newUser = await this.usersModel.create({
      ...createUserDto,
      password: hashedPassword,
    });
    return newUser.dataValues;
  }

  async findAll() {
    let users = await this.usersModel.findAll({ include: [{ model: Roles }] });
    return users;
  }

  async findOne(id: number) {
    // let permissions = await
    let res = await this.usersModel.findOne({
      where: { id },
      include: [
        {
          model: Roles,
          include: [{
            model: Permissions
          }]
        },
      ],
    });
    return res.dataValues;
  }
  async findByUserName(userName: string) {
    return await this.usersModel.findOne({ where: { userName } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.usersModel.update(updateUserDto, { where: { id } });
  }

  async remove(id: number) {
    let user = await this.usersModel.findOne({ where: { id } });
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return await this.usersModel.destroy({ where: { id } });
  }

  async findByUsername(userName: string) {
    return await this.usersModel.findOne({
      where: { userName },
      include: [
        {
          model: Roles,
          include: [{
            model: Permissions,
            include: [{
              model: SysRoutes
            }]
          }]
        },
      ],
    });
  }
}
