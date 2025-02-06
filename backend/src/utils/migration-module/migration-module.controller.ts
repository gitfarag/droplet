import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MigrationModuleService } from './migration-module.service';
import { CreateMigrationModuleDto } from './dto/create-migration-module.dto';
import { UpdateMigrationModuleDto } from './dto/update-migration-module.dto';

@Controller('migration-module')
export class MigrationModuleController {
  constructor(private readonly migrationModuleService: MigrationModuleService) {}

  @Post()
  create() {
    return this.migrationModuleService.runMigrations();
  }

  @Get()
  findAll() {
    return this.migrationModuleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.migrationModuleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMigrationModuleDto: UpdateMigrationModuleDto) {
    return this.migrationModuleService.update(+id, updateMigrationModuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.migrationModuleService.remove(+id);
  }
}
