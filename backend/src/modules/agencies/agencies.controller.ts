import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { AgenciesService } from './agencies.service';
import { CreateAgencyDto } from './dto/create-agency.dto';
import { UpdateAgencyDto } from './dto/update-agency.dto';
import { AppConstants } from 'src/utils/constants';
import { BaseController } from 'src/utils/base.controller';
import { JwtGuard } from 'src/guards/jwt.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { TranslatedNamesService } from '../translated-names/translated-names.service';
import { AddressesService } from '../addresses/addresses.service';
import { AgencyDto } from './dto/agency.dto';

@UseGuards(JwtGuard, RolesGuard)
@Controller(AppConstants.BASICURL+'agencies')
export class AgenciesController extends BaseController {
  constructor(
    private readonly agenciesService: AgenciesService,
    private readonly translatedNaesService: TranslatedNamesService,
    private readonly adressesService: AddressesService
  ) {
    super()
  }

  @Post()
  async create(@Body() createAgencyDto: CreateAgencyDto) {
    let namTr = await this.translatedNaesService.create(createAgencyDto.name)
    let address = await this.adressesService.create(createAgencyDto.address)    
    let addedAgency = await this.agenciesService.create({nameId: namTr.dataValues.id, addressId: address.id,...createAgencyDto});
    return addedAgency
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async findAll():Promise <AgencyDto[]> {
    let res = await this.agenciesService.findAll()
    return res.map(el=> (new AgencyDto(el.dataValues)))
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agenciesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgencyDto: UpdateAgencyDto) {
    return this.agenciesService.update(+id, updateAgencyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agenciesService.remove(+id);
  }
}
