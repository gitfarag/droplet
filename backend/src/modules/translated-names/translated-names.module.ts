import { Module } from '@nestjs/common';
import { TranslatedNamesService } from './translated-names.service';
import { TranslatedNamesController } from './translated-names.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Permissions } from 'src/database/models/permissions.model';
import { Users } from 'src/utils/modelCtor';
import { PermissionsService } from '../permissions/permissions.service';
import { UsersService } from '../users/users.service';
import { TranslatedNames } from 'src/database/models/translatedNames';

@Module({
  imports:[SequelizeModule.forFeature([TranslatedNames,Permissions, Users])],
  controllers: [TranslatedNamesController],
  providers: [TranslatedNamesService, PermissionsService, UsersService],
  exports: [TranslatedNamesService]
})
export class TranslatedNamesModule {}
