import { UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiSecurity } from '@nestjs/swagger';
import { ApiKeyGuard } from 'src/guards/apiKey.guard';

@UseGuards(ApiKeyGuard)
@ApiBearerAuth()
@ApiSecurity('apiKey')
export class BaseController {
}
