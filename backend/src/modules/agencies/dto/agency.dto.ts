import { Exclude, Transform, Type } from 'class-transformer';
import { IsInstance, IsString, ValidateNested } from 'class-validator';
import { AgencyTypes } from 'src/database/ENUMS/agencyTypes.enum';
import { AgencyStatus } from 'src/database/ENUMS/status.enum';
import { Addresses } from 'src/database/models/adresses.model';
import { Agency } from 'src/database/models/agency.model';
import { TranslatedNames } from 'src/database/models/translatedNames';
import { AddressDto } from 'src/modules/addresses/dto/address.dto';
import { CreateAddressDto } from 'src/modules/addresses/dto/create-address.dto';
import { CreateTranslatedNameDto } from 'src/modules/translated-names/dto/create-translated-name.dto';

export class AgencyDto {
  @Exclude()
  nameId: number;

  @Exclude()
  addressId: number;

  @Transform(({value})=> (new CreateTranslatedNameDto(value.dataValues)))
  name: TranslatedNames;

  logo: string;
  phone: string;
  status: AgencyStatus;
  agencyType: AgencyTypes;
  social: object;

  @Transform(({value})=>(new AddressDto(value.dataValues)))
  address: Addresses;

  @Exclude()
  createdAt: Date;
  @Exclude()
  updatedAt: Date;

  constructor(partial: Partial<Agency>) {
    Object.assign(this, partial)
  }
}
