import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const cloudinary = require('cloudinary').v2;

@Injectable()
export class CloudinaryService {
  public cloudinary: any;

  constructor(private configService: ConfigService) {
    const cloudinaryConfigs = this.configService.get('cloudinary');
    this.cloudinary = cloudinary;
    this.cloudinary.config(cloudinaryConfigs);
  }
}
