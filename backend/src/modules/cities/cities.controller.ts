import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, ClassSerializerInterceptor, ParseIntPipe } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { AppConstants } from 'src/utils/constants';
import { JwtGuard } from 'src/guards/jwt.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { BaseController } from 'src/utils/base.controller';
import { TranslatedNamesService } from '../translated-names/translated-names.service';

@UseGuards(JwtGuard, RolesGuard)
@Controller(AppConstants.BASICURL+'cities')
export class CitiesController extends BaseController {
  constructor(
    private readonly citiesService: CitiesService,
    private readonly translatedNames: TranslatedNamesService,
  ) {
    super()
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  async create(@Body() createCityDto: CreateCityDto): Promise<CreateCityDto> {
    let tr = await this.translatedNames.create(createCityDto.name)
    let city = await this.citiesService.create({nameId: tr.dataValues.id, ...createCityDto})
    let insertedCity = await this.citiesService.findOne(city.id)
    return new CreateCityDto(insertedCity)
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async findAll(): Promise<CreateCityDto[]> {
    let res = await this.citiesService.findAll();
    return res.map((el) => new CreateCityDto(el.dataValues));
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: string): Promise<CreateCityDto> {
    let res = await this.citiesService.findOne(+id);
    return new CreateCityDto(res);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto) {
    return this.citiesService.update(+id, updateCityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.citiesService.remove(+id);
  }
}
