import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Roles } from './roles.model';
import { Agency } from './agency.model';

@Table
export class Users extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id?: number;

  @ForeignKey(() => Roles)
  @Column
  role_id: number;

  @ForeignKey(() => Agency)
  @Column
  agencyId: number;

  @Column
  fName: string;

  @Column
  lName: string;

  @Column
  userName: string;

  @Column
  password: string;

  @Column
  email: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  // BelongsTo relation with the Role model
  @BelongsTo(() => Roles)
  role: Roles;

  // BelongsTo relation with the Role model
  @BelongsTo(() => Agency)
  agency: Agency;

  createdAt: Date;
  updatedAt: Date;
}
