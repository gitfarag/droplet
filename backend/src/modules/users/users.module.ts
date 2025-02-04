import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from '../../database/models/users.model';
import { Roles } from 'src/database/models/roles.model';
import { Permissions } from 'src/database/models/permissions.model';
import { PermissionsService } from '../permissions/permissions.service';
@Module({
  imports: [SequelizeModule.forFeature([Users, Roles, Permissions])],
  controllers: [UsersController],
  providers: [UsersService, PermissionsService],
  exports: [UsersService]
})
export class UsersModule {}
