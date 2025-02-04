import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
  ParseIntPipe,
} from '@nestjs/common';
import { GovernmentsService } from './governments.service';
import { CreateGovernmentDto } from './dto/create-government.dto';
import { UpdateGovernmentDto } from './dto/update-government.dto';
import { AppConstants } from 'src/utils/constants';
import { BaseController } from 'src/utils/base.controller';
import { JwtGuard } from 'src/guards/jwt.guard';
import { RolesGuard } from 'src/guards/roles.guard';

@UseGuards(JwtGuard, RolesGuard)
@Controller(AppConstants.BASICURL + 'governments')
export class GovernmentsController extends BaseController {
  constructor(private readonly governmentsService: GovernmentsService) {
    super();
  }

  @Post()
  async create(@Body() createGovernmentDto: CreateGovernmentDto) {
    return this.governmentsService.create(createGovernmentDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async findAll(): Promise<CreateGovernmentDto[]> {
    const res = await this.governmentsService.findAll();
    return res.map((el) => new CreateGovernmentDto(el.dataValues));
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: string): Promise<CreateGovernmentDto> {
    const res = await this.governmentsService.findOne(+id);
    return new CreateGovernmentDto(res.dataValues);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateGovernmentDto: UpdateGovernmentDto,
  ) {
    return this.governmentsService.update(+id, updateGovernmentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.governmentsService.remove(+id);
  }
}