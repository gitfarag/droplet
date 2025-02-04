import { Injectable } from '@nestjs/common';
import { CreateTranslatedNameDto } from './dto/create-translated-name.dto';
import { UpdateTranslatedNameDto } from './dto/update-translated-name.dto';
import { InjectModel } from '@nestjs/sequelize';
import { TranslatedNames } from 'src/database/models/translatedNames';

@Injectable()
export class TranslatedNamesService {
  constructor(
    @InjectModel(TranslatedNames)
    private readonly translatedNamesModel: typeof TranslatedNames,
  ){}
  async create(createTranslatedNameDto: CreateTranslatedNameDto) {
    return await this.translatedNamesModel.create({...createTranslatedNameDto});
  }

  async findAll(): Promise<TranslatedNames[]> {
    return await this.translatedNamesModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} translatedName`;
  }

  update(id: number, updateTranslatedNameDto: UpdateTranslatedNameDto) {
    return `This action updates a #${id} translatedName`;
  }

  remove(id: number) {
    return `This action removes a #${id} translatedName`;
  }
}
