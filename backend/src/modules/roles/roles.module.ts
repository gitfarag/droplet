import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { Roles } from 'src/database/models/roles.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Permissions } from 'src/database/models/permissions.model';
import { Users } from 'src/utils/modelCtor';
import { PermissionsService } from '../permissions/permissions.service';
import { UsersService } from '../users/users.service';

@Module({
  imports: [SequelizeModule.forFeature([Roles, Permissions, Users])],
  controllers: [RolesController],
  providers: [RolesService, PermissionsService, UsersService],
})
export class RolesModule {}
