import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(id: any): string {
    if (id !== 1) {
      return 'Hello World';
    } else {
      throw new HttpException('Invalid ID', HttpStatus.BAD_REQUEST);
    }
  }
}
