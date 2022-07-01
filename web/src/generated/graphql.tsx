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
  createRoomFavourite: RoomFavouriteMutationResponse;
  deleteRoomFavourite: RoomFavouriteMutationResponse;
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


export type MutationCreateRoomFavouriteArgs = {
  roomId: Scalars['String'];
};


export type MutationDeleteRoomFavouriteArgs = {
  id: Scalars['String'];
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
  countRoomFavourites: Scalars['Float'];
  districts: Array<Districts>;
  districtsOfProvince: Array<Districts>;
  isRoomFavourited: Scalars['Boolean'];
  me?: Maybe<User>;
  meAdmin?: Maybe<Admin>;
  meOwner?: Maybe<Owner>;
  provinces: Array<Provinces>;
  room?: Maybe<RoomMutationResponse>;
  rooms: Array<Room>;
  wards: Array<Wards>;
  wardsOfDistrict: Array<Wards>;
};


export type QueryCountRoomFavouritesArgs = {
  roomId: Scalars['String'];
};


export type QueryDistrictsOfProvinceArgs = {
  provinceCode: Scalars['String'];
};


export type QueryIsRoomFavouritedArgs = {
  roomId: Scalars['String'];
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

export type RoomFavourite = {
  __typename?: 'RoomFavourite';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  room: Room;
  roomId: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type RoomFavouriteMutationResponse = IMutationResponse & {
  __typename?: 'RoomFavouriteMutationResponse';
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  roomFavourite?: Maybe<RoomFavourite>;
  success: Scalars['Boolean'];
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
  roomFavourites?: Maybe<Array<RoomFavourite>>;
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

export type AddRoomToFavouriteMutationVariables = Exact<{
  roomId: Scalars['String'];
}>;


export type AddRoomToFavouriteMutation = { __typename?: 'Mutation', createRoomFavourite: { __typename?: 'RoomFavouriteMutationResponse', code: number, success: boolean, message?: string | null | undefined } };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null | undefined, user?: { __typename?: 'User', username: string } | null | undefined } };

export type LoginAdminMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginAdminMutation = { __typename?: 'Mutation', loginAdmin: { __typename?: 'AdminMutationResponse', code: number, success: boolean, message?: string | null | undefined, admin?: { __typename?: 'Admin', id: string, username: string } | null | undefined } };

export type LoginOwnerMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginOwnerMutation = { __typename?: 'Mutation', loginOwner: { __typename?: 'OwnerMutationResponse', code: number, success: boolean, message?: string | null | undefined, owner?: { __typename?: 'Owner', id: string, username: string } | null | undefined } };

export type OwnerRegisterMutationVariables = Exact<{
  registerInput: OwnerRegisterInput;
}>;


export type OwnerRegisterMutation = { __typename?: 'Mutation', registerOwner: { __typename?: 'OwnerMutationResponse', success: boolean, code: number, message?: string | null | undefined, owner?: { __typename?: 'Owner', username: string } | null | undefined } };

export type UpdateUserMutationVariables = Exact<{
  updateUserInput: UpdateUiInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'UserMutationResponse', code: number, message?: string | null | undefined, user?: { __typename?: 'User', username: string, id: string, fullName: string, email: string, address: string, avatarUrl: string, wallet: { __typename?: 'Wallet', id: string, availableBalance: number, balance: number }, identification: { __typename?: 'Identification', serial: string, issuedBy: string, issueDate: any } } | null | undefined } | null | undefined };

export type UserRegisterMutationVariables = Exact<{
  registerInput: UserRegisterInput;
}>;


export type UserRegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserMutationResponse', success: boolean, code: number, message?: string | null | undefined, user?: { __typename?: 'User', id: string, username: string } | null | undefined } };

export type GetMyFavouritesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyFavouritesQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, roomFavourites?: Array<{ __typename?: 'RoomFavourite', room: { __typename?: 'Room', id: string, title: string, address: string, images: Array<{ __typename?: 'RoomImage', imageUrl: string }> } }> | null | undefined } | null | undefined };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', username: string, id: string, fullName: string, email: string, address: string, avatarUrl: string, wallet: { __typename?: 'Wallet', id: string, availableBalance: number, balance: number }, identification: { __typename?: 'Identification', serial: string, issuedBy: string, issueDate: any } } | null | undefined };

