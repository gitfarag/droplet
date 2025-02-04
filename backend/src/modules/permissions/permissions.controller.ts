import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { AppConstants } from 'src/utils/constants';
import { BaseController } from 'src/utils/base.controller';
import { JwtGuard } from 'src/guards/jwt.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { PermissionDto } from './dto/permission.dto';

@Controller(AppConstants.BASICURL+'permissions')
@UseGuards(JwtGuard, RolesGuard)
export class PermissionsController extends BaseController {
  constructor(private readonly permissionsService: PermissionsService) {
    super()
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  async create(@Body() createPermissionDto: CreatePermissionDto): Promise<PermissionDto> {
    let res = await this.permissionsService.create(createPermissionDto);
    return new PermissionDto(res);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async findAll(): Promise<PermissionDto[]> {
    let res = await this.permissionsService.findAll();
    return res.map(el => new PermissionDto(el.dataValues));
  }
  
  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: string): Promise<CreatePermissionDto> {
    let res = await this.permissionsService.findOne(+id);
    return res
  }

  @Get('perms/:id')
  findByRole(@Param('id', ParseIntPipe) id: number) {
    return this.permissionsService.findByRole(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updatePermissionDto: UpdatePermissionDto) {
    return this.permissionsService.update(+id, updatePermissionDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.permissionsService.remove(+id);
  }
}
