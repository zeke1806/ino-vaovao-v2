import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscussionModule } from '../discussion/discussion.module';
import { UserModule } from '../user/user.module';
import { DiscussionUser } from './discussion-user.entity';
import { DiscussionUserService } from './discussion-user.service';
import { DiscussionUserResolvers } from './resolvers';

@Module({
  imports: [
    TypeOrmModule.forFeature([DiscussionUser]),
    forwardRef(() => UserModule),
    forwardRef(() => DiscussionModule),
  ],
  providers: [DiscussionUserService, ...DiscussionUserResolvers],
  exports: [DiscussionUserService],
})
export class DiscussionUserModule {}
