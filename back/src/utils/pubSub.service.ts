import { Injectable } from '@nestjs/common';
import { PubSubEngine } from 'graphql-subscriptions';
import { PostgresPubSub } from "graphql-postgres-subscriptions";
import { Client } from "pg";
import { ConfigService } from '@nestjs/config';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

@Injectable()
export class PubSubService {
  public pubSub: PubSubEngine

  constructor(
    private configService: ConfigService
  ) {
    const dbConfig: PostgresConnectionOptions = this.configService.get<PostgresConnectionOptions>('database');
    const client = new Client({
      user: dbConfig.username,
      host: dbConfig.host,
      database: dbConfig.database,
      password: dbConfig.password,
      port: dbConfig.port,
    });
    client.connect().then(() => {
      this.pubSub = new PostgresPubSub({ client });
    });
  }
}