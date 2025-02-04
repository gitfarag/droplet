import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGovernmentDto } from './dto/create-government.dto';
import { UpdateGovernmentDto } from './dto/update-government.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Governments } from 'src/database/models/governments';
import { TranslatedNames } from 'src/database/models/translatedNames';

@Injectable()
export class GovernmentsService {
  constructor(
    @InjectModel(Governments)
    private readonly governmentsModel: typeof Governments,
  ){}
  create(createGovernmentDto: CreateGovernmentDto) {
    return 'This action adds a new government';
  }

  async findAll() {
    return await this.governmentsModel.findAll({
      include: [
        {
          model: TranslatedNames
        }
      ]
    });
  }

  async findOne(id: number) {
    let res = await this.governmentsModel.findOne({
      where: { id },
      include: [{
        model: TranslatedNames
      }]
    })
    if (!res) throw new NotFoundException()
    return res
  }

  update(id: number, updateGovernmentDto: UpdateGovernmentDto) {
    return `This action updates a #${id} government`;
  }

  remove(id: number) {
    return `This action removes a #${id} government`;
  }
}
