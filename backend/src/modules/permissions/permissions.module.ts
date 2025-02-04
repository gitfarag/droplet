import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PermissionsController } from './permissions.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Permissions } from 'src/database/models/permissions.model';
import { Roles } from 'src/database/models/roles.model';
import { SysRoutes } from 'src/database/models/sysRoutes.model';
import { UsersService } from '../users/users.service';
import {Users} from 'src/database/models/users.model'
import { TranslatedNames } from 'src/database/models/translatedNames';

@Module({
  imports: [SequelizeModule.forFeature([Permissions, Roles, SysRoutes, Users])],
  controllers: [PermissionsController],
  providers: [PermissionsService, UsersService],
  exports: [PermissionsService]
})
export class PermissionsModule {}
