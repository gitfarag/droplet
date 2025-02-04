import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from 'src/database/models/users.model';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/strategies/jwt.strategy';
import { ApiKeyStrategy } from 'src/strategies/apiKey.strategy';
import { ApiKey } from 'src/database/models/apiKey.model';
import { PassportModule } from '@nestjs/passport';
import { ApiKeyService } from '../api-key/api-key.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Users, ApiKey]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '2d' },
    }),
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService,ApiKeyService, JwtStrategy, ApiKeyStrategy],
})
export class AuthModule {}
