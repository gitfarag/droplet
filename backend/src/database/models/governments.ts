import { Column, Table, Model, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { TranslatedNames } from './translatedNames';

@Table
export class Governments extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id?: number;

  @ForeignKey(()=> TranslatedNames)
  @Column
  nameId: number;

  @BelongsTo(()=> TranslatedNames)
  name:TranslatedNames

  createdAt: Date
  updatedAt: Date
}
