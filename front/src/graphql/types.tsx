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

export type FriendHistory = {
  __typename?: 'FriendHistory';
  friend: User;
  status: FriendHistoryStatus;
  user: User;
};

export enum FriendHistoryStatus {
  Accepted = 'Accepted',
  Declined = 'Declined',
  Pending = 'Pending'
}

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
  login: LoginResult;
  register: RegisterResult;
  removeProfileImage: RemoveProfileImageResult;
  sendFriendRequest: FriendHistory;
  updateAccount: UpdateAccountResult;
  uploadProfileImage?: Maybe<PhotoProfile>;
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
  idFriend: Scalars['Float'];
};


export type MutationUpdateAccountArgs = {
  updateAccountInput: UpdateAccountInput;
};


export type MutationUploadProfileImageArgs = {
  file: Scalars['Upload'];
};

export type PhotoProfile = {
  __typename?: 'PhotoProfile';
  id: Scalars['Float'];
  publicId: Scalars['String'];
  url: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
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
  id: Scalars['Float'];
  statusConnected: Scalars['Boolean'];
  username: Scalars['String'];
};
