import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Transform } from "class-transformer";
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Agency } from "src/database/models/agency.model";
import { Permissions } from "src/database/models/permissions.model";
import { Roles } from "src/database/models/roles.model";
import { AgencyDto } from "src/modules/agencies/dto/agency.dto";
import { CreatePermissionDto } from "src/modules/permissions/dto/create-permission.dto";
import { CreateRoleDto } from "src/modules/roles/dto/create-role.dto";
import { Users } from "src/utils/modelCtor";

export class UserDto {
    @IsNumber()
    @IsOptional()
    id?: number;

    @Exclude()
    role_id: number

    @Exclude()
    agencyId: number
    
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    fName: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    lName: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    userName: string;

    @IsNotEmpty()
    @IsString()
    @Exclude()
    @ApiProperty()
    password: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @ApiProperty()
    email: string;

    @Transform(({value})=> value ? value.dataValues.name : '')
    role: Roles

    @IsNotEmpty()
    @IsBoolean()
    @ApiProperty()
    isActive: boolean;

    @Exclude()
    createdAt: Date

    @Exclude()
    updatedAt: Date

    // @Transform(({value})=> {return new CreateRoleDto(value)})
    // role?: Roles

    // @Transform(({value})=> {return new AgencyDto(value.dataValues)})
    // agency?: Agency

    constructor(partial: Partial<Users>){
        Object.assign(this, partial)
    }
}
