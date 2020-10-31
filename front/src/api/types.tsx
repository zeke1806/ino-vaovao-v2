import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Discussion = {
  __typename?: 'Discussion';
  id: Scalars['Float'];
  lastMessage: LastMessage;
  name?: Maybe<Scalars['String']>;
};

export type FriendHistory = {
  __typename?: 'FriendHistory';
  accepted: Scalars['Boolean'];
  friend: User;
  user: User;
};

export type LastMessage = {
  __typename?: 'LastMessage';
  message: Message;
  view: Scalars['Boolean'];
};

export type LoginError = {
  __typename?: 'LoginError';
  incorrectInfo: Scalars['String'];
};

export type LoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type LoginResult = LoginError | LoginToken;

export type LoginToken = {
  __typename?: 'LoginToken';
  token: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  discussionId: Scalars['Float'];
  id: Scalars['Float'];
  sender: User;
};

export type MessagesResult = {
  __typename?: 'MessagesResult';
  data: Array<Message>;
  paginationMeta: PaginationMeta;
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptFriendRequest: FriendHistory;
  cancelRequest: Scalars['Boolean'];
  connect: User;
  declineFriendRequest: Scalars['Boolean'];
  disconnect: User;
  login: LoginResult;
  register: RegisterResult;
  removeProfileImage: RemoveProfileImageResult;
  sendFriendRequest: FriendHistory;
  sendMessage: Message;
  setCurrentPhoto: Scalars['Boolean'];
  updateAccount: UpdateAccountResult;
  uploadProfileImage?: Maybe<PhotoProfile>;
  viewMessage: Message;
};


export type MutationAcceptFriendRequestArgs = {
  userId: Scalars['Float'];
};


export type MutationCancelRequestArgs = {
  friendId: Scalars['Float'];
};


export type MutationDeclineFriendRequestArgs = {
  userId: Scalars['Float'];
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};


export type MutationRemoveProfileImageArgs = {
  photoProfilePublicId: Scalars['String'];
};


export type MutationSendFriendRequestArgs = {
  friendId: Scalars['Float'];
};


export type MutationSendMessageArgs = {
  data: SendMessageInput;
};


export type MutationSetCurrentPhotoArgs = {
  publicId: Scalars['String'];
};


export type MutationUpdateAccountArgs = {
  updateAccountInput: UpdateAccountInput;
};


export type MutationUploadProfileImageArgs = {
  file: Scalars['Upload'];
};


export type MutationViewMessageArgs = {
  messageId: Scalars['Float'];
};

export type PaginationInput = {
  limit?: Maybe<Scalars['Float']>;
  page?: Maybe<Scalars['Float']>;
};

export type PaginationMeta = {
  __typename?: 'PaginationMeta';
  currentPage: Scalars['Float'];
  itemCount: Scalars['Float'];
  itemsPerPage: Scalars['Float'];
  totalItems: Scalars['Float'];
  totalPages: Scalars['Float'];
};

export type PhotoProfile = {
  __typename?: 'PhotoProfile';
  current: Scalars['Boolean'];
  id: Scalars['Float'];
  publicId: Scalars['String'];
  url: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  friendRequests: Array<User>;
  friends: Array<User>;
  friendSuggestion: Array<User>;
  hello: Scalars['String'];
  me: User;
  messages: MessagesResult;
  userDiscussions: Array<Discussion>;
};


export type QueryMessagesArgs = {
  discussionId: Scalars['Float'];
  paginationInput: PaginationInput;
};

export type RegisterError = {
  __typename?: 'RegisterError';
  fieldEmpty?: Maybe<Scalars['String']>;
  usernameNotAvailable?: Maybe<Scalars['String']>;
};

export type RegisterInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type RegisterResult = RegisterError | User;

export type RemoveProfileImageError = {
  __typename?: 'RemoveProfileImageError';
  notUserPhoto: Scalars['String'];
};

export type RemoveProfileImageOk = {
  __typename?: 'RemoveProfileImageOk';
  status: Scalars['Boolean'];
};

export type RemoveProfileImageResult = RemoveProfileImageError | RemoveProfileImageOk;

export type SendMessageInput = {
  content: Scalars['String'];
  discussionId?: Maybe<Scalars['Float']>;
  discussionName: Scalars['String'];
  members: Array<Scalars['Float']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  acceptFriendRequestEvent: FriendHistory;
  connectEvent: User;
  declineFriendRequestEvent: FriendHistory;
  disconnectEvent: User;
  sendFriendRequestEvent: FriendHistory;
  sendMessageEvent: Message;
};


export type SubscriptionSendMessageEventArgs = {
  discussionId: Scalars['Float'];
};

export type UpdateAccountError = {
  __typename?: 'UpdateAccountError';
  cannotUpdateTheSameInfo?: Maybe<Scalars['String']>;
  usernameNotAvailable?: Maybe<Scalars['String']>;
};

export type UpdateAccountInput = {
  password: Scalars['String'];
  statusConnected: Scalars['Boolean'];
  username: Scalars['String'];
};

export type UpdateAccountResult = UpdateAccountError | User;


export type User = {
  __typename?: 'User';
  currentPhoto?: Maybe<PhotoProfile>;
  id: Scalars['Float'];
  photos: Array<PhotoProfile>;
  requested: Scalars['Boolean'];
  statusConnected: Scalars['Boolean'];
  username: Scalars['String'];
};
