import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Addresses } from 'src/database/models/adresses.model';
import { Governments } from 'src/database/models/governments';
import { Cities } from 'src/database/models/cities.model';
import { TranslatedNames } from 'src/database/models/translatedNames';

@Injectable()
export class AddressesService {
  constructor(
    @InjectModel(Addresses)
    private readonly addressesModel: typeof Addresses,
  ) {}
  async create(createAddressDto: CreateAddressDto): Promise<CreateAddressDto> {
    let res = await this.addressesModel.create({ ...createAddressDto });
    return res.dataValues;
  }

  async findAll(): Promise<CreateAddressDto[]> {
    let res = await this.addressesModel.findAll({
      include: [
        { model: Governments, include: [{ model: TranslatedNames }] },
        { model: Cities, include: [{ model: TranslatedNames }] },
      ],
    });
    return res.map((el) => el.dataValues);
  }

  async findOne(id: number): Promise<CreateAddressDto> {
    let res = await this.addressesModel.findByPk(+id, {
      include: [
        { model: Governments, include: [{ model: TranslatedNames }] },
        { model: Cities, include: [{ model: TranslatedNames }] },
      ],
    });
    if (!res) throw new NotFoundException();
    return res.dataValues;
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    return `This action updates a #${id} address`;
  }

  remove(id: number) {
    return this.addressesModel.destroy({
      where: { id: +id },
    })
  }
}
