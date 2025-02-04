import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class ApiKey extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id?: number;

  @Column
  key: string;

  @Column
  token: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @Column
  createdAt: Date;
  
  @Column
  updatedAt: Date;
}
