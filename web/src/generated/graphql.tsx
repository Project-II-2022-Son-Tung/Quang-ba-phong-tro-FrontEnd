import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Admin = {
  __typename?: 'Admin';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type AdminMutationResponse = IMutationResponse & {
  __typename?: 'AdminMutationResponse';
  admin?: Maybe<Admin>;
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type AdminRegisterInput = {
  email: Scalars['String'];
  fullName: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type ChangePasswordInput = {
  confirmPassword: Scalars['String'];
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type Contract = {
  __typename?: 'Contract';
  additionalAgreements: Scalars['String'];
  address: Scalars['String'];
  contractDuration: Scalars['DateTime'];
  contractFee: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  deposit: Scalars['Float'];
  id: Scalars['ID'];
  leasePrice: Scalars['Float'];
  owner: Owner;
  room: Room;
  status: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type CreateRoomInput = {
  address: Scalars['String'];
  airConditioning: Scalars['Boolean'];
  description: Scalars['String'];
  district: Scalars['String'];
  electricPrice?: InputMaybe<Scalars['Float']>;
  enclosed: Scalars['Boolean'];
  floor: Scalars['Float'];
  images: Array<RoomImageInput>;
  lift: Scalars['Boolean'];
  liveWithHost: Scalars['Boolean'];
  maxOccupancy: Scalars['Float'];
  numberOfFloors: Scalars['Float'];
  parking: Scalars['Boolean'];
  parkingFee?: InputMaybe<Scalars['Float']>;
  petsAllowed: Scalars['Boolean'];
  price: Scalars['Float'];
  province: Scalars['String'];
  size: Scalars['Float'];
  title: Scalars['String'];
  ward: Scalars['String'];
  waterHeating: Scalars['Boolean'];
  waterPrice?: InputMaybe<Scalars['Float']>;
  wifi: Scalars['Boolean'];
  wifiFee?: InputMaybe<Scalars['Float']>;
};

export type Districts = {
  __typename?: 'Districts';
  administrative_unit_id?: Maybe<Scalars['Int']>;
  code: Scalars['String'];
  code_name?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  full_name_en?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  name_en: Scalars['String'];
  province: Provinces;
  province_code: Scalars['String'];
  rooms: Array<Room>;
  wards: Array<Wards>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type FilterRange = {
  max?: InputMaybe<Scalars['Float']>;
  min?: InputMaybe<Scalars['Float']>;
};

export type ForgotPasswordInput = {
  email: Scalars['String'];
};

export type IMutationResponse = {
  code: Scalars['Float'];
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type Identification = {
  __typename?: 'Identification';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  issueDate: Scalars['DateTime'];
  issuedBy: Scalars['String'];
  serial: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Invite = {
  __typename?: 'Invite';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  owner: Owner;
  room: Room;
  status: Scalars['String'];
  timeOfCheck: Scalars['DateTime'];
  user: User;
};

export type LoginInput = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: UserMutationResponse;
  changePasswordOwner: OwnerMutationResponse;
  createRoom: RoomMutationResponse;
  forgotPassword: Scalars['Boolean'];
  forgotPasswordOwner: Scalars['Boolean'];
  login: UserMutationResponse;
  loginAdmin: AdminMutationResponse;
  loginOwner: OwnerMutationResponse;
  logout: Scalars['Boolean'];
  register: UserMutationResponse;
  registerAdmin: AdminMutationResponse;
  registerOwner: OwnerMutationResponse;
  updateOwner?: Maybe<OwnerMutationResponse>;
  updateUser?: Maybe<UserMutationResponse>;
};


export type MutationChangePasswordArgs = {
  changePasswordInput: ChangePasswordInput;
  token: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationChangePasswordOwnerArgs = {
  changePasswordInput: ChangePasswordInput;
  token: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationCreateRoomArgs = {
  roomInput: CreateRoomInput;
};


export type MutationForgotPasswordArgs = {
  forgotPasswordInput: ForgotPasswordInput;
};


export type MutationForgotPasswordOwnerArgs = {
  forgotPasswordInput: ForgotPasswordInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationLoginAdminArgs = {
  loginInput: LoginInput;
};


export type MutationLoginOwnerArgs = {
  loginInput: LoginInput;
};


export type MutationRegisterArgs = {
  registerInput: UserRegisterInput;
};


export type MutationRegisterAdminArgs = {
  registerInput: AdminRegisterInput;
};


export type MutationRegisterOwnerArgs = {
  registerInput: OwnerRegisterInput;
};


export type MutationUpdateOwnerArgs = {
  updateOwnerInput: UpdateUiInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUiInput;
};

export type Owner = {
  __typename?: 'Owner';
  address: Scalars['String'];
  avatarUrl: Scalars['String'];
  contracts?: Maybe<Array<Contract>>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  histories?: Maybe<Array<OwnerHistory>>;
  id: Scalars['ID'];
  identification: Identification;
  identificationId: Scalars['ID'];
  invites?: Maybe<Array<Invite>>;
  phoneNumber: Scalars['String'];
  rate: Scalars['Float'];
  rates?: Maybe<Array<OwnerRate>>;
  rooms?: Maybe<Array<Room>>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  wallet: Wallet;
};

export type OwnerHistory = {
  __typename?: 'OwnerHistory';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  owner: Owner;
  room: Room;
  type: Scalars['String'];
};

export type OwnerMutationResponse = IMutationResponse & {
  __typename?: 'OwnerMutationResponse';
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  owner?: Maybe<Owner>;
  success: Scalars['Boolean'];
};

export type OwnerRate = {
  __typename?: 'OwnerRate';
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  owner: Owner;
  rate: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type OwnerRegisterInput = {
  address?: InputMaybe<Scalars['String']>;
  avatarUrl: Scalars['String'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  identificationId?: InputMaybe<Scalars['String']>;
  issueDate?: InputMaybe<Scalars['DateTime']>;
  issuedBy?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

export type Provinces = {
  __typename?: 'Provinces';
  administrative_region_id?: Maybe<Scalars['Int']>;
  administrative_unit_id?: Maybe<Scalars['Int']>;
  code: Scalars['String'];
  code_name?: Maybe<Scalars['String']>;
  districts: Array<Districts>;
  full_name?: Maybe<Scalars['String']>;
  full_name_en?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  name_en: Scalars['String'];
  rooms: Room;
};

export type Query = {
  __typename?: 'Query';
  districts: Array<Districts>;
  districtsOfProvince: Array<Districts>;
  me?: Maybe<User>;
  meAdmin?: Maybe<Admin>;
  meOwner?: Maybe<Owner>;
  provinces: Array<Provinces>;
  room?: Maybe<RoomMutationResponse>;
  rooms: Array<Room>;
  wards: Array<Wards>;
  wardsOfDistrict: Array<Wards>;
};


export type QueryDistrictsOfProvinceArgs = {
  provinceCode: Scalars['String'];
};


export type QueryRoomArgs = {
  id: Scalars['String'];
};


export type QueryRoomsArgs = {
  filter?: InputMaybe<RoomFilterInput>;
  limit: Scalars['Float'];
  orderBy?: InputMaybe<RoomOrderByInput>;
  page: Scalars['Float'];
};


export type QueryWardsOfDistrictArgs = {
  districtCode: Scalars['String'];
};

export type RateImage = {
  __typename?: 'RateImage';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  rate: RoomRate;
  updatedAt: Scalars['DateTime'];
};

export type Room = {
  __typename?: 'Room';
  address: Scalars['String'];
  airConditioning: Scalars['Boolean'];
  available: Scalars['Boolean'];
  contracts: Array<Contract>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  district: Districts;
  electricPrice?: Maybe<Scalars['Float']>;
  enclosed: Scalars['Boolean'];
  floor: Scalars['Float'];
  histories: Array<UserHistory>;
  id: Scalars['ID'];
  images: Array<RoomImage>;
  invites: Array<Invite>;
  lift: Scalars['Boolean'];
  liveWithHost: Scalars['Boolean'];
  maxOccupancy: Scalars['Float'];
  numberOfFloors: Scalars['Float'];
  owner: Owner;
  parking: Scalars['Boolean'];
  parkingFee?: Maybe<Scalars['Float']>;
  petsAllowed: Scalars['Boolean'];
  price: Scalars['Float'];
  province: Provinces;
  rate?: Maybe<Scalars['Float']>;
  rates: Array<RoomRate>;
  size: Scalars['Float'];
  title: Scalars['String'];
  ward: Wards;
  waterHeating: Scalars['Boolean'];
  waterPrice?: Maybe<Scalars['Float']>;
  wifi: Scalars['Boolean'];
  wifiFee?: Maybe<Scalars['Float']>;
};

export type RoomFilterInput = {
  airConditioning?: InputMaybe<Scalars['Boolean']>;
  districtCode?: InputMaybe<Array<Scalars['String']>>;
  electricPrice?: InputMaybe<FilterRange>;
  enclosed?: InputMaybe<Scalars['Boolean']>;
  floor?: InputMaybe<FilterRange>;
  lift?: InputMaybe<Scalars['Boolean']>;
  liveWithHost?: InputMaybe<Scalars['Boolean']>;
  maxOccupancy?: InputMaybe<FilterRange>;
  numberOfFloors?: InputMaybe<FilterRange>;
  parking?: InputMaybe<Scalars['Boolean']>;
  parkingFee?: InputMaybe<FilterRange>;
  petAllowed?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<FilterRange>;
  provinceCode?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<FilterRange>;
  wardCode?: InputMaybe<Array<Scalars['String']>>;
  waterHeating?: InputMaybe<Scalars['Boolean']>;
  waterPrice?: InputMaybe<FilterRange>;
  wifi?: InputMaybe<Scalars['Boolean']>;
};

export type RoomImage = {
  __typename?: 'RoomImage';
  caption: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  room: Room;
  roomId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type RoomImageInput = {
  caption: Scalars['String'];
  fileUrl: Scalars['String'];
};

export type RoomMutationResponse = IMutationResponse & {
  __typename?: 'RoomMutationResponse';
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  room?: Maybe<Room>;
  success: Scalars['Boolean'];
};

export type RoomOrderByInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  provinceCode?: InputMaybe<Scalars['String']>;
  rate?: InputMaybe<Scalars['String']>;
};

export type RoomRate = {
  __typename?: 'RoomRate';
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  images: Array<RateImage>;
  rate: Scalars['Float'];
  room: Room;
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type UpdateUiInput = {
  address?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  identificationId?: InputMaybe<Scalars['String']>;
  issueDate?: InputMaybe<Scalars['DateTime']>;
  issuedBy?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  address: Scalars['String'];
  avatarUrl: Scalars['String'];
  contracts?: Maybe<Array<Contract>>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  histories?: Maybe<Array<UserHistory>>;
  id: Scalars['ID'];
  identification: Identification;
  identificationId: Scalars['ID'];
  invites?: Maybe<Array<Invite>>;
  phoneNumber: Scalars['String'];
  rates?: Maybe<Array<OwnerRate>>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  wallet: Wallet;
};

export type UserHistory = {
  __typename?: 'UserHistory';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  room: Room;
  type: Scalars['String'];
  user: User;
};

export type UserMutationResponse = IMutationResponse & {
  __typename?: 'UserMutationResponse';
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type UserRegisterInput = {
  address?: InputMaybe<Scalars['String']>;
  avatarUrl: Scalars['String'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  identificationId?: InputMaybe<Scalars['String']>;
  issueDate?: InputMaybe<Scalars['DateTime']>;
  issuedBy?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

export type Wallet = {
  __typename?: 'Wallet';
  availableBalance: Scalars['Float'];
  balance: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  status: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Wards = {
  __typename?: 'Wards';
  administrative_unit_id?: Maybe<Scalars['Int']>;
  code: Scalars['String'];
  code_name?: Maybe<Scalars['String']>;
  district: Districts;
  district_code: Scalars['String'];
  full_name?: Maybe<Scalars['String']>;
  full_name_en?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  name_en: Scalars['String'];
  rooms: Array<Room>;
};

export type OwnerInfoFragment = { __typename?: 'Owner', username: string, id: string, fullName: string, email: string, address: string, avatarUrl: string, wallet: { __typename?: 'Wallet', id: string, availableBalance: number, balance: number }, identification: { __typename?: 'Identification', serial: string, issuedBy: string, issueDate: any } };

export type RoomInfoFragment = { __typename?: 'Room', id: string, title: string, price: number, description: string, rate?: number | null | undefined, size: number, floor: number, maxOccupancy: number, liveWithHost: boolean, petsAllowed: boolean, electricPrice?: number | null | undefined, waterPrice?: number | null | undefined, parking: boolean, parkingFee?: number | null | undefined, waterHeating: boolean, airConditioning: boolean, wifi: boolean, wifiFee?: number | null | undefined, lift: boolean, numberOfFloors: number, available: boolean, address: string, enclosed: boolean, province: { __typename?: 'Provinces', code: string, name: string, full_name?: string | null | undefined }, district: { __typename?: 'Districts', code: string, name: string, full_name?: string | null | undefined }, ward: { __typename?: 'Wards', code: string, name: string, full_name?: string | null | undefined }, owner: { __typename?: 'Owner', id: string, email: string, fullName: string, phoneNumber: string, avatarUrl: string }, images: Array<{ __typename?: 'RoomImage', imageUrl: string, caption: string }> };

export type UserInfoFragment = { __typename?: 'User', username: string, id: string, fullName: string, email: string, address: string, avatarUrl: string, wallet: { __typename?: 'Wallet', id: string, availableBalance: number, balance: number }, identification: { __typename?: 'Identification', serial: string, issuedBy: string, issueDate: any } };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null | undefined, user?: { __typename?: 'User', username: string } | null | undefined } };

export type LoginOwnerMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginOwnerMutation = { __typename?: 'Mutation', loginOwner: { __typename?: 'OwnerMutationResponse', code: number, success: boolean, message?: string | null | undefined, owner?: { __typename?: 'Owner', username: string } | null | undefined } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', username: string, id: string, fullName: string, email: string, address: string, avatarUrl: string, wallet: { __typename?: 'Wallet', id: string, availableBalance: number, balance: number }, identification: { __typename?: 'Identification', serial: string, issuedBy: string, issueDate: any } } | null | undefined };

export type MeOwnerQueryVariables = Exact<{ [key: string]: never; }>;


export type MeOwnerQuery = { __typename?: 'Query', meOwner?: { __typename?: 'Owner', username: string, id: string, fullName: string, email: string, address: string, avatarUrl: string, wallet: { __typename?: 'Wallet', id: string, availableBalance: number, balance: number }, identification: { __typename?: 'Identification', serial: string, issuedBy: string, issueDate: any } } | null | undefined };

export type RoomsQueryVariables = Exact<{
  page: Scalars['Float'];
  limit: Scalars['Float'];
  orderBy?: InputMaybe<RoomOrderByInput>;
  filter?: InputMaybe<RoomFilterInput>;
}>;


export type RoomsQuery = { __typename?: 'Query', rooms: Array<{ __typename?: 'Room', id: string, title: string, price: number, description: string, rate?: number | null | undefined, size: number, floor: number, maxOccupancy: number, liveWithHost: boolean, petsAllowed: boolean, electricPrice?: number | null | undefined, waterPrice?: number | null | undefined, parking: boolean, parkingFee?: number | null | undefined, waterHeating: boolean, airConditioning: boolean, wifi: boolean, wifiFee?: number | null | undefined, lift: boolean, numberOfFloors: number, available: boolean, address: string, enclosed: boolean, province: { __typename?: 'Provinces', code: string, name: string, full_name?: string | null | undefined }, district: { __typename?: 'Districts', code: string, name: string, full_name?: string | null | undefined }, ward: { __typename?: 'Wards', code: string, name: string, full_name?: string | null | undefined }, owner: { __typename?: 'Owner', id: string, email: string, fullName: string, phoneNumber: string, avatarUrl: string }, images: Array<{ __typename?: 'RoomImage', imageUrl: string, caption: string }> }> };

export const OwnerInfoFragmentDoc = gql`
    fragment ownerInfo on Owner {
  username
  id
  fullName
  email
  address
  avatarUrl
  wallet {
    id
    availableBalance
    balance
  }
  identification {
    serial
    issuedBy
    issueDate
  }
}
    `;
export const RoomInfoFragmentDoc = gql`
    fragment roomInfo on Room {
  id
  title
  price
  description
  rate
  size
  floor
  maxOccupancy
  liveWithHost
  petsAllowed
  electricPrice
  waterPrice
  parking
  parkingFee
  waterHeating
  airConditioning
  province {
    code
    name
    full_name
  }
  district {
    code
    name
    full_name
  }
  ward {
    code
    name
    full_name
  }
  wifi
  wifiFee
  lift
  numberOfFloors
  available
  owner {
    id
    email
    fullName
    phoneNumber
    avatarUrl
  }
  images {
    imageUrl
    caption
  }
  address
  enclosed
  province {
    code
  }
}
    `;
export const UserInfoFragmentDoc = gql`
    fragment userInfo on User {
  username
  id
  fullName
  email
  address
  avatarUrl
  wallet {
    id
    availableBalance
    balance
  }
  identification {
    serial
    issuedBy
    issueDate
  }
}
    `;
export const LoginDocument = gql`
    mutation Login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    code
    success
    message
    user {
      username
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LoginOwnerDocument = gql`
    mutation LoginOwner($loginInput: LoginInput!) {
  loginOwner(loginInput: $loginInput) {
    code
    success
    message
    owner {
      username
    }
  }
}
    `;
export type LoginOwnerMutationFn = Apollo.MutationFunction<LoginOwnerMutation, LoginOwnerMutationVariables>;

/**
 * __useLoginOwnerMutation__
 *
 * To run a mutation, you first call `useLoginOwnerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginOwnerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginOwnerMutation, { data, loading, error }] = useLoginOwnerMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginOwnerMutation(baseOptions?: Apollo.MutationHookOptions<LoginOwnerMutation, LoginOwnerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginOwnerMutation, LoginOwnerMutationVariables>(LoginOwnerDocument, options);
      }
export type LoginOwnerMutationHookResult = ReturnType<typeof useLoginOwnerMutation>;
export type LoginOwnerMutationResult = Apollo.MutationResult<LoginOwnerMutation>;
export type LoginOwnerMutationOptions = Apollo.BaseMutationOptions<LoginOwnerMutation, LoginOwnerMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...userInfo
  }
}
    ${UserInfoFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const MeOwnerDocument = gql`
    query MeOwner {
  meOwner {
    ...ownerInfo
  }
}
    ${OwnerInfoFragmentDoc}`;

/**
 * __useMeOwnerQuery__
 *
 * To run a query within a React component, call `useMeOwnerQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeOwnerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeOwnerQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeOwnerQuery(baseOptions?: Apollo.QueryHookOptions<MeOwnerQuery, MeOwnerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeOwnerQuery, MeOwnerQueryVariables>(MeOwnerDocument, options);
      }
export function useMeOwnerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeOwnerQuery, MeOwnerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeOwnerQuery, MeOwnerQueryVariables>(MeOwnerDocument, options);
        }
export type MeOwnerQueryHookResult = ReturnType<typeof useMeOwnerQuery>;
export type MeOwnerLazyQueryHookResult = ReturnType<typeof useMeOwnerLazyQuery>;
export type MeOwnerQueryResult = Apollo.QueryResult<MeOwnerQuery, MeOwnerQueryVariables>;
export const RoomsDocument = gql`
    query Rooms($page: Float!, $limit: Float!, $orderBy: RoomOrderByInput, $filter: RoomFilterInput) {
  rooms(page: $page, limit: $limit, orderBy: $orderBy, filter: $filter) {
    ...roomInfo
  }
}
    ${RoomInfoFragmentDoc}`;

/**
 * __useRoomsQuery__
 *
 * To run a query within a React component, call `useRoomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoomsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoomsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      orderBy: // value for 'orderBy'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useRoomsQuery(baseOptions: Apollo.QueryHookOptions<RoomsQuery, RoomsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RoomsQuery, RoomsQueryVariables>(RoomsDocument, options);
      }
export function useRoomsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RoomsQuery, RoomsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RoomsQuery, RoomsQueryVariables>(RoomsDocument, options);
        }
export type RoomsQueryHookResult = ReturnType<typeof useRoomsQuery>;
export type RoomsLazyQueryHookResult = ReturnType<typeof useRoomsLazyQuery>;
export type RoomsQueryResult = Apollo.QueryResult<RoomsQuery, RoomsQueryVariables>;
