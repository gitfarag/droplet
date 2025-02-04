import { Module } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { AddressesController } from './addresses.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Permissions } from 'src/database/models/permissions.model';
import { Users } from 'src/utils/modelCtor';
import { Addresses } from 'src/database/models/adresses.model';
import { PermissionsService } from '../permissions/permissions.service';
import { UsersService } from '../users/users.service';
import { Cities } from 'src/database/models/cities.model';
import { Governments } from 'src/database/models/governments';

@Module({
  imports: [SequelizeModule.forFeature([Permissions, Users, Addresses, Cities, Governments])],
  controllers: [AddressesController],
  providers: [AddressesService, PermissionsService, UsersService],
})
export class AddressesModule {}