export type MeAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type MeAdminQuery = { __typename?: 'Query', meAdmin?: { __typename?: 'Admin', id: string, username: string, email: string, fullName: string } | null | undefined };

export type MeOwnerQueryVariables = Exact<{ [key: string]: never; }>;


export type MeOwnerQuery = { __typename?: 'Query', meOwner?: { __typename?: 'Owner', username: string, id: string, fullName: string, email: string, address: string, avatarUrl: string, wallet: { __typename?: 'Wallet', id: string, availableBalance: number, balance: number }, identification: { __typename?: 'Identification', serial: string, issuedBy: string, issueDate: any } } | null | undefined };

export type ProvincesQueryVariables = Exact<{ [key: string]: never; }>;


export type ProvincesQuery = { __typename?: 'Query', provinces: Array<{ __typename?: 'Provinces', full_name?: string | null | undefined, code: string, name: string, districts: Array<{ __typename?: 'Districts', code: string, full_name?: string | null | undefined, name: string, wards: Array<{ __typename?: 'Wards', code: string, full_name?: string | null | undefined, name: string }> }> }> };

export type RoomQueryVariables = Exact<{
  roomId: Scalars['String'];
}>;


export type RoomQuery = { __typename?: 'Query', room?: { __typename?: 'RoomMutationResponse', code: number, success: boolean, message?: string | null | undefined, room?: { __typename?: 'Room', id: string, title: string, price: number, description: string, rate?: number | null | undefined, size: number, floor: number, maxOccupancy: number, liveWithHost: boolean, petsAllowed: boolean, electricPrice?: number | null | undefined, waterPrice?: number | null | undefined, parking: boolean, parkingFee?: number | null | undefined, waterHeating: boolean, airConditioning: boolean, wifi: boolean, wifiFee?: number | null | undefined, lift: boolean, numberOfFloors: number, available: boolean, address: string, enclosed: boolean, province: { __typename?: 'Provinces', code: string, name: string, full_name?: string | null | undefined }, district: { __typename?: 'Districts', code: string, name: string, full_name?: string | null | undefined }, ward: { __typename?: 'Wards', code: string, name: string, full_name?: string | null | undefined }, owner: { __typename?: 'Owner', id: string, email: string, fullName: string, phoneNumber: string, avatarUrl: string }, images: Array<{ __typename?: 'RoomImage', imageUrl: string, caption: string }> } | null | undefined } | null | undefined };

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
export const AddRoomToFavouriteDocument = gql`
    mutation AddRoomToFavourite($roomId: String!) {
  createRoomFavourite(roomId: $roomId) {
    code
    success
    message
  }
}
    `;
export type AddRoomToFavouriteMutationFn = Apollo.MutationFunction<AddRoomToFavouriteMutation, AddRoomToFavouriteMutationVariables>;

/**
 * __useAddRoomToFavouriteMutation__
 *
 * To run a mutation, you first call `useAddRoomToFavouriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddRoomToFavouriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addRoomToFavouriteMutation, { data, loading, error }] = useAddRoomToFavouriteMutation({
 *   variables: {
 *      roomId: // value for 'roomId'
 *   },
 * });
 */
export function useAddRoomToFavouriteMutation(baseOptions?: Apollo.MutationHookOptions<AddRoomToFavouriteMutation, AddRoomToFavouriteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddRoomToFavouriteMutation, AddRoomToFavouriteMutationVariables>(AddRoomToFavouriteDocument, options);
      }
export type AddRoomToFavouriteMutationHookResult = ReturnType<typeof useAddRoomToFavouriteMutation>;
export type AddRoomToFavouriteMutationResult = Apollo.MutationResult<AddRoomToFavouriteMutation>;
export type AddRoomToFavouriteMutationOptions = Apollo.BaseMutationOptions<AddRoomToFavouriteMutation, AddRoomToFavouriteMutationVariables>;
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
export const LoginAdminDocument = gql`
    mutation LoginAdmin($loginInput: LoginInput!) {
  loginAdmin(loginInput: $loginInput) {
    code
    success
    message
    admin {
      id
      username
    }
  }
}
    `;
