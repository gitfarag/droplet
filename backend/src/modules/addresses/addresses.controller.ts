import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { BaseController } from 'src/utils/base.controller';
import { AppConstants } from 'src/utils/constants';
import { JwtGuard } from 'src/guards/jwt.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { AddressDto } from './dto/address.dto';

@UseGuards(JwtGuard, RolesGuard)
@Controller(AppConstants.BASICURL+'addresses')
export class AddressesController extends BaseController{
  constructor(private readonly addressesService: AddressesService) {
    super()
  }

  @Post()
  create(@Body() createAddressDto: CreateAddressDto) {
    return this.addressesService.create(createAddressDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async findAll(): Promise<AddressDto[]> {
    let res = await this.addressesService.findAll();
    return res.map(el => (new AddressDto(el)));
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: string): Promise<AddressDto> {
    let res = await this.addressesService.findOne(+id);
    return new AddressDto(res);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto) {
    return this.addressesService.update(+id, updateAddressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressesService.remove(+id);
  }
}
