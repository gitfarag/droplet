import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateRoleDto {
    @IsNumber()
    @IsOptional()
    id:number;
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name: string
}
