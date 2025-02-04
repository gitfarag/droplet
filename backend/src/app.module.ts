import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { connectorOptions } from './database/config';
import { AuthModule } from './modules/auth/auth.module';
import { ApiKeyModule } from './modules/api-key/api-key.module';
import { RolesModule } from './modules/roles/roles.module';
import { PermissionsModule } from './modules/permissions/permissions.module';
import { RoutesModule } from './modules/routes/routes.module';
import { CacheModule, CacheInterceptor } from '@nestjs/cache-manager';
import { UploadModule } from './modules/upload/upload.module';
import { CronModule } from './utils/cron/cron.module';
import { ScheduleModule } from '@nestjs/schedule';
import { GovernmentsModule } from './modules/governments/governments.module';
import { TranslatedNamesModule } from './modules/translated-names/translated-names.module';
import { CitiesModule } from './modules/cities/cities.module';
import { AddressesModule } from './modules/addresses/addresses.module';
import { AgenciesModule } from './modules/agencies/agencies.module';

@Module({
  imports: [
    SequelizeModule.forRoot({...connectorOptions}),
    ScheduleModule.forRoot(),
    ConfigModule.forRoot(),
    CacheModule.register({
      ttl: 5000
    }),
    PermissionsModule,
    ApiKeyModule,
    RoutesModule,
    UploadModule,
    UsersModule,
    RolesModule,
    CronModule,
    AuthModule,
    CronModule,
    GovernmentsModule,
    TranslatedNamesModule,
    CitiesModule,
    AddressesModule,
    AgenciesModule
  ],
  providers: [AppService, {
    provide: 'APP_INTERCEPTOR',
    useClass: CacheInterceptor,
  }],
})
export class AppModule {}
