import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { Permissions } from 'src/database/models/permissions.model';
import { Users } from 'src/utils/modelCtor';
import { SequelizeModule } from '@nestjs/sequelize';
import { PermissionsService } from '../permissions/permissions.service';
import { UsersService } from '../users/users.service';

@Module({
  imports: [SequelizeModule.forFeature([Permissions, Users])],
  controllers: [UploadController],
  providers: [UploadService, PermissionsService, UsersService],
})
export class UploadModule {}
