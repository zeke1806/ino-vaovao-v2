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
  login: LoginResult;
  register: RegisterResult;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
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

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
};
