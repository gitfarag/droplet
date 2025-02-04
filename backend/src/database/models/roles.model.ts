import { Column, Table, Model, BelongsToMany, HasMany } from 'sequelize-typescript';
import { Users } from './users.model';
import { IsNotEmpty } from 'class-validator';
import { Permissions } from './permissions.model';

@Table
export class Roles extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id?: number;

  @IsNotEmpty()
  @Column
  name: string;

  @HasMany(()=> Permissions)
  permissions: Permissions[]

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}
