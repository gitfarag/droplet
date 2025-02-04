import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResponeDto } from './dto/auth.response.dto';
import { AppConstants } from 'src/utils/constants';
import { BaseController } from 'src/utils/base.controller';
import { JwtGuard } from 'src/guards/jwt.guard';
import { UserDto } from '../users/dto/users.dto';
import { AuthUserDto } from './dto/auth.user.dto';

@Controller(AppConstants.BASICURL+'auth')
export class AuthController extends BaseController {
  constructor(private readonly authService: AuthService) {
    super();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('login')
  async login(@Body() createAuthDto: AuthResponeDto): Promise<AuthUserDto> {
    let res = await this.authService.login(createAuthDto)
    return new AuthUserDto(res);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
