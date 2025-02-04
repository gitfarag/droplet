import { Injectable } from '@nestjs/common';
import { CreateAgencyDto } from './dto/create-agency.dto';
import { UpdateAgencyDto } from './dto/update-agency.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Agency } from 'src/database/models/agency.model';
import { Addresses } from 'src/database/models/adresses.model';
import { TranslatedNames } from 'src/database/models/translatedNames';
import { Cities } from 'src/database/models/cities.model';
import { Governments } from 'src/database/models/governments';

@Injectable()
export class AgenciesService {
  constructor(
    @InjectModel(Agency)
    private readonly agencyModel: typeof Agency,
  ) {}
  async create(createAgencyDto: CreateAgencyDto) {
    let res = await this.agencyModel.create({social:JSON.stringify(createAgencyDto.social),...createAgencyDto});
    return res.dataValues
  }

  async findAll() {
    let res = await this.agencyModel.findAll({
      include: [
        {
          model: Addresses,
          include: [
            {
              model: Cities,
              include: [{model: TranslatedNames}]
            },
            {
              model: Governments,
              include: [{model: TranslatedNames}]
            }
          ]
        },
        {
          model: TranslatedNames,
        }
      ]
    })
    return res
  }

  findOne(id: number) {
    return this.agencyModel.findByPk(+id);
  }

  update(id: number, updateAgencyDto: UpdateAgencyDto) {
    return `This action updates a #${id} agency`;
  }

  remove(id: number) {
    return this.agencyModel.destroy({
      where: {
        id: +id,
      }
    })
  }
}
