import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { AppConstants } from 'src/utils/constants';
import { BaseController } from 'src/utils/base.controller';
import { JwtGuard } from 'src/guards/jwt.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { RoleDto } from './dto/role.dto';

@Controller(AppConstants.BASICURL+'roles')
@UseGuards(JwtGuard, RolesGuard)
export class RolesController extends BaseController {
  constructor(private readonly rolesService: RolesService) {
    super();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  async create(@Body() createRoleDto: CreateRoleDto): Promise<RoleDto> {
    let res = await this.rolesService.create(createRoleDto);
    return new RoleDto(res);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async findAll(): Promise<RoleDto[]> {
    let res = await this.rolesService.findAll();
    return res.map(el=> (new RoleDto(el.dataValues)))
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.rolesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
