import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { InjectModel } from '@nestjs/sequelize';
import { SysRoutes } from 'src/database/models/sysRoutes.model';

@Injectable()
export class RoutesService {
  constructor(
    @InjectModel(SysRoutes)
    private sysRoutes: typeof SysRoutes,
  ) {}
  async create(createRouteDto: CreateRouteDto): Promise<SysRoutes> {
    return await this.sysRoutes.create({...createRouteDto});
  }

  async findAll(): Promise<SysRoutes[]> {
    return await this.sysRoutes.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} route`;
  }

  update(id: number, updateRouteDto: UpdateRouteDto) {
    return `This action updates a #${id} route`;
  }

  remove(id: number) {
    return this.sysRoutes.destroy({
      where: { id: id },
    })
  }
}
