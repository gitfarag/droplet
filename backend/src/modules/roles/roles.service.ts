import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Roles } from 'src/database/models/roles.model';
import { Permissions } from 'src/database/models/permissions.model';
import { SysRoutes } from 'src/database/models/sysRoutes.model';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Roles)
    private rolesModel: typeof Roles,
  ) {}
  async create(createRoleDto: CreateRoleDto) {
    let res = await this.rolesModel.create({ ...createRoleDto });
    return res.dataValues;
  }

  async findAll() {
    return await this.rolesModel.findAll({
      include: [{ model: Permissions, include: [{ model: SysRoutes }] }],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return this.rolesModel.destroy({
      where: { id },
    });
  }
}
