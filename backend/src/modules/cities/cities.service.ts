import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Cities } from 'src/database/models/cities.model';
import { TranslatedNames } from 'src/database/models/translatedNames';

@Injectable()
export class CitiesService {
  constructor(
    @InjectModel(Cities)
    private readonly cityModel: typeof Cities,
  ){}
  async create(createCityDto: CreateCityDto) {
    return await this.cityModel.create({...createCityDto})
  }

  async findAll(){
    return await this.cityModel.findAll({
      include: [{
        model: TranslatedNames
      }]
    });
  }

  async findOne(id: number):Promise<CreateCityDto> {
    let res = await this.cityModel.findByPk(+id, {
      include: [{
        model: TranslatedNames
      }]
    });
    if (!res) throw new NotFoundException()
    return res.dataValues
  }

  update(id: number, updateCityDto: UpdateCityDto) {
    return `This action updates a #${id} city`;
  }

  remove(id: number) {
    return this.cityModel.destroy({
      where: {id: +id}
    })
  }
}
