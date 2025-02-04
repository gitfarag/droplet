import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
import { UsersService } from 'src/modules/users/users.service';

@Injectable()
export class CronService {
  constructor(private readonly userService: UsersService) {}
  private readonly logger = new Logger(CronService.name);

  //   @Cron('5 * * * * *')
  //   async handleCron() {
  //     this.logger.debug('Called when the second is 45');
  //     return
  //   }

  //   @Interval(3000)
  //   async handleInterval() {
  //     this.logger.debug('Called every 3 seconds');
  //     let res = await this.userService.findOne(1);
  //     console.log(res.dataValues);
  //   }

  //   @Timeout(5000)
  //   async handleTimeout() {
  //     return await this.userService.findAll()
  //   }
}
