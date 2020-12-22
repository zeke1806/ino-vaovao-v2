import configs from '../../configs';

const CLOUDINARY = require('cloudinary').v2;

export class CloudinaryService {
  public cloudinary: any;

  constructor() {
    if(!this.cloudinary) {
      this.cloudinary = CLOUDINARY;
      this.cloudinary.config(configs.cloudinary);
    }
  }
}