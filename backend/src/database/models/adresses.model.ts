import { Column, Table, Model, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { TranslatedNames } from './translatedNames';
import { Cities } from './cities.model';
import { Governments } from './governments';

@Table
export class Addresses extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id?: number;

  @ForeignKey(()=> Governments)
  @Column
  governmentId: number;

  @ForeignKey(()=> Cities)
  @Column
  cityId: number;

  @Column
  street: string;

  @Column
  region: string;

  @Column
  buildingNumber: string;

  @Column
  apartmentNumber: string;

  @Column
  latitude: number;

  @Column
  longitude: number;

  @BelongsTo(()=> Governments)
  government: Governments;

  @BelongsTo(()=> Cities)
  city:Cities

  createdAt: Date
  updatedAt: Date
}
