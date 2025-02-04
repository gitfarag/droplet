import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { BaseController } from 'src/utils/base.controller';
import { CreateApiKeyDto } from './dto/create-api-key.dto';
import { RolesGuard } from 'src/guards/roles.guard';
import { AppConstants } from 'src/utils/constants';
import { ApiKeyService } from './api-key.service';
import { JwtGuard } from 'src/guards/jwt.guard';

@Controller(AppConstants.BASICURL+'api-key')
@UseGuards(JwtGuard, RolesGuard)
export class ApiKeyController extends BaseController {
  constructor(private readonly apiKeyService: ApiKeyService) {
    super()
  }

  @Post()
  create(@Body() createApiKeyDto: CreateApiKeyDto) {
    return this.apiKeyService.create(createApiKeyDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async findAll(): Promise<CreateApiKeyDto[]> {
    let res = await this.apiKeyService.getAll();
    return res.map(el => {return new CreateApiKeyDto(el.dataValues)})
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apiKeyService.remove(+id);
  }
}
