import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Transform } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Permissions } from 'src/database/models/permissions.model';
import { Roles } from 'src/database/models/roles.model';
import { SysRoutes } from 'src/database/models/sysRoutes.model';

export class PermissionDto {
  id: number;

  @Transform(({value})=> value.dataValues.name)
  route: SysRoutes

  @Transform(({value})=> value.dataValues.name)
  role: Roles

  @ApiProperty()
  role_id: number;

  @ApiProperty()
  route_id: number;

  @ApiProperty()
  can_create: Boolean;

  @ApiProperty()
  can_read: Boolean;

  @ApiProperty()
  can_update: Boolean;

  @ApiProperty()
  can_delete: Boolean;
  
  @Exclude()
  createdAt: Date
  
  @Exclude()
  updatedAt: Date

  constructor(partial: Partial<Permissions>) {
    Object.assign(this, partial);
  }
}
