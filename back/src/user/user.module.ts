import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserResolvers } from './resolvers';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserResolverFields } from './resolver-fileds/user.resolver-fields';
import { PhotoProfileModule } from '../photo-profile/photo-profile.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    forwardRef(() => PhotoProfileModule),
  ],
  providers: [...UserResolvers, UserService, UserResolverFields],
  exports: [UserService],
})
export class UserModule {}
