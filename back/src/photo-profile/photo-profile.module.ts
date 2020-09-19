import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PhotoProfile } from './photo-profile.entity';
import { PhotoProfileResolvers } from './resolvers';
import { PhotoProfileService } from './photo-profile.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([PhotoProfile]), UserModule],
  providers: [...PhotoProfileResolvers, PhotoProfileService],
})
export class PhotoProfileModule {}
