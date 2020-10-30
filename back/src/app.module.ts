import { ConfigModule, ConfigService } from '@nestjs/config';
import { GqlModuleOptions, GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConnectionOptions } from 'typeorm';
import { DiscussionModule } from './discussion/discussion.module';
import { DiscussionUserModule } from './discussion-user/discussion-user.module';
import { FriendHistoryModule } from './friend-history/friend-history.module';
import { MessageModule } from './message/message.module';
import { Module } from '@nestjs/common';
import { PhotoProfileModule } from './photo-profile/photo-profile.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UtilsModule } from './utils/utils.module';
import configs from './configs';
import { join } from 'path';
import { ViewMessageModule } from './view-message/view-message.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configs],
    }),
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const graphqlConfigs = configService.get<GqlModuleOptions>('graphql');
        return {
          installSubscriptionHandlers: true,
          autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
          sortSchema: true,
          playground: graphqlConfigs.playground,
          debug: graphqlConfigs.debug,
          // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
          context: ({ req }) => ({ req }),
        };
      },
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return configService.get<ConnectionOptions>('database');
      },
    }),
    UserModule,
    UtilsModule,
    AuthModule,
    PhotoProfileModule,
    FriendHistoryModule,
    MessageModule,
    DiscussionModule,
    DiscussionUserModule,
    ViewMessageModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
