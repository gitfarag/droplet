import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Users } from "../../../database/models/users.model"
import { ApiProperty } from "@nestjs/swagger";

export class AuthResponeDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    userName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    password: string;

    @IsString()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    token: string;

}
