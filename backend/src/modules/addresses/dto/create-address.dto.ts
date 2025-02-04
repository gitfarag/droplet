import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAddressDto {
  id?: number;

  @IsNumber()
  @IsNotEmpty()
  governmentId: number;

  @IsNumber()
  @IsNotEmpty()
  cityId: number;

  @IsString()
  street: string;

  @IsString()
  region: string;

  @IsString()
  buildingNumber: string;

  @IsString()
  apartmentNumber: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;
}
