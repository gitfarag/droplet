import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { CreateMailerDto } from './dto/create-mailer.dto';
import { UpdateMailerDto } from './dto/update-mailer.dto';
import { AppConstants } from '../constants';
import { JwtGuard } from 'src/guards/jwt.guard';
import { TempMailDto } from './dto/tempMail.dto';

@Controller(AppConstants.BASICURL+'mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}
  
  @UseGuards(JwtGuard)
  @Post()
  create(@Body() createMailerDto: CreateMailerDto) {
    return this.mailerService.sendMail(createMailerDto.to, createMailerDto.subject, createMailerDto.text);
  }

  @Post('contact')
  tempUser(@Body() tempMail: TempMailDto) {
    return this.mailerService.tempMail(tempMail.email, tempMail.name, tempMail.message, tempMail.subject);
  }

  @Get()
  findAll() {
    return this.mailerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mailerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMailerDto: UpdateMailerDto) {
    return this.mailerService.update(+id, updateMailerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailerService.remove(+id);
  }
}
