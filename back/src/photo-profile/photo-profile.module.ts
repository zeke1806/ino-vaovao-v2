import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PhotoProfile } from './photo-profile.entity';
import { PhotoProfileResolvers } from './resolvers';

@Module({
  imports: [TypeOrmModule.forFeature([PhotoProfile])],
  providers: [...PhotoProfileResolvers],
})
export class PhotoProfileModule {}
