import { Exclude, Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Addresses } from 'src/database/models/adresses.model';
import { Cities } from 'src/database/models/cities.model';
import { Governments } from 'src/database/models/governments';
import { CreateCityDto } from 'src/modules/cities/dto/create-city.dto';
import { CreateGovernmentDto } from 'src/modules/governments/dto/create-government.dto';
import { CreateTranslatedNameDto } from 'src/modules/translated-names/dto/create-translated-name.dto';

export class AddressDto {
  id?: number;

  @Exclude()
  governmentId: number;

  @Exclude()
  cityId: number;

  street: string;
  region: string;
  buildingNumber: string;
  apartmentNumber: string;
  latitude: number;
  longitude: number;

  @Transform(({ value }) => new CreateGovernmentDto(value.dataValues))
  government: Governments;

  @Transform(({ value }) => new CreateCityDto(value.dataValues))
  city: Cities;

  @Exclude()
  createdAt: Date;
  @Exclude()
  updatedAt: Date;

  constructor(partial: Partial<Addresses>) {
    Object.assign(this, partial);
  }
}