export type LoginAdminMutationFn = Apollo.MutationFunction<LoginAdminMutation, LoginAdminMutationVariables>;

/**
 * __useLoginAdminMutation__
 *
 * To run a mutation, you first call `useLoginAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginAdminMutation, { data, loading, error }] = useLoginAdminMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginAdminMutation(baseOptions?: Apollo.MutationHookOptions<LoginAdminMutation, LoginAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginAdminMutation, LoginAdminMutationVariables>(LoginAdminDocument, options);
      }
export type LoginAdminMutationHookResult = ReturnType<typeof useLoginAdminMutation>;
export type LoginAdminMutationResult = Apollo.MutationResult<LoginAdminMutation>;
export type LoginAdminMutationOptions = Apollo.BaseMutationOptions<LoginAdminMutation, LoginAdminMutationVariables>;
export const LoginOwnerDocument = gql`
    mutation LoginOwner($loginInput: LoginInput!) {
  loginOwner(loginInput: $loginInput) {
    code
    success
    message
    owner {
      id
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
export const OwnerRegisterDocument = gql`
    mutation OwnerRegister($registerInput: OwnerRegisterInput!) {
  registerOwner(registerInput: $registerInput) {
    success
    code
    message
    owner {
      username
    }
  }
}
    `;
export type OwnerRegisterMutationFn = Apollo.MutationFunction<OwnerRegisterMutation, OwnerRegisterMutationVariables>;

/**
 * __useOwnerRegisterMutation__
 *
 * To run a mutation, you first call `useOwnerRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOwnerRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [ownerRegisterMutation, { data, loading, error }] = useOwnerRegisterMutation({
 *   variables: {
 *      registerInput: // value for 'registerInput'
 *   },
 * });
 */
export function useOwnerRegisterMutation(baseOptions?: Apollo.MutationHookOptions<OwnerRegisterMutation, OwnerRegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OwnerRegisterMutation, OwnerRegisterMutationVariables>(OwnerRegisterDocument, options);
      }
export type OwnerRegisterMutationHookResult = ReturnType<typeof useOwnerRegisterMutation>;
export type OwnerRegisterMutationResult = Apollo.MutationResult<OwnerRegisterMutation>;
export type OwnerRegisterMutationOptions = Apollo.BaseMutationOptions<OwnerRegisterMutation, OwnerRegisterMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($updateUserInput: UpdateUIInput!) {
  updateUser(updateUserInput: $updateUserInput) {
    code
    message
    user {
      ...userInfo
    }
  }
}
    ${UserInfoFragmentDoc}`;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      updateUserInput: // value for 'updateUserInput'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UserRegisterDocument = gql`
    mutation UserRegister($registerInput: UserRegisterInput!) {
  register(registerInput: $registerInput) {
    success
    code
    message
    user {
      id
      username
    }
  }
}
    `;
export type UserRegisterMutationFn = Apollo.MutationFunction<UserRegisterMutation, UserRegisterMutationVariables>;

/**
 * __useUserRegisterMutation__
 *
 * To run a mutation, you first call `useUserRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userRegisterMutation, { data, loading, error }] = useUserRegisterMutation({
 *   variables: {
 *      registerInput: // value for 'registerInput'
 *   },
 * });
 */
export function useUserRegisterMutation(baseOptions?: Apollo.MutationHookOptions<UserRegisterMutation, UserRegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserRegisterMutation, UserRegisterMutationVariables>(UserRegisterDocument, options);
      }
export type UserRegisterMutationHookResult = ReturnType<typeof useUserRegisterMutation>;
export type UserRegisterMutationResult = Apollo.MutationResult<UserRegisterMutation>;
export type UserRegisterMutationOptions = Apollo.BaseMutationOptions<UserRegisterMutation, UserRegisterMutationVariables>;
export const GetMyFavouritesDocument = gql`
    query getMyFavourites {
  me {
    id
    roomFavourites {
      room {
        id
        title
        address
        images {
          imageUrl
        }
      }
    }
  }
}
    `;

