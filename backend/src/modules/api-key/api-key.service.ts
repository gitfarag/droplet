import { Inject, Injectable } from '@nestjs/common';
import { CreateApiKeyDto } from './dto/create-api-key.dto';
import { UpdateApiKeyDto } from './dto/update-api-key.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ApiKey } from 'src/database/models/apiKey.model';
import * as bycrypt from 'bcrypt';
import { AppConstants } from 'src/utils/constants';

@Injectable()
export class ApiKeyService {
  constructor(
    @InjectModel(ApiKey)
    private apiKeyModel: typeof ApiKey,
  ) {}
  
  async create(createApiKeyDto: CreateApiKeyDto) {
    createApiKeyDto.key = await this.genKey();
    createApiKeyDto.token = await bycrypt.hash(createApiKeyDto.key, Number(AppConstants.SALT));
    return this.apiKeyModel.create({...createApiKeyDto});
  }

  
  async validateKey(key: string) {
    try {
      let apiKey = await this.apiKeyModel.findOne({where: {key, isActive: true}});
      const isMatch = await bycrypt.compare(key, apiKey.token);
      return isMatch;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    return this.apiKeyModel.findAll();
  }

  remove(id: number) {
    return `This action removes a #${id} apiKey`;
  }

  async genKey(): Promise<string> {
    return [...Array(200)]
      .map(() => ((Math.random() * 36) | 0).toString(36))
      .join('');
  }
}
