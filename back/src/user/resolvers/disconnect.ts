import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Resolver, Subscription } from "@nestjs/graphql";
import { CurrentUser, GqlAuthGuard } from "../../auth/auth.guards";
import { AuthPayload } from "../../auth/auth.model";
import { PubSubService } from "../../utils/pubSub.service";

const EVENT = 'disconnectEvent';
interface Publication {
  id: number;
}

@Resolver()
export class DisconnectResolver {
  constructor(
    private pubSubService: PubSubService
  ) { }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async disconnect(@CurrentUser() authPayload: AuthPayload): Promise<boolean> {
    const pub: Publication = {
      id: authPayload.payload.id
    }
    this.pubSubService.pubSub.publish(EVENT, pub)
    return false;
  }

  @Subscription(() => Boolean, {
    filter: (pub: Publication, vars: { id: number }) => {
      return vars.id === pub.id
    },

    resolve: () => false
  })
  disconnectEvent(@Args('id') id: number): AsyncIterator<unknown, any, undefined> {
    return this.pubSubService.pubSub.asyncIterator(EVENT)
  }
}