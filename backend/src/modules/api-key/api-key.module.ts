import { Module } from '@nestjs/common';
import { ApiKeyService } from './api-key.service';
import { ApiKeyController } from './api-key.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ApiKey } from 'src/database/models/apiKey.model';
import { Permissions } from 'src/database/models/permissions.model';
import { Users } from 'src/utils/modelCtor';
import { PermissionsService } from '../permissions/permissions.service';
import { UsersService } from '../users/users.service';

@Module({
  imports: [SequelizeModule.forFeature([ApiKey, Permissions, Users])],
  controllers: [ApiKeyController],
  providers: [ApiKeyService, PermissionsService, UsersService],
})
export class ApiKeyModule {}
