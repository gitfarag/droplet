import { Module } from '@nestjs/common';
import { AgenciesService } from './agencies.service';
import { AgenciesController } from './agencies.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Permissions } from 'src/database/models/permissions.model';
import { Users } from 'src/utils/modelCtor';
import { Agency } from 'src/database/models/agency.model';
import { UsersService } from '../users/users.service';
import { PermissionsService } from '../permissions/permissions.service';
import { Addresses } from 'src/database/models/adresses.model';
import { TranslatedNames } from 'src/database/models/translatedNames';
import { AddressesService } from '../addresses/addresses.service';
import { TranslatedNamesService } from '../translated-names/translated-names.service';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Agency,
      Permissions,
      Users,
      Addresses,
      TranslatedNames,
    ]),
  ],
  controllers: [AgenciesController],
  providers: [
    AgenciesService,
    PermissionsService,
    UsersService,
    AddressesService,
    TranslatedNamesService,
  ],
})
export class AgenciesModule {}
