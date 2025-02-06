import { Module } from '@nestjs/common';
import { MigrationModuleService } from './migration-module.service';
import { MigrationModuleController } from './migration-module.controller';

@Module({
  controllers: [MigrationModuleController],
  providers: [MigrationModuleService],
})
export class MigrationModuleModule {}
