import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Transform } from 'class-transformer';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Permissions } from 'src/database/models/permissions.model';
import { Roles } from 'src/database/models/roles.model';
import { SysRoutes } from 'src/database/models/sysRoutes.model';

export class RoleDto {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @Transform(({value})=> (value.map(el => (new PermissionsInRole(el.dataValues)))))
  permissions: Permissions[];

  @IsDateString()
  @IsOptional()
  @Exclude()
  createdAt: Date;

  @Exclude()
  @IsOptional()
  @IsDateString()
  updatedAt: Date;

  constructor(partial: Partial<Roles>) {
    Object.assign(this, partial);
  }
}

class PermissionsInRole {
  id: number;

  @Exclude()
  role_id: number;

  @Exclude()
  route_id: number;

  @Transform(({value})=>{ return (new RouteInPermission(value.dataValues))?.route})
  route: SysRoutes;

  can_create: number;
  can_read: number;
  can_update: boolean;
  can_delete: boolean;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;
  constructor (partial: Partial<Permissions>){
    Object.assign(this, partial);
  }
}

class RouteInPermission { 
    @Exclude()
    id: number;
    @Exclude()
    name: string;
    route: string;
    @Exclude()
    createdAt: Date;
    @Exclude()
    updatedAt: Date;
    constructor (partial: Partial<SysRoutes>){
        Object.assign(this, partial);
    }

}
