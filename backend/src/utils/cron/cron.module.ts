import { Module } from '@nestjs/common';
import { CronService } from './cron.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from '../modelCtor';
import { UsersService } from 'src/modules/users/users.service';

@Module({
  imports:[SequelizeModule.forFeature([Users])],
  providers: [CronService, UsersService],
})
export class CronModule {}
