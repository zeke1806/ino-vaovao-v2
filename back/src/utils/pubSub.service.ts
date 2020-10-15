import { Injectable } from '@nestjs/common';
import { PubSub, PubSubEngine } from 'graphql-subscriptions';

@Injectable()
export class PubSubService {
  public pubSub: PubSubEngine
  constructor() {
    this.pubSub = new PubSub();
  }
}