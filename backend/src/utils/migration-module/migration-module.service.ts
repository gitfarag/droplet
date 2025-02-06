import { Injectable } from '@nestjs/common';
import { CreateMigrationModuleDto } from './dto/create-migration-module.dto';
import { UpdateMigrationModuleDto } from './dto/update-migration-module.dto';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec); // Use exec to run shell commands

@Injectable()
export class MigrationModuleService {
  async runMigrations(): Promise<string> {
    try {
      // Run migrations using Sequelize CLI
      const { stdout, stderr } = await execPromise('npx sequelize-cli db:migrate');
      
      // Handle success and errors
      if (stderr) {
        return `Error running migrations: ${stderr}`;
      }
      return `Migrations completed successfully: ${stdout}`;
    } catch (error) {
      return `Error running migrations: ${error.message}`;
    }
  }

  findAll() {
    return `This action returns all migrationModule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} migrationModule`;
  }

  update(id: number, updateMigrationModuleDto: UpdateMigrationModuleDto) {
    return `This action updates a #${id} migrationModule`;
  }

  remove(id: number) {
    return `This action removes a #${id} migrationModule`;
  }
}
