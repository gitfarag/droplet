import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { ApiKeyService } from 'src/modules/api-key/api-key.service';
import { AppHelper } from 'src/utils/AppHelper';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(
  HeaderAPIKeyStrategy,
  'api-key',
) {
  constructor(private readonly apiKeyService: ApiKeyService) {
    super(
      { header: 'MY-API-KEY', prefix: '' },
      true,
      async (apiKey: string, done) => {
        return this.validate(apiKey, done);
      },
    );
  }
  public validate = async (
    apiKey: string,
    done: (error: Error, data) => {},
  ) => {
    if (AppHelper.isDebug()) {
      console.log('debug');
      done(null, true);
    }
    try {
      let key = await this.apiKeyService.validateKey(apiKey);
      if (key) {
        done(null, true);
      }
      done(new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED), null);
    } catch (e) {
      done(new HttpException(e, HttpStatus.BAD_REQUEST), null);
    }
  };
}
