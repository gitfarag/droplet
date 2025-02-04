import {
  Column,
  Table,
  Model,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { TranslatedNames } from './translatedNames';
import { Addresses } from './adresses.model';
import { DataTypes } from 'sequelize';
import { AgencyStatus } from 'db/ENUMS/status.enum';
import { AgencyTypes } from '../ENUMS/agencyTypes.enum';

@Table
export class Agency extends Model {
  @Column({ primaryKey: true, autoIncrement: true, allowNull: false })
  id?: number;

  @ForeignKey(() => TranslatedNames)
  @Column
  nameId?: number;

  @BelongsTo(() => TranslatedNames)
  name: TranslatedNames;

  @Column
  logo: string;

  @Column
  phone: string;

  @Column
  email: string;

  @BelongsTo(() => Addresses)
  address: Addresses;

  @Column
  status: AgencyStatus;

  @Column
  agencyType: AgencyTypes;

  @Column(DataTypes.JSON)
  social: object | null;

  @ForeignKey(() => Addresses)
  @Column
  addressId?: number;

  @Column
  createdAt?: Date;

  @Column
  updatedAt?: Date;
}
