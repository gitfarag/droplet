import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthResponeDto } from './dto/auth.response.dto';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // login with username and password
  async login(authhResponeDto: AuthResponeDto): Promise<AuthResponeDto> {
    let user = await this.usersService.findByUsername(authhResponeDto.userName);
    if (!user)
      throw new HttpException('Invalid credentials', HttpStatus.BAD_REQUEST);
    let isMatch = await bcrypt.compare(authhResponeDto.password, user.password);
    if (!isMatch) throw new BadRequestException('Invalid credentials');
    const payload = { userName: user.userName, sub: user.id, email: user.email };
    let token = await this.jwtService.signAsync(payload);
    return { ...user.dataValues, token };
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
