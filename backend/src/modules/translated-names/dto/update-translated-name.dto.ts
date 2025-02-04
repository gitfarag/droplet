import { PartialType } from '@nestjs/swagger';
import { CreateTranslatedNameDto } from './create-translated-name.dto';

export class UpdateTranslatedNameDto extends PartialType(CreateTranslatedNameDto) {}
