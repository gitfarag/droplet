import { PartialType } from '@nestjs/mapped-types';
import { AuthResponeDto } from './auth.response.dto';

export class UpdateAuthDto extends PartialType(AuthResponeDto) {}
