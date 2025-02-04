import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Permissions } from 'src/database/models/permissions.model';
import { Roles } from 'src/database/models/roles.model';
import { SysRoutes } from 'src/database/models/sysRoutes.model';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectModel(Permissions)
    private permissionsService: typeof Permissions
  ){}
  async create(createPermissionDto: CreatePermissionDto) {
    let ifExisted = await this.permissionsService.findOne({
      where: {
        route_id: createPermissionDto.route_id,
        role_id: createPermissionDto.role_id
        },
      }
    )
    if(ifExisted) throw new BadRequestException('this permission is already existed')
    let newPermission = await this.permissionsService.create({...createPermissionDto})
    return newPermission.dataValues
  }

  async findAll() {
    return await this.permissionsService.findAll({
      include: [
        {
          model: Roles
        },
        {
          model: SysRoutes
        }
      ]
    });
  }

  async findByRole(role_id: number) {
    let perms = await this.permissionsService.findAll({
      where: {
        role_id
      },
      include: [
        {
          model: Roles
        },
        {
          model: SysRoutes
        }
      ]
    })
    return perms
  }

  async findOne(id: number) {
    return await this.permissionsService.findByPk(id,{
      include: [{
        model: Roles
      },
    {
      model: SysRoutes
    }]
    })
  }

  async update(id: number, updatePermissionDto: UpdatePermissionDto) {
    await this.permissionsService.update({...updatePermissionDto},{where:{id}})
    return await this.findOne(id)
  }

  remove(id: number) {
    return this.permissionsService.destroy({
      where:{
        id
      }
    })
  }
}
