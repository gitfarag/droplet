import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Roles } from "./roles.model";
import { SysRoutes } from "./sysRoutes.model";

@Table
export class Permissions extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    id?: number;

    @ForeignKey(()=> Roles)
    @Column
    role_id: number;

    @BelongsTo(()=> Roles)
    role: Roles;

    @ForeignKey(()=> SysRoutes)
    @Column
    route_id: number;

    @BelongsTo(()=> SysRoutes)
    route: SysRoutes;

    @Column({defaultValue: false})
    can_create: boolean;

    @Column({defaultValue: false})
    can_read: boolean;

    @Column({defaultValue: false})
    can_update: boolean;

    @Column({defaultValue: false})
    can_delete: boolean;

    createdAt: Date;

    updatedAt: Date;
}