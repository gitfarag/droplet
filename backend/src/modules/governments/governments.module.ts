import { Module } from '@nestjs/common';
import { GovernmentsService } from './governments.service';
import { GovernmentsController } from './governments.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Permissions } from 'src/database/models/permissions.model';
import { PermissionsService } from '../permissions/permissions.service';
import { Users } from 'src/utils/modelCtor';
import { UsersService } from '../users/users.service';
import { Governments } from 'src/database/models/governments';

@Module({
  imports: [SequelizeModule.forFeature([Governments,Permissions, Users])],
  controllers: [GovernmentsController],
  providers: [GovernmentsService, PermissionsService, UsersService],
})
export class GovernmentsModule {}
