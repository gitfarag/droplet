import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { TranslatedNamesService } from './translated-names.service';
import { CreateTranslatedNameDto } from './dto/create-translated-name.dto';
import { UpdateTranslatedNameDto } from './dto/update-translated-name.dto';
import { AppConstants } from 'src/utils/constants';
import { JwtGuard } from 'src/guards/jwt.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { BaseController } from 'src/utils/base.controller';

@UseGuards(JwtGuard, RolesGuard)
@Controller(AppConstants.BASICURL+'translated-names')
export class TranslatedNamesController extends BaseController {
  constructor(private readonly translatedNamesService: TranslatedNamesService) {
    super()
  }

  @Post()
  create(@Body() createTranslatedNameDto: CreateTranslatedNameDto) {
    return this.translatedNamesService.create(createTranslatedNameDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async findAll(): Promise<CreateTranslatedNameDto[]> {
    let res = await this.translatedNamesService.findAll()
    return res.map(el => { return new CreateTranslatedNameDto(el.dataValues)})
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.translatedNamesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTranslatedNameDto: UpdateTranslatedNameDto) {
    return this.translatedNamesService.update(+id, updateTranslatedNameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.translatedNamesService.remove(+id);
  }
}
