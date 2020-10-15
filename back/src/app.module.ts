import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConnectionOptions } from 'typeorm';
import { GraphQLModule, GqlModuleOptions } from '@nestjs/graphql';
import { join } from 'path';

import configs from './configs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppResolver } from './app.resolver';

import { UserModule } from './user/user.module';
import { UtilsModule } from './utils/utils.module';
import { AuthModule } from './auth/auth.module';
import { PhotoProfileModule } from './photo-profile/photo-profile.module';
import { FriendHistoryModule } from './friend-history/friend-history.module';

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
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule { }
