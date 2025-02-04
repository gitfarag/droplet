import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreatePermissionDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  role_id: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  route_id: number;

  @IsOptional()
  @IsBoolean()
  @ApiProperty()
  can_create: Boolean;

  @IsOptional()
  @IsBoolean()
  @ApiProperty()
  can_read: Boolean;

  @IsOptional()
  @IsBoolean()
  @ApiProperty()
  can_update: Boolean;

  @IsOptional()
  @IsBoolean()
  @ApiProperty()
  can_delete: Boolean;
}
