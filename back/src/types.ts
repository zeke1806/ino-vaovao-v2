import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type Discussion = {
  __typename?: 'Discussion';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export enum FhStatus {
  Friend = 'FRIEND',
  Suggestion = 'SUGGESTION',
  RequestFromMe = 'REQUEST_FROM_ME',
  RequestToMe = 'REQUEST_TO_ME'
}

export type Message = {
  __typename?: 'Message';
  id: Scalars['ID'];
  content: Scalars['String'];
  createdAt: Scalars['String'];
  discussionId: Scalars['String'];
  senderId: Scalars['String'];
  sender?: Maybe<User>;
  views?: Maybe<Array<User>>;
};


export type Mutation = {
  __typename?: 'Mutation';
  login: Token;
  register: User;
  updatePhoto: User;
  updateInfo: User;
  delPhoto: User;
  sendRequest: User;
  acceptRequest: User;
  delRequest: Scalars['Boolean'];
  sendMessage: Message;
  createDiscussion: Discussion;
  viewMessage: Message;
};


export type MutationLoginArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationUpdatePhotoArgs = {
  file: Scalars['Upload'];
};


export type MutationUpdateInfoArgs = {
  input: UpdateInfoInput;
};


export type MutationSendRequestArgs = {
  userId: Scalars['String'];
};


export type MutationAcceptRequestArgs = {
  userId: Scalars['String'];
};


export type MutationDelRequestArgs = {
  userId: Scalars['String'];
};


export type MutationSendMessageArgs = {
  discussionId: Scalars['ID'];
  content: Scalars['String'];
};


export type MutationCreateDiscussionArgs = {
  members: Array<Scalars['ID']>;
  name: Scalars['String'];
};


export type MutationViewMessageArgs = {
  messageId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  helloWorld: Scalars['String'];
  users: Array<User>;
  me: User;
  friendsHistory: Array<User>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  sex: Scalars['Boolean'];
  birthday: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  photoPublicId?: Maybe<Scalars['String']>;
  fhStatus?: Maybe<FhStatus>;
};

export type Token = {
  __typename?: 'Token';
  token: Scalars['String'];
};

export type RegisterInput = {
  username: Scalars['String'];
  password: Scalars['String'];
  birthday: Scalars['String'];
  sex: Scalars['Boolean'];
};

export type UpdateInfoInput = {
  username: Scalars['String'];
  password: Scalars['String'];
  sex: Scalars['Boolean'];
  birthday: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Discussion: ResolverTypeWrapper<Discussion>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  FHStatus: FhStatus;
  Message: ResolverTypeWrapper<Message>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Query: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<User>;
  Token: ResolverTypeWrapper<Token>;
  RegisterInput: RegisterInput;
  UpdateInfoInput: UpdateInfoInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Discussion: Discussion;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Message: Message;
  Upload: Scalars['Upload'];
  Mutation: {};
  Boolean: Scalars['Boolean'];
  Query: {};
  User: User;
  Token: Token;
  RegisterInput: RegisterInput;
  UpdateInfoInput: UpdateInfoInput;
};

export type DiscussionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Discussion'] = ResolversParentTypes['Discussion']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  discussionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  senderId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  views?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  login?: Resolver<ResolversTypes['Token'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'username' | 'password'>>;
  register?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'input'>>;
  updatePhoto?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdatePhotoArgs, 'file'>>;
  updateInfo?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateInfoArgs, 'input'>>;
  delPhoto?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  sendRequest?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationSendRequestArgs, 'userId'>>;
  acceptRequest?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationAcceptRequestArgs, 'userId'>>;
  delRequest?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDelRequestArgs, 'userId'>>;
  sendMessage?: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationSendMessageArgs, 'discussionId' | 'content'>>;
  createDiscussion?: Resolver<ResolversTypes['Discussion'], ParentType, ContextType, RequireFields<MutationCreateDiscussionArgs, 'members' | 'name'>>;
  viewMessage?: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationViewMessageArgs, 'messageId'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  helloWorld?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  me?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  friendsHistory?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sex?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  birthday?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoPublicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fhStatus?: Resolver<Maybe<ResolversTypes['FHStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Discussion?: DiscussionResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
