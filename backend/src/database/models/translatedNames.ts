import { Column, Table, Model } from 'sequelize-typescript';

@Table
export class TranslatedNames extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id?: number;

  @Column
  en: string;

  @Column
  ar: string;

  createdAt: Date
  updatedAt: Date
}
