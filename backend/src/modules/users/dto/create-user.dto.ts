import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Transform } from "class-transformer";
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Roles } from "src/database/models/roles.model";
import { Users } from "src/utils/modelCtor";

export class CreateUserDto {
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    role_id: number

    @IsOptional()
    @IsNumber()
    @ApiProperty()
    agency_id: number
    
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
    @ApiProperty()
    password: string;

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: string;

    @IsNotEmpty()
    @IsBoolean()
    @ApiProperty()
    isActive: boolean;

}
