import { HttpException, Injectable } from '@nestjs/common';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import * as cloudinary from 'cloudinary';

// Initialize Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

@Injectable()
export class UploadService {
  async create(createUploadDto) {
    try {
      let res = await cloudinary.v2.uploader.upload(createUploadDto.path, {
        resource_type: 'image',
        folder: 'myfolder',
        transformation: [
          {
            effect: 'background_removal',
          },
        ],
      });
      return res;
    } catch (error) {
      throw new HttpException(error.message, error.http_code)
    }
  }

  findAll() {
    return `This action returns all upload`;
  }

  findOne(id: number) {
    return `This action returns a #${id} upload`;
  }

  update(id: number, updateUploadDto: UpdateUploadDto) {
    return `This action updates a #${id} upload`;
  }

  remove(id: number) {
    return `This action removes a #${id} upload`;
  }
}
