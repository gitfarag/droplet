import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { SysRoutes } from 'src/database/models/sysRoutes.model';
import { PermissionsService } from '../permissions/permissions.service';
import { Permissions } from 'src/database/models/permissions.model';
import { UsersService } from '../users/users.service';
import { Users } from 'src/utils/modelCtor';

@Module({
  imports: [SequelizeModule.forFeature([SysRoutes, Permissions, Users])],
  controllers: [RoutesController],
  providers: [RoutesService, PermissionsService, UsersService],
  exports: [UsersService]
})
export class RoutesModule {}
