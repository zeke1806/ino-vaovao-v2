import { Module, Global } from '@nestjs/common';

import { BcryptService } from './bcrypt.service';
import { CloudinaryService } from './cloudinary.service';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [BcryptService, CloudinaryService],
  exports: [BcryptService, CloudinaryService],
})
export class UtilsModule {}
