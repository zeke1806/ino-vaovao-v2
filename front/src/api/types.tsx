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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AffectUsersToDiscussionInput = {
  discussionId: Scalars['Float'];
  usersId: Array<Scalars['Float']>;
};

export type Discussion = {
  __typename?: 'Discussion';
  id: Scalars['Float'];
  name?: Maybe<Scalars['String']>;
};

export type FriendHistory = {
  __typename?: 'FriendHistory';
  accepted: Scalars['Boolean'];
  friend: User;
  user: User;
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

export type Mutation = {
  __typename?: 'Mutation';
  acceptFriendRequest: FriendHistory;
  affectUsersToDiscussion: Scalars['Boolean'];
  cancelRequest: Scalars['Boolean'];
  connect: User;
  declineFriendRequest: Scalars['Boolean'];
  disconnect: User;
  login: LoginResult;
  register: RegisterResult;
  removeDiscussion: Discussion;
  removeProfileImage: RemoveProfileImageResult;
  saveDiscussion: Discussion;
  sendFriendRequest: FriendHistory;
  setCurrentPhoto: Scalars['Boolean'];
  updateAccount: UpdateAccountResult;
  uploadProfileImage?: Maybe<PhotoProfile>;
};


export type MutationAcceptFriendRequestArgs = {
  userId: Scalars['Float'];
};


export type MutationAffectUsersToDiscussionArgs = {
  affectData: AffectUsersToDiscussionInput;
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


export type MutationRemoveDiscussionArgs = {
  id: Scalars['Float'];
};


export type MutationRemoveProfileImageArgs = {
  photoProfilePublicId: Scalars['String'];
};


export type MutationSaveDiscussionArgs = {
  discussionData: SaveDiscussionInput;
};


export type MutationSendFriendRequestArgs = {
  friendId: Scalars['Float'];
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

export type SaveDiscussionInput = {
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  acceptFriendRequestEvent: FriendHistory;
  connectEvent: User;
  declineFriendRequestEvent: FriendHistory;
  disconnectEvent: User;
  sendFriendRequestEvent: FriendHistory;
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
