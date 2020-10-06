import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PhotoProfile } from './photo-profile.entity';
import { PhotoProfileResolvers } from './resolvers';
import { PhotoProfileService } from './photo-profile.service';
import { UserModule } from '../user/user.module';
import { PhotoProfileUtils } from './photo-profile.utils';

@Module({
  imports: [
    TypeOrmModule.forFeature([PhotoProfile]),
    forwardRef(() => UserModule),
  ],
  providers: [...PhotoProfileResolvers, PhotoProfileService, PhotoProfileUtils],
  exports: [PhotoProfileService],
})
export class PhotoProfileModule {}
