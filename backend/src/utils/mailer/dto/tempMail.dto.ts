import { IsNotEmpty, IsString, IsEmail } from "class-validator";

export class TempMailDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    message: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    subject: string;
}
