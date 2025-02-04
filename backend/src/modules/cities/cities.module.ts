import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cities } from 'src/database/models/cities.model';
import { Permissions } from 'src/database/models/permissions.model';
import { Users } from 'src/utils/modelCtor';
import { PermissionsService } from '../permissions/permissions.service';
import { UsersService } from '../users/users.service';
import { TranslatedNames } from 'src/database/models/translatedNames';
import { TranslatedNamesService } from '../translated-names/translated-names.service';

@Module({
  imports: [SequelizeModule.forFeature([Cities, Permissions, Users, TranslatedNames])],
  controllers: [CitiesController],
  providers: [
    CitiesService, 
    PermissionsService, 
    UsersService, 
    TranslatedNamesService],
})
export class CitiesModule {}
