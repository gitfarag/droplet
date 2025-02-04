import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MAX } from "class-validator";

export class CreateRouteDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    route: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string
}
