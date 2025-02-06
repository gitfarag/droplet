import { PartialType } from '@nestjs/swagger';
import { CreateMigrationModuleDto } from './create-migration-module.dto';

export class UpdateMigrationModuleDto extends PartialType(CreateMigrationModuleDto) {}
