import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { BcryptService } from './bcrypt.service';
import { CloudinaryService } from './cloudinary.service';
import { PubSubService } from './pubSub.service';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [BcryptService, CloudinaryService, PubSubService],
  exports: [BcryptService, CloudinaryService, PubSubService],
})
export class UtilsModule { }
