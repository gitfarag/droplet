import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNotIn,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';
import { IsImageFile } from '../validators/images.validator';

export class CreateUploadDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @Matches(/^(\S+)$/, {
    message: 'The string cannot be just whitespace',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @ApiProperty({
    description: 'Product image file',
    type: 'string',
    format: 'binary',
  })
  @IsImageFile()
  file1: any;

  @ApiProperty({
    description: 'Product image file',
    type: 'string',
    format: 'binary',
  })
  @IsImageFile()
  file2: any;
}
