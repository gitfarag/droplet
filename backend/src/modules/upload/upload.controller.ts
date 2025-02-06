import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UseGuards, UploadedFile, UploadedFiles, StreamableFile, Header, BadRequestException } from '@nestjs/common';
import { UploadService } from './upload.service';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { AppConstants } from 'src/utils/constants';
import { BaseController } from 'src/utils/base.controller';
import { JwtGuard } from 'src/guards/jwt.guard';
import { createReadStream } from 'fs';
import { join } from 'path';
import { RolesGuard } from 'src/guards/roles.guard';
import { diskStorage } from 'multer';

@Controller(AppConstants.BASICURL+'upload')
@UseGuards(JwtGuard, RolesGuard)
export class UploadController extends BaseController{
  constructor(private readonly uploadService: UploadService) {
    super();
  }

  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      },
    }),
  }))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    // return files
      let res = await this.uploadService.create(file);
      return res
  }

  @Get('file')
  getFile(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'src/main.ts'));
    if (!file) throw new BadRequestException('file doesn\'t exist')
    return new StreamableFile(file);
  }

  @Get()
  findAll() {
    return this.uploadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.uploadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUploadDto: UpdateUploadDto) {
    return this.uploadService.update(+id, updateUploadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uploadService.remove(+id);
  }
}