/**
 * __useGetMyFavouritesQuery__
 *
 * To run a query within a React component, call `useGetMyFavouritesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyFavouritesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyFavouritesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyFavouritesQuery(baseOptions?: Apollo.QueryHookOptions<GetMyFavouritesQuery, GetMyFavouritesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyFavouritesQuery, GetMyFavouritesQueryVariables>(GetMyFavouritesDocument, options);
      }
export function useGetMyFavouritesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyFavouritesQuery, GetMyFavouritesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyFavouritesQuery, GetMyFavouritesQueryVariables>(GetMyFavouritesDocument, options);
        }
export type GetMyFavouritesQueryHookResult = ReturnType<typeof useGetMyFavouritesQuery>;
export type GetMyFavouritesLazyQueryHookResult = ReturnType<typeof useGetMyFavouritesLazyQuery>;
export type GetMyFavouritesQueryResult = Apollo.QueryResult<GetMyFavouritesQuery, GetMyFavouritesQueryVariables>;
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
export const MeAdminDocument = gql`
    query MeAdmin {
  meAdmin {
    id
    username
    email
    fullName
  }
}
    `;

/**
 * __useMeAdminQuery__
 *
 * To run a query within a React component, call `useMeAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeAdminQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeAdminQuery(baseOptions?: Apollo.QueryHookOptions<MeAdminQuery, MeAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeAdminQuery, MeAdminQueryVariables>(MeAdminDocument, options);
      }
export function useMeAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeAdminQuery, MeAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeAdminQuery, MeAdminQueryVariables>(MeAdminDocument, options);
        }
export type MeAdminQueryHookResult = ReturnType<typeof useMeAdminQuery>;
export type MeAdminLazyQueryHookResult = ReturnType<typeof useMeAdminLazyQuery>;
export type MeAdminQueryResult = Apollo.QueryResult<MeAdminQuery, MeAdminQueryVariables>;
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
export const ProvincesDocument = gql`
    query Provinces {
  provinces {
    full_name
    code
    name
    districts {
      code
      full_name
      name
      wards {
        code
        full_name
        name
      }
    }
  }
}
    `;

/**
 * __useProvincesQuery__
 *
 * To run a query within a React component, call `useProvincesQuery` and pass it any options that fit your needs.
 * When your component renders, `useProvincesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProvincesQuery({
 *   variables: {
 *   },
 * });
 */
export function useProvincesQuery(baseOptions?: Apollo.QueryHookOptions<ProvincesQuery, ProvincesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProvincesQuery, ProvincesQueryVariables>(ProvincesDocument, options);
      }
export function useProvincesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProvincesQuery, ProvincesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProvincesQuery, ProvincesQueryVariables>(ProvincesDocument, options);
        }
export type ProvincesQueryHookResult = ReturnType<typeof useProvincesQuery>;
export type ProvincesLazyQueryHookResult = ReturnType<typeof useProvincesLazyQuery>;
export type ProvincesQueryResult = Apollo.QueryResult<ProvincesQuery, ProvincesQueryVariables>;
export const RoomDocument = gql`
    query Room($roomId: String!) {
  room(id: $roomId) {
    code
    success
    message
    room {
      ...roomInfo
    }
  }
}
    ${RoomInfoFragmentDoc}`;

/**
 * __useRoomQuery__
 *
 * To run a query within a React component, call `useRoomQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoomQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoomQuery({
 *   variables: {
 *      roomId: // value for 'roomId'
 *   },
 * });
 */
export function useRoomQuery(baseOptions: Apollo.QueryHookOptions<RoomQuery, RoomQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RoomQuery, RoomQueryVariables>(RoomDocument, options);
      }
export function useRoomLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RoomQuery, RoomQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RoomQuery, RoomQueryVariables>(RoomDocument, options);
        }
export type RoomQueryHookResult = ReturnType<typeof useRoomQuery>;
export type RoomLazyQueryHookResult = ReturnType<typeof useRoomLazyQuery>;
export type RoomQueryResult = Apollo.QueryResult<RoomQuery, RoomQueryVariables>;
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
