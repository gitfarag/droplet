import { Column, NotNull, Table, Model } from 'sequelize-typescript';

@Table
export class SysRoutes extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  route: string;

  @Column
  name: string;

  createdAt: Date;
  updatedAt: Date;
}
