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
  ownerId: Scalars['String'];
  room: Room;
  roomId: Scalars['String'];
  status: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type ContractMutationResponse = IMutationResponse & {
  __typename?: 'ContractMutationResponse';
  code: Scalars['Float'];
  contract?: Maybe<Contract>;
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type CreateContractInput = {
  additionalAgreements: Scalars['String'];
  contractMonths: Scalars['Float'];
  deposit: Scalars['Float'];
  detailAddress: Scalars['String'];
  leasePrice?: InputMaybe<Scalars['Float']>;
  roomId: Scalars['String'];
  userId: Scalars['String'];
};

export type CreateOwnerRateInput = {
  comment: Scalars['String'];
  ownerId: Scalars['String'];
  rate: Scalars['Float'];
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

export type CreateRoomRateInput = {
  comment: Scalars['String'];
  images: Array<Scalars['String']>;
  rate: Scalars['Float'];
  roomId: Scalars['String'];
};

export type DepositInput = {
  amount: Scalars['Float'];
  id: Scalars['String'];
  referenceId: Scalars['String'];
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

export type InvitationMutationResponse = IMutationResponse & {
  __typename?: 'InvitationMutationResponse';
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  invite?: Maybe<Invite>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type Invite = {
  __typename?: 'Invite';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  owner: Owner;
  ownerId: Scalars['String'];
  room: Room;
  roomId: Scalars['String'];
  status: Scalars['String'];
  timeOfCheck: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type InviteInput = {
  roomId: Scalars['String'];
  timeOfCheck: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type ListContractResponse = {
  __typename?: 'ListContractResponse';
  contracts: Array<Contract>;
  totalPages: Scalars['Float'];
};

export type ListOwnerRateResponse = {
  __typename?: 'ListOwnerRateResponse';
  ownerRates: Array<OwnerRate>;
  totalPages: Scalars['Float'];
};

export type ListRoomRateResponse = {
  __typename?: 'ListRoomRateResponse';
  roomRates: Array<RoomRate>;
  totalPages: Scalars['Float'];
};

export type ListRoomResponse = {
  __typename?: 'ListRoomResponse';
  rooms: Array<Room>;
  totalPages: Scalars['Float'];
};

export type LoginInput = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptContract: ContractMutationResponse;
  acceptInvite: InvitationMutationResponse;
  acceptWithdraw: WalletMutationResponse;
  changePassword: UserMutationResponse;
  changePasswordOwner: OwnerMutationResponse;
  createContract: ContractMutationResponse;
  createOwnerRate: OwnerRateMutationResponse;
  createRoom: RoomMutationResponse;
  createRoomFavourite: RoomFavouriteMutationResponse;
  createRoomRate: RoomRateMutationResponse;
  deleteRoomFavourite: RoomFavouriteMutationResponse;
  deposit: WalletMutationResponse;
  forgotPassword: Scalars['Boolean'];
  forgotPasswordOwner: Scalars['Boolean'];
  invite: InvitationMutationResponse;
  lockWallet: WalletMutationResponse;
  login: UserMutationResponse;
  loginAdmin: AdminMutationResponse;
  loginOwner: OwnerMutationResponse;
  logout: Scalars['Boolean'];
  register: UserMutationResponse;
  registerAdmin: AdminMutationResponse;
  registerOwner: OwnerMutationResponse;
  rejectContract: ContractMutationResponse;
  rejectInvite: InvitationMutationResponse;
  unlockWallet: WalletMutationResponse;
  updateOwner?: Maybe<OwnerMutationResponse>;
  updateOwnerRate: OwnerRateMutationResponse;
  updateRoomRate: RoomRateMutationResponse;
  updateUser?: Maybe<UserMutationResponse>;
  withdraw: WalletMutationResponse;
};


export type MutationAcceptContractArgs = {
  id: Scalars['String'];
};


export type MutationAcceptInviteArgs = {
  inviteId: Scalars['String'];
};


export type MutationAcceptWithdrawArgs = {
  id: Scalars['String'];
  referenceId: Scalars['String'];
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


export type MutationCreateContractArgs = {
  contractInput: CreateContractInput;
};


export type MutationCreateOwnerRateArgs = {
  rateInput: CreateOwnerRateInput;
};


export type MutationCreateRoomArgs = {
  roomInput: CreateRoomInput;
};


export type MutationCreateRoomFavouriteArgs = {
  roomId: Scalars['String'];
};


export type MutationCreateRoomRateArgs = {
  rateInput: CreateRoomRateInput;
};


export type MutationDeleteRoomFavouriteArgs = {
  roomId: Scalars['String'];
};


export type MutationDepositArgs = {
  depositInput: DepositInput;
};


export type MutationForgotPasswordArgs = {
  forgotPasswordInput: ForgotPasswordInput;
};


export type MutationForgotPasswordOwnerArgs = {
  forgotPasswordInput: ForgotPasswordInput;
};


export type MutationInviteArgs = {
  inviteInput: InviteInput;
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


export type MutationRejectContractArgs = {
  id: Scalars['String'];
};


export type MutationRejectInviteArgs = {
  inviteId: Scalars['String'];
};


export type MutationUpdateOwnerArgs = {
  updateOwnerInput: UpdateUiInput;
};


export type MutationUpdateOwnerRateArgs = {
  rateInput: UpdateOwnerRateInput;
};


export type MutationUpdateRoomRateArgs = {
  rateInput: UpdateRoomRateInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUiInput;
};


export type MutationWithdrawArgs = {
  withdrawInput: WithdrawInput;
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
  numberOfRates: Scalars['Float'];
  phoneNumber: Scalars['String'];
  rate?: Maybe<Scalars['Float']>;
  rates?: Maybe<Array<OwnerRate>>;
  rooms?: Maybe<Array<Room>>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  wallet: Wallet;
  walletId: Scalars['String'];
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
  images: Array<RateImage>;
  owner: Owner;
  ownerId: Scalars['String'];
  rate: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type OwnerRateMutationResponse = IMutationResponse & {
  __typename?: 'OwnerRateMutationResponse';
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  ownerRate?: Maybe<OwnerRate>;
  success: Scalars['Boolean'];
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
  contract: ContractMutationResponse;
  countRoomFavourites: Scalars['Float'];
  districts: Array<Districts>;
  districtsOfProvince: Array<Districts>;
  getUsersFavourited?: Maybe<Array<User>>;
  getWallet?: Maybe<Wallet>;
  invitationsToMe?: Maybe<Array<Invite>>;
  isRoomFavourited: Scalars['Boolean'];
  me?: Maybe<User>;
  meAdmin?: Maybe<Admin>;
  meOwner?: Maybe<Owner>;
  myContracts?: Maybe<ListContractResponse>;
  myInvitations?: Maybe<Array<Invite>>;
  ownerRates: ListOwnerRateResponse;
  provinces: Array<Provinces>;
  room?: Maybe<RoomMutationResponse>;
  roomRates: ListRoomRateResponse;
  rooms: ListRoomResponse;
  wards: Array<Wards>;
  wardsOfDistrict: Array<Wards>;
};


export type QueryContractArgs = {
  id: Scalars['String'];
};


export type QueryCountRoomFavouritesArgs = {
  roomId: Scalars['String'];
};


export type QueryDistrictsOfProvinceArgs = {
  provinceCode: Scalars['String'];
};


export type QueryGetUsersFavouritedArgs = {
  roomId: Scalars['String'];
};


export type QueryIsRoomFavouritedArgs = {
  roomId: Scalars['String'];
};


export type QueryMyContractsArgs = {
  limit: Scalars['Float'];
  page: Scalars['Float'];
  status?: InputMaybe<Scalars['String']>;
};


export type QueryOwnerRatesArgs = {
  limit: Scalars['Float'];
  ownerId: Scalars['String'];
  page: Scalars['Float'];
};


export type QueryRoomArgs = {
  id: Scalars['String'];
};


export type QueryRoomRatesArgs = {
  limit: Scalars['Float'];
  page: Scalars['Float'];
  roomId: Scalars['String'];
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
  rateId: Scalars['String'];
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
  numberOfRates: Scalars['Float'];
  owner: Owner;
  ownerId: Scalars['String'];
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
  roomId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type RoomRateMutationResponse = IMutationResponse & {
  __typename?: 'RoomRateMutationResponse';
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  roomRate?: Maybe<RoomRate>;
  success: Scalars['Boolean'];
};

export type Transaction = {
  __typename?: 'Transaction';
  admin?: Maybe<Admin>;
  adminId?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  direction: Scalars['String'];
  id: Scalars['ID'];
  referenceId?: Maybe<Scalars['String']>;
  room?: Maybe<Room>;
  roomId?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  type: Scalars['String'];
  wallet: Wallet;
  walletId: Scalars['String'];
};

export type UpdateOwnerRateInput = {
  comment?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  rate?: InputMaybe<Scalars['Float']>;
};

export type UpdateRoomRateInput = {
  comment?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<Array<Scalars['String']>>;
  rate?: InputMaybe<Scalars['Float']>;
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
  walletId: Scalars['String'];
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
  transactions?: Maybe<Array<Transaction>>;
  updatedAt: Scalars['DateTime'];
};

export type WalletMutationResponse = IMutationResponse & {
  __typename?: 'WalletMutationResponse';
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
  wallet?: Maybe<Wallet>;
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

export type WithdrawInput = {
  accountName: Scalars['String'];
  amount: Scalars['Float'];
  bankName: Scalars['String'];
  id: Scalars['String'];
};

export type OwnerInfoFragment = { __typename?: 'Owner', username: string, id: string, rate?: number | null | undefined, numberOfRates: number, fullName: string, email: string, address: string, avatarUrl: string, wallet: { __typename?: 'Wallet', id: string, availableBalance: number, balance: number }, identification: { __typename?: 'Identification', serial: string, issuedBy: string, issueDate: any } };

export type RoomInfoFragment = { __typename?: 'Room', id: string, title: string, price: number, description: string, rate?: number | null | undefined, numberOfRates: number, size: number, floor: number, maxOccupancy: number, liveWithHost: boolean, petsAllowed: boolean, electricPrice?: number | null | undefined, waterPrice?: number | null | undefined, parking: boolean, parkingFee?: number | null | undefined, waterHeating: boolean, airConditioning: boolean, createdAt: any, wifi: boolean, wifiFee?: number | null | undefined, lift: boolean, numberOfFloors: number, available: boolean, address: string, enclosed: boolean, province: { __typename?: 'Provinces', code: string, name: string, full_name?: string | null | undefined }, district: { __typename?: 'Districts', code: string, name: string, full_name?: string | null | undefined }, ward: { __typename?: 'Wards', code: string, name: string, full_name?: string | null | undefined }, owner: { __typename?: 'Owner', id: string, email: string, fullName: string, phoneNumber: string, avatarUrl: string, rate?: number | null | undefined, numberOfRates: number }, images: Array<{ __typename?: 'RoomImage', imageUrl: string, caption: string }> };

export type UserInfoFragment = { __typename?: 'User', username: string, id: string, fullName: string, email: string, address: string, avatarUrl: string, wallet: { __typename?: 'Wallet', id: string, availableBalance: number, balance: number }, identification: { __typename?: 'Identification', serial: string, issuedBy: string, issueDate: any } };

export type AcceptContractMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type AcceptContractMutation = { __typename?: 'Mutation', acceptContract: { __typename?: 'ContractMutationResponse', code: number, success: boolean, message?: string | null | undefined, contract?: { __typename?: 'Contract', id: string, status: string } | null | undefined, errors?: Array<{ __typename?: 'FieldError', message: string }> | null | undefined } };

export type AcceptInviteMutationVariables = Exact<{
  inviteId: Scalars['String'];
}>;


export type AcceptInviteMutation = { __typename?: 'Mutation', acceptInvite: { __typename?: 'InvitationMutationResponse', code: number, success: boolean, message?: string | null | undefined, invite?: { __typename?: 'Invite', id: string, status: string, timeOfCheck: any, room: { __typename?: 'Room', title: string, address: string, description: string }, owner: { __typename?: 'Owner', fullName: string, phoneNumber: string, email: string, avatarUrl: string } } | null | undefined } };

export type AddRoomToFavouriteMutationVariables = Exact<{
  roomId: Scalars['String'];
}>;


export type AddRoomToFavouriteMutation = { __typename?: 'Mutation', createRoomFavourite: { __typename?: 'RoomFavouriteMutationResponse', code: number, success: boolean, message?: string | null | undefined } };

export type CreateContractMutationVariables = Exact<{
  contractInput: CreateContractInput;
}>;


export type CreateContractMutation = { __typename?: 'Mutation', createContract: { __typename?: 'ContractMutationResponse', code: number, success: boolean, message?: string | null | undefined, contract?: { __typename?: 'Contract', id: string, roomId: string, userId: string } | null | undefined } };

export type CreateOwnerRateMutationVariables = Exact<{
  rateInput: CreateOwnerRateInput;
}>;


export type CreateOwnerRateMutation = { __typename?: 'Mutation', createOwnerRate: { __typename?: 'OwnerRateMutationResponse', code: number, success: boolean, message?: string | null | undefined } };

export type CreateRoomMutationVariables = Exact<{
  roomInput: CreateRoomInput;
}>;


export type CreateRoomMutation = { __typename?: 'Mutation', createRoom: { __typename?: 'RoomMutationResponse', code: number, success: boolean, message?: string | null | undefined } };

export type CreateRoomRateMutationVariables = Exact<{
  rateInput: CreateRoomRateInput;
}>;


export type CreateRoomRateMutation = { __typename?: 'Mutation', createRoomRate: { __typename?: 'RoomRateMutationResponse', code: number, success: boolean, message?: string | null | undefined } };

export type InviteMutationVariables = Exact<{
  inviteInput: InviteInput;
}>;


export type InviteMutation = { __typename?: 'Mutation', invite: { __typename?: 'InvitationMutationResponse', code: number, success: boolean, message?: string | null | undefined, invite?: { __typename?: 'Invite', userId: string, roomId: string, timeOfCheck: any } | null | undefined } };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null | undefined, user?: { __typename?: 'User', username: string, id: string, fullName: string, email: string, address: string, avatarUrl: string, wallet: { __typename?: 'Wallet', id: string, availableBalance: number, balance: number }, identification: { __typename?: 'Identification', serial: string, issuedBy: string, issueDate: any } } | null | undefined } };

export type LoginAdminMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginAdminMutation = { __typename?: 'Mutation', loginAdmin: { __typename?: 'AdminMutationResponse', code: number, success: boolean, message?: string | null | undefined, admin?: { __typename?: 'Admin', id: string, username: string } | null | undefined } };

export type LoginOwnerMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginOwnerMutation = { __typename?: 'Mutation', loginOwner: { __typename?: 'OwnerMutationResponse', code: number, success: boolean, message?: string | null | undefined, owner?: { __typename?: 'Owner', id: string, username: string } | null | undefined } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type OwnerRegisterMutationVariables = Exact<{
  registerInput: OwnerRegisterInput;
}>;


export type OwnerRegisterMutation = { __typename?: 'Mutation', registerOwner: { __typename?: 'OwnerMutationResponse', success: boolean, code: number, message?: string | null | undefined, owner?: { __typename?: 'Owner', username: string } | null | undefined } };

export type RejectContractMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RejectContractMutation = { __typename?: 'Mutation', rejectContract: { __typename?: 'ContractMutationResponse', code: number, success: boolean, message?: string | null | undefined, contract?: { __typename?: 'Contract', id: string, status: string } | null | undefined } };

export type RejectInviteMutationVariables = Exact<{
  inviteId: Scalars['String'];
}>;


export type RejectInviteMutation = { __typename?: 'Mutation', rejectInvite: { __typename?: 'InvitationMutationResponse', code: number, success: boolean, message?: string | null | undefined, invite?: { __typename?: 'Invite', id: string, status: string, timeOfCheck: any, room: { __typename?: 'Room', title: string, address: string, description: string }, owner: { __typename?: 'Owner', fullName: string, phoneNumber: string, email: string, avatarUrl: string } } | null | undefined } };

export type RemoveRoomFromFavouritesMutationVariables = Exact<{
  roomId: Scalars['String'];
}>;


export type RemoveRoomFromFavouritesMutation = { __typename?: 'Mutation', deleteRoomFavourite: { __typename?: 'RoomFavouriteMutationResponse', code: number, success: boolean, message?: string | null | undefined } };

export type UpdateOwnerRateMutationVariables = Exact<{
  rateInput: UpdateOwnerRateInput;
}>;


export type UpdateOwnerRateMutation = { __typename?: 'Mutation', updateOwnerRate: { __typename?: 'OwnerRateMutationResponse', code: number, success: boolean, message?: string | null | undefined } };

export type UpdateRoomRateMutationVariables = Exact<{
  rateInput: UpdateRoomRateInput;
}>;


export type UpdateRoomRateMutation = { __typename?: 'Mutation', updateRoomRate: { __typename?: 'RoomRateMutationResponse', code: number, success: boolean, message?: string | null | undefined } };

export type UpdateUserMutationVariables = Exact<{
  updateUserInput: UpdateUiInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'UserMutationResponse', code: number, message?: string | null | undefined, user?: { __typename?: 'User', username: string, id: string, fullName: string, email: string, address: string, avatarUrl: string, wallet: { __typename?: 'Wallet', id: string, availableBalance: number, balance: number }, identification: { __typename?: 'Identification', serial: string, issuedBy: string, issueDate: any } } | null | undefined } | null | undefined };

export type UserRegisterMutationVariables = Exact<{
  registerInput: UserRegisterInput;
}>;


export type UserRegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserMutationResponse', success: boolean, code: number, message?: string | null | undefined, user?: { __typename?: 'User', id: string, username: string } | null | undefined } };

export type CheckRoomFavouritedQueryVariables = Exact<{
  roomId: Scalars['String'];
}>;


export type CheckRoomFavouritedQuery = { __typename?: 'Query', isRoomFavourited: boolean };

export type ContractDetailQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ContractDetailQuery = { __typename?: 'Query', contract: { __typename?: 'ContractMutationResponse', code: number, success: boolean, message?: string | null | undefined, contract?: { __typename?: 'Contract', id: string, contractFee: number, contractDuration: any, leasePrice: number, deposit: number, address: string, additionalAgreements: string, status: string, createdAt: any, room: { __typename?: 'Room', id: string, title: string, price: number, description: string, rate?: number | null | undefined, size: number, floor: number, maxOccupancy: number, liveWithHost: boolean, petsAllowed: boolean, electricPrice?: number | null | undefined, waterPrice?: number | null | undefined, parking: boolean, parkingFee?: number | null | undefined, waterHeating: boolean, airConditioning: boolean, createdAt: any, wifi: boolean, wifiFee?: number | null | undefined, lift: boolean, numberOfFloors: number, available: boolean, address: string, enclosed: boolean, province: { __typename?: 'Provinces', code: string, name: string, full_name?: string | null | undefined }, district: { __typename?: 'Districts', code: string, name: string, full_name?: string | null | undefined }, ward: { __typename?: 'Wards', code: string, name: string, full_name?: string | null | undefined }, images: Array<{ __typename?: 'RoomImage', imageUrl: string, caption: string }> }, user: { __typename?: 'User', id: string, fullName: string, avatarUrl: string, identification: { __typename?: 'Identification', serial: string, issuedBy: string, issueDate: any } }, owner: { __typename?: 'Owner', id: string, fullName: string, avatarUrl: string, identification: { __typename?: 'Identification', serial: string, issuedBy: string, issueDate: any } } } | null | undefined } };

export type GetMyFavouritesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyFavouritesQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, roomFavourites?: Array<{ __typename?: 'RoomFavourite', room: { __typename?: 'Room', id: string, title: string, address: string, price: number, size: number, description: string, rate?: number | null | undefined, owner: { __typename?: 'Owner', id: string, fullName: string, avatarUrl: string }, district: { __typename?: 'Districts', code: string, full_name?: string | null | undefined }, province: { __typename?: 'Provinces', code: string, full_name?: string | null | undefined }, images: Array<{ __typename?: 'RoomImage', imageUrl: string }> } }> | null | undefined } | null | undefined };

export type GetUsersFavouritedQueryVariables = Exact<{
  roomId: Scalars['String'];
}>;


export type GetUsersFavouritedQuery = { __typename?: 'Query', getUsersFavourited?: Array<{ __typename?: 'User', id: string, fullName: string, avatarUrl: string, identification: { __typename?: 'Identification', serial: string, issuedBy: string, issueDate: any } }> | null | undefined };

export type InvitationsToMeQueryVariables = Exact<{ [key: string]: never; }>;


export type InvitationsToMeQuery = { __typename?: 'Query', invitationsToMe?: Array<{ __typename?: 'Invite', id: string, status: string, timeOfCheck: any, room: { __typename?: 'Room', title: string, address: string, description: string }, owner: { __typename?: 'Owner', fullName: string, phoneNumber: string, email: string, avatarUrl: string } }> | null | undefined };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', username: string, id: string, fullName: string, email: string, address: string, avatarUrl: string, wallet: { __typename?: 'Wallet', id: string, availableBalance: number, balance: number }, identification: { __typename?: 'Identification', serial: string, issuedBy: string, issueDate: any } } | null | undefined };

export type MeAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type MeAdminQuery = { __typename?: 'Query', meAdmin?: { __typename?: 'Admin', id: string, username: string, email: string, fullName: string } | null | undefined };

export type MeOwnerQueryVariables = Exact<{ [key: string]: never; }>;


export type MeOwnerQuery = { __typename?: 'Query', meOwner?: { __typename?: 'Owner', username: string, id: string, rate?: number | null | undefined, numberOfRates: number, fullName: string, email: string, address: string, avatarUrl: string, wallet: { __typename?: 'Wallet', id: string, availableBalance: number, balance: number }, identification: { __typename?: 'Identification', serial: string, issuedBy: string, issueDate: any } } | null | undefined };

export type MyContractsQueryVariables = Exact<{
  page: Scalars['Float'];
  limit: Scalars['Float'];
  status?: InputMaybe<Scalars['String']>;
}>;


export type MyContractsQuery = { __typename?: 'Query', myContracts?: { __typename?: 'ListContractResponse', totalPages: number, contracts: Array<{ __typename?: 'Contract', id: string, contractFee: number, contractDuration: any, leasePrice: number, room: { __typename?: 'Room', id: string, title: string, address: string }, user: { __typename?: 'User', id: string, fullName: string, avatarUrl: string } }> } | null | undefined };

export type MyInvitationsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyInvitationsQuery = { __typename?: 'Query', myInvitations?: Array<{ __typename?: 'Invite', id: string, status: string, timeOfCheck: any, user: { __typename?: 'User', fullName: string, email: string, phoneNumber: string, address: string, avatarUrl: string }, room: { __typename?: 'Room', title: string, address: string, description: string, rate?: number | null | undefined } }> | null | undefined };

export type OwnerRatesQueryVariables = Exact<{
  ownerId: Scalars['String'];
  page: Scalars['Float'];
  limit: Scalars['Float'];
}>;


export type OwnerRatesQuery = { __typename?: 'Query', ownerRates: { __typename?: 'ListOwnerRateResponse', totalPages: number, ownerRates: Array<{ __typename?: 'OwnerRate', id: string, rate: number, comment: string, createdAt: any, updatedAt: any, user: { __typename?: 'User', id: string, fullName: string, avatarUrl: string } }> } };

export type ProvincesQueryVariables = Exact<{ [key: string]: never; }>;


export type ProvincesQuery = { __typename?: 'Query', provinces: Array<{ __typename?: 'Provinces', full_name?: string | null | undefined, code: string, name: string, districts: Array<{ __typename?: 'Districts', code: string, full_name?: string | null | undefined, name: string, wards: Array<{ __typename?: 'Wards', code: string, full_name?: string | null | undefined, name: string }> }> }> };

export type RoomQueryVariables = Exact<{
  roomId: Scalars['String'];
}>;


export type RoomQuery = { __typename?: 'Query', room?: { __typename?: 'RoomMutationResponse', code: number, success: boolean, message?: string | null | undefined, room?: { __typename?: 'Room', id: string, title: string, price: number, description: string, rate?: number | null | undefined, numberOfRates: number, size: number, floor: number, maxOccupancy: number, liveWithHost: boolean, petsAllowed: boolean, electricPrice?: number | null | undefined, waterPrice?: number | null | undefined, parking: boolean, parkingFee?: number | null | undefined, waterHeating: boolean, airConditioning: boolean, createdAt: any, wifi: boolean, wifiFee?: number | null | undefined, lift: boolean, numberOfFloors: number, available: boolean, address: string, enclosed: boolean, rates: Array<{ __typename?: 'RoomRate', id: string, comment: string, rate: number, createdAt: any, updatedAt: any, user: { __typename?: 'User', id: string, fullName: string, avatarUrl: string }, images: Array<{ __typename?: 'RateImage', imageUrl: string }> }>, province: { __typename?: 'Provinces', code: string, name: string, full_name?: string | null | undefined }, district: { __typename?: 'Districts', code: string, name: string, full_name?: string | null | undefined }, ward: { __typename?: 'Wards', code: string, name: string, full_name?: string | null | undefined }, owner: { __typename?: 'Owner', id: string, email: string, fullName: string, phoneNumber: string, avatarUrl: string, rate?: number | null | undefined, numberOfRates: number }, images: Array<{ __typename?: 'RoomImage', imageUrl: string, caption: string }> } | null | undefined } | null | undefined };

export type RoomRatesQueryVariables = Exact<{
  roomId: Scalars['String'];
  limit: Scalars['Float'];
  page: Scalars['Float'];
}>;


export type RoomRatesQuery = { __typename?: 'Query', roomRates: { __typename?: 'ListRoomRateResponse', totalPages: number, roomRates: Array<{ __typename?: 'RoomRate', id: string, rate: number, comment: string, createdAt: any, updatedAt: any, user: { __typename?: 'User', id: string, fullName: string, avatarUrl: string }, images: Array<{ __typename?: 'RateImage', imageUrl: string }> }> } };

export type RoomsQueryVariables = Exact<{
  page: Scalars['Float'];
  limit: Scalars['Float'];
  orderBy?: InputMaybe<RoomOrderByInput>;
  filter?: InputMaybe<RoomFilterInput>;
}>;


export type RoomsQuery = { __typename?: 'Query', rooms: { __typename?: 'ListRoomResponse', totalPages: number, rooms: Array<{ __typename?: 'Room', id: string, title: string, price: number, description: string, rate?: number | null | undefined, numberOfRates: number, size: number, floor: number, maxOccupancy: number, liveWithHost: boolean, petsAllowed: boolean, electricPrice?: number | null | undefined, waterPrice?: number | null | undefined, parking: boolean, parkingFee?: number | null | undefined, waterHeating: boolean, airConditioning: boolean, createdAt: any, wifi: boolean, wifiFee?: number | null | undefined, lift: boolean, numberOfFloors: number, available: boolean, address: string, enclosed: boolean, province: { __typename?: 'Provinces', code: string, name: string, full_name?: string | null | undefined }, district: { __typename?: 'Districts', code: string, name: string, full_name?: string | null | undefined }, ward: { __typename?: 'Wards', code: string, name: string, full_name?: string | null | undefined }, owner: { __typename?: 'Owner', id: string, email: string, fullName: string, phoneNumber: string, avatarUrl: string, rate?: number | null | undefined, numberOfRates: number }, images: Array<{ __typename?: 'RoomImage', imageUrl: string, caption: string }> }> } };

export const OwnerInfoFragmentDoc = gql`
    fragment ownerInfo on Owner {
  username
  id
  rate
  numberOfRates
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
  numberOfRates
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
  createdAt
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
    rate
    numberOfRates
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
export const AcceptContractDocument = gql`
    mutation AcceptContract($id: String!) {
  acceptContract(id: $id) {
    code
    success
    message
    contract {
      id
      status
    }
    errors {
      message
    }
  }
}
    `;
export type AcceptContractMutationFn = Apollo.MutationFunction<AcceptContractMutation, AcceptContractMutationVariables>;

/**
 * __useAcceptContractMutation__
 *
 * To run a mutation, you first call `useAcceptContractMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptContractMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptContractMutation, { data, loading, error }] = useAcceptContractMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAcceptContractMutation(baseOptions?: Apollo.MutationHookOptions<AcceptContractMutation, AcceptContractMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AcceptContractMutation, AcceptContractMutationVariables>(AcceptContractDocument, options);
      }
export type AcceptContractMutationHookResult = ReturnType<typeof useAcceptContractMutation>;
export type AcceptContractMutationResult = Apollo.MutationResult<AcceptContractMutation>;
export type AcceptContractMutationOptions = Apollo.BaseMutationOptions<AcceptContractMutation, AcceptContractMutationVariables>;
export const AcceptInviteDocument = gql`
    mutation AcceptInvite($inviteId: String!) {
  acceptInvite(inviteId: $inviteId) {
    code
    success
    message
    invite {
      id
      room {
        title
        address
        description
      }
      owner {
        fullName
        phoneNumber
        email
        avatarUrl
      }
      status
      timeOfCheck
    }
  }
}
    `;
export type AcceptInviteMutationFn = Apollo.MutationFunction<AcceptInviteMutation, AcceptInviteMutationVariables>;

/**
 * __useAcceptInviteMutation__
 *
 * To run a mutation, you first call `useAcceptInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptInviteMutation, { data, loading, error }] = useAcceptInviteMutation({
 *   variables: {
 *      inviteId: // value for 'inviteId'
 *   },
 * });
 */
export function useAcceptInviteMutation(baseOptions?: Apollo.MutationHookOptions<AcceptInviteMutation, AcceptInviteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AcceptInviteMutation, AcceptInviteMutationVariables>(AcceptInviteDocument, options);
      }
export type AcceptInviteMutationHookResult = ReturnType<typeof useAcceptInviteMutation>;
export type AcceptInviteMutationResult = Apollo.MutationResult<AcceptInviteMutation>;
export type AcceptInviteMutationOptions = Apollo.BaseMutationOptions<AcceptInviteMutation, AcceptInviteMutationVariables>;
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
export const CreateContractDocument = gql`
    mutation CreateContract($contractInput: CreateContractInput!) {
  createContract(contractInput: $contractInput) {
    code
    success
    message
    contract {
      id
      roomId
      userId
    }
  }
}
    `;
export type CreateContractMutationFn = Apollo.MutationFunction<CreateContractMutation, CreateContractMutationVariables>;

/**
 * __useCreateContractMutation__
 *
 * To run a mutation, you first call `useCreateContractMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateContractMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createContractMutation, { data, loading, error }] = useCreateContractMutation({
 *   variables: {
 *      contractInput: // value for 'contractInput'
 *   },
 * });
 */
export function useCreateContractMutation(baseOptions?: Apollo.MutationHookOptions<CreateContractMutation, CreateContractMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateContractMutation, CreateContractMutationVariables>(CreateContractDocument, options);
      }
export type CreateContractMutationHookResult = ReturnType<typeof useCreateContractMutation>;
export type CreateContractMutationResult = Apollo.MutationResult<CreateContractMutation>;
export type CreateContractMutationOptions = Apollo.BaseMutationOptions<CreateContractMutation, CreateContractMutationVariables>;
export const CreateOwnerRateDocument = gql`
    mutation CreateOwnerRate($rateInput: CreateOwnerRateInput!) {
  createOwnerRate(rateInput: $rateInput) {
    code
    success
    message
  }
}
    `;
export type CreateOwnerRateMutationFn = Apollo.MutationFunction<CreateOwnerRateMutation, CreateOwnerRateMutationVariables>;

/**
 * __useCreateOwnerRateMutation__
 *
 * To run a mutation, you first call `useCreateOwnerRateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOwnerRateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOwnerRateMutation, { data, loading, error }] = useCreateOwnerRateMutation({
 *   variables: {
 *      rateInput: // value for 'rateInput'
 *   },
 * });
 */
export function useCreateOwnerRateMutation(baseOptions?: Apollo.MutationHookOptions<CreateOwnerRateMutation, CreateOwnerRateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOwnerRateMutation, CreateOwnerRateMutationVariables>(CreateOwnerRateDocument, options);
      }
export type CreateOwnerRateMutationHookResult = ReturnType<typeof useCreateOwnerRateMutation>;
export type CreateOwnerRateMutationResult = Apollo.MutationResult<CreateOwnerRateMutation>;
export type CreateOwnerRateMutationOptions = Apollo.BaseMutationOptions<CreateOwnerRateMutation, CreateOwnerRateMutationVariables>;
export const CreateRoomDocument = gql`
    mutation CreateRoom($roomInput: CreateRoomInput!) {
  createRoom(roomInput: $roomInput) {
    code
    success
    message
  }
}
    `;
export type CreateRoomMutationFn = Apollo.MutationFunction<CreateRoomMutation, CreateRoomMutationVariables>;

/**
 * __useCreateRoomMutation__
 *
 * To run a mutation, you first call `useCreateRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRoomMutation, { data, loading, error }] = useCreateRoomMutation({
 *   variables: {
 *      roomInput: // value for 'roomInput'
 *   },
 * });
 */
export function useCreateRoomMutation(baseOptions?: Apollo.MutationHookOptions<CreateRoomMutation, CreateRoomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRoomMutation, CreateRoomMutationVariables>(CreateRoomDocument, options);
      }
export type CreateRoomMutationHookResult = ReturnType<typeof useCreateRoomMutation>;
export type CreateRoomMutationResult = Apollo.MutationResult<CreateRoomMutation>;
export type CreateRoomMutationOptions = Apollo.BaseMutationOptions<CreateRoomMutation, CreateRoomMutationVariables>;
export const CreateRoomRateDocument = gql`
    mutation CreateRoomRate($rateInput: CreateRoomRateInput!) {
  createRoomRate(rateInput: $rateInput) {
    code
    success
    message
  }
}
    `;
export type CreateRoomRateMutationFn = Apollo.MutationFunction<CreateRoomRateMutation, CreateRoomRateMutationVariables>;

/**
 * __useCreateRoomRateMutation__
 *
 * To run a mutation, you first call `useCreateRoomRateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRoomRateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRoomRateMutation, { data, loading, error }] = useCreateRoomRateMutation({
 *   variables: {
 *      rateInput: // value for 'rateInput'
 *   },
 * });
 */
export function useCreateRoomRateMutation(baseOptions?: Apollo.MutationHookOptions<CreateRoomRateMutation, CreateRoomRateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRoomRateMutation, CreateRoomRateMutationVariables>(CreateRoomRateDocument, options);
      }
export type CreateRoomRateMutationHookResult = ReturnType<typeof useCreateRoomRateMutation>;
export type CreateRoomRateMutationResult = Apollo.MutationResult<CreateRoomRateMutation>;
export type CreateRoomRateMutationOptions = Apollo.BaseMutationOptions<CreateRoomRateMutation, CreateRoomRateMutationVariables>;
export const InviteDocument = gql`
    mutation Invite($inviteInput: InviteInput!) {
  invite(inviteInput: $inviteInput) {
    code
    success
    message
    invite {
      userId
      roomId
      timeOfCheck
    }
  }
}
    `;
export type InviteMutationFn = Apollo.MutationFunction<InviteMutation, InviteMutationVariables>;

/**
 * __useInviteMutation__
 *
 * To run a mutation, you first call `useInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inviteMutation, { data, loading, error }] = useInviteMutation({
 *   variables: {
 *      inviteInput: // value for 'inviteInput'
 *   },
 * });
 */
export function useInviteMutation(baseOptions?: Apollo.MutationHookOptions<InviteMutation, InviteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InviteMutation, InviteMutationVariables>(InviteDocument, options);
      }
export type InviteMutationHookResult = ReturnType<typeof useInviteMutation>;
export type InviteMutationResult = Apollo.MutationResult<InviteMutation>;
export type InviteMutationOptions = Apollo.BaseMutationOptions<InviteMutation, InviteMutationVariables>;
export const LoginDocument = gql`
    mutation Login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    code
    success
    message
    user {
      ...userInfo
    }
  }
}
    ${UserInfoFragmentDoc}`;
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
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
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
export const RejectContractDocument = gql`
    mutation RejectContract($id: String!) {
  rejectContract(id: $id) {
    code
    success
    contract {
      id
      status
    }
    message
  }
}
    `;
export type RejectContractMutationFn = Apollo.MutationFunction<RejectContractMutation, RejectContractMutationVariables>;

/**
 * __useRejectContractMutation__
 *
 * To run a mutation, you first call `useRejectContractMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectContractMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectContractMutation, { data, loading, error }] = useRejectContractMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRejectContractMutation(baseOptions?: Apollo.MutationHookOptions<RejectContractMutation, RejectContractMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RejectContractMutation, RejectContractMutationVariables>(RejectContractDocument, options);
      }
export type RejectContractMutationHookResult = ReturnType<typeof useRejectContractMutation>;
export type RejectContractMutationResult = Apollo.MutationResult<RejectContractMutation>;
export type RejectContractMutationOptions = Apollo.BaseMutationOptions<RejectContractMutation, RejectContractMutationVariables>;
export const RejectInviteDocument = gql`
    mutation RejectInvite($inviteId: String!) {
  rejectInvite(inviteId: $inviteId) {
    code
    success
    message
    invite {
      id
      room {
        title
        address
        description
      }
      owner {
        fullName
        phoneNumber
        email
        avatarUrl
      }
      status
      timeOfCheck
    }
  }
}
    `;
export type RejectInviteMutationFn = Apollo.MutationFunction<RejectInviteMutation, RejectInviteMutationVariables>;

/**
 * __useRejectInviteMutation__
 *
 * To run a mutation, you first call `useRejectInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectInviteMutation, { data, loading, error }] = useRejectInviteMutation({
 *   variables: {
 *      inviteId: // value for 'inviteId'
 *   },
 * });
 */
export function useRejectInviteMutation(baseOptions?: Apollo.MutationHookOptions<RejectInviteMutation, RejectInviteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RejectInviteMutation, RejectInviteMutationVariables>(RejectInviteDocument, options);
      }
export type RejectInviteMutationHookResult = ReturnType<typeof useRejectInviteMutation>;
export type RejectInviteMutationResult = Apollo.MutationResult<RejectInviteMutation>;
export type RejectInviteMutationOptions = Apollo.BaseMutationOptions<RejectInviteMutation, RejectInviteMutationVariables>;
export const RemoveRoomFromFavouritesDocument = gql`
    mutation RemoveRoomFromFavourites($roomId: String!) {
  deleteRoomFavourite(roomId: $roomId) {
    code
    success
    message
  }
}
    `;
export type RemoveRoomFromFavouritesMutationFn = Apollo.MutationFunction<RemoveRoomFromFavouritesMutation, RemoveRoomFromFavouritesMutationVariables>;

/**
 * __useRemoveRoomFromFavouritesMutation__
 *
 * To run a mutation, you first call `useRemoveRoomFromFavouritesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveRoomFromFavouritesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeRoomFromFavouritesMutation, { data, loading, error }] = useRemoveRoomFromFavouritesMutation({
 *   variables: {
 *      roomId: // value for 'roomId'
 *   },
 * });
 */
export function useRemoveRoomFromFavouritesMutation(baseOptions?: Apollo.MutationHookOptions<RemoveRoomFromFavouritesMutation, RemoveRoomFromFavouritesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveRoomFromFavouritesMutation, RemoveRoomFromFavouritesMutationVariables>(RemoveRoomFromFavouritesDocument, options);
      }
export type RemoveRoomFromFavouritesMutationHookResult = ReturnType<typeof useRemoveRoomFromFavouritesMutation>;
export type RemoveRoomFromFavouritesMutationResult = Apollo.MutationResult<RemoveRoomFromFavouritesMutation>;
export type RemoveRoomFromFavouritesMutationOptions = Apollo.BaseMutationOptions<RemoveRoomFromFavouritesMutation, RemoveRoomFromFavouritesMutationVariables>;
export const UpdateOwnerRateDocument = gql`
    mutation UpdateOwnerRate($rateInput: UpdateOwnerRateInput!) {
  updateOwnerRate(rateInput: $rateInput) {
    code
    success
    message
  }
}
    `;
export type UpdateOwnerRateMutationFn = Apollo.MutationFunction<UpdateOwnerRateMutation, UpdateOwnerRateMutationVariables>;

/**
 * __useUpdateOwnerRateMutation__
 *
 * To run a mutation, you first call `useUpdateOwnerRateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOwnerRateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOwnerRateMutation, { data, loading, error }] = useUpdateOwnerRateMutation({
 *   variables: {
 *      rateInput: // value for 'rateInput'
 *   },
 * });
 */
export function useUpdateOwnerRateMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOwnerRateMutation, UpdateOwnerRateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOwnerRateMutation, UpdateOwnerRateMutationVariables>(UpdateOwnerRateDocument, options);
      }
export type UpdateOwnerRateMutationHookResult = ReturnType<typeof useUpdateOwnerRateMutation>;
export type UpdateOwnerRateMutationResult = Apollo.MutationResult<UpdateOwnerRateMutation>;
export type UpdateOwnerRateMutationOptions = Apollo.BaseMutationOptions<UpdateOwnerRateMutation, UpdateOwnerRateMutationVariables>;
export const UpdateRoomRateDocument = gql`
    mutation UpdateRoomRate($rateInput: UpdateRoomRateInput!) {
  updateRoomRate(rateInput: $rateInput) {
    code
    success
    message
  }
}
    `;
export type UpdateRoomRateMutationFn = Apollo.MutationFunction<UpdateRoomRateMutation, UpdateRoomRateMutationVariables>;

/**
 * __useUpdateRoomRateMutation__
 *
 * To run a mutation, you first call `useUpdateRoomRateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRoomRateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRoomRateMutation, { data, loading, error }] = useUpdateRoomRateMutation({
 *   variables: {
 *      rateInput: // value for 'rateInput'
 *   },
 * });
 */
export function useUpdateRoomRateMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRoomRateMutation, UpdateRoomRateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRoomRateMutation, UpdateRoomRateMutationVariables>(UpdateRoomRateDocument, options);
      }
export type UpdateRoomRateMutationHookResult = ReturnType<typeof useUpdateRoomRateMutation>;
export type UpdateRoomRateMutationResult = Apollo.MutationResult<UpdateRoomRateMutation>;
export type UpdateRoomRateMutationOptions = Apollo.BaseMutationOptions<UpdateRoomRateMutation, UpdateRoomRateMutationVariables>;
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
export const CheckRoomFavouritedDocument = gql`
    query CheckRoomFavourited($roomId: String!) {
  isRoomFavourited(roomId: $roomId)
}
    `;

/**
 * __useCheckRoomFavouritedQuery__
 *
 * To run a query within a React component, call `useCheckRoomFavouritedQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckRoomFavouritedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckRoomFavouritedQuery({
 *   variables: {
 *      roomId: // value for 'roomId'
 *   },
 * });
 */
export function useCheckRoomFavouritedQuery(baseOptions: Apollo.QueryHookOptions<CheckRoomFavouritedQuery, CheckRoomFavouritedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckRoomFavouritedQuery, CheckRoomFavouritedQueryVariables>(CheckRoomFavouritedDocument, options);
      }
export function useCheckRoomFavouritedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckRoomFavouritedQuery, CheckRoomFavouritedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckRoomFavouritedQuery, CheckRoomFavouritedQueryVariables>(CheckRoomFavouritedDocument, options);
        }
export type CheckRoomFavouritedQueryHookResult = ReturnType<typeof useCheckRoomFavouritedQuery>;
export type CheckRoomFavouritedLazyQueryHookResult = ReturnType<typeof useCheckRoomFavouritedLazyQuery>;
export type CheckRoomFavouritedQueryResult = Apollo.QueryResult<CheckRoomFavouritedQuery, CheckRoomFavouritedQueryVariables>;
export const ContractDetailDocument = gql`
    query ContractDetail($id: String!) {
  contract(id: $id) {
    code
    success
    message
    contract {
      id
      room {
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
        createdAt
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
      contractFee
      contractDuration
      leasePrice
      user {
        id
        fullName
        avatarUrl
        identification {
          serial
          issuedBy
          issueDate
        }
      }
      owner {
        id
        fullName
        avatarUrl
        identification {
          serial
          issuedBy
          issueDate
        }
      }
      deposit
      address
      additionalAgreements
      status
      createdAt
    }
  }
}
    `;

/**
 * __useContractDetailQuery__
 *
 * To run a query within a React component, call `useContractDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useContractDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContractDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useContractDetailQuery(baseOptions: Apollo.QueryHookOptions<ContractDetailQuery, ContractDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContractDetailQuery, ContractDetailQueryVariables>(ContractDetailDocument, options);
      }
export function useContractDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContractDetailQuery, ContractDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContractDetailQuery, ContractDetailQueryVariables>(ContractDetailDocument, options);
        }
export type ContractDetailQueryHookResult = ReturnType<typeof useContractDetailQuery>;
export type ContractDetailLazyQueryHookResult = ReturnType<typeof useContractDetailLazyQuery>;
export type ContractDetailQueryResult = Apollo.QueryResult<ContractDetailQuery, ContractDetailQueryVariables>;
export const GetMyFavouritesDocument = gql`
    query getMyFavourites {
  me {
    id
    roomFavourites {
      room {
        id
        title
        address
        price
        size
        description
        rate
        owner {
          id
          fullName
          avatarUrl
        }
        district {
          code
          full_name
        }
        province {
          code
          full_name
        }
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
export const GetUsersFavouritedDocument = gql`
    query GetUsersFavourited($roomId: String!) {
  getUsersFavourited(roomId: $roomId) {
    id
    fullName
    avatarUrl
    identification {
      serial
      issuedBy
      issueDate
    }
  }
}
    `;

/**
 * __useGetUsersFavouritedQuery__
 *
 * To run a query within a React component, call `useGetUsersFavouritedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersFavouritedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersFavouritedQuery({
 *   variables: {
 *      roomId: // value for 'roomId'
 *   },
 * });
 */
export function useGetUsersFavouritedQuery(baseOptions: Apollo.QueryHookOptions<GetUsersFavouritedQuery, GetUsersFavouritedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersFavouritedQuery, GetUsersFavouritedQueryVariables>(GetUsersFavouritedDocument, options);
      }
export function useGetUsersFavouritedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersFavouritedQuery, GetUsersFavouritedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersFavouritedQuery, GetUsersFavouritedQueryVariables>(GetUsersFavouritedDocument, options);
        }
export type GetUsersFavouritedQueryHookResult = ReturnType<typeof useGetUsersFavouritedQuery>;
export type GetUsersFavouritedLazyQueryHookResult = ReturnType<typeof useGetUsersFavouritedLazyQuery>;
export type GetUsersFavouritedQueryResult = Apollo.QueryResult<GetUsersFavouritedQuery, GetUsersFavouritedQueryVariables>;
export const InvitationsToMeDocument = gql`
    query InvitationsToMe {
  invitationsToMe {
    id
    room {
      title
      address
      description
    }
    owner {
      fullName
      phoneNumber
      email
      avatarUrl
    }
    status
    timeOfCheck
  }
}
    `;

/**
 * __useInvitationsToMeQuery__
 *
 * To run a query within a React component, call `useInvitationsToMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvitationsToMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvitationsToMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useInvitationsToMeQuery(baseOptions?: Apollo.QueryHookOptions<InvitationsToMeQuery, InvitationsToMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InvitationsToMeQuery, InvitationsToMeQueryVariables>(InvitationsToMeDocument, options);
      }
export function useInvitationsToMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InvitationsToMeQuery, InvitationsToMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InvitationsToMeQuery, InvitationsToMeQueryVariables>(InvitationsToMeDocument, options);
        }
export type InvitationsToMeQueryHookResult = ReturnType<typeof useInvitationsToMeQuery>;
export type InvitationsToMeLazyQueryHookResult = ReturnType<typeof useInvitationsToMeLazyQuery>;
export type InvitationsToMeQueryResult = Apollo.QueryResult<InvitationsToMeQuery, InvitationsToMeQueryVariables>;
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
export const MyContractsDocument = gql`
    query MyContracts($page: Float!, $limit: Float!, $status: String) {
  myContracts(limit: $limit, page: $page, status: $status) {
    totalPages
    contracts {
      id
      room {
        id
        title
        address
      }
      contractFee
      contractDuration
      leasePrice
      user {
        id
        fullName
        avatarUrl
      }
    }
  }
}
    `;

/**
 * __useMyContractsQuery__
 *
 * To run a query within a React component, call `useMyContractsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyContractsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyContractsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useMyContractsQuery(baseOptions: Apollo.QueryHookOptions<MyContractsQuery, MyContractsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyContractsQuery, MyContractsQueryVariables>(MyContractsDocument, options);
      }
export function useMyContractsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyContractsQuery, MyContractsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyContractsQuery, MyContractsQueryVariables>(MyContractsDocument, options);
        }
export type MyContractsQueryHookResult = ReturnType<typeof useMyContractsQuery>;
export type MyContractsLazyQueryHookResult = ReturnType<typeof useMyContractsLazyQuery>;
export type MyContractsQueryResult = Apollo.QueryResult<MyContractsQuery, MyContractsQueryVariables>;
export const MyInvitationsDocument = gql`
    query MyInvitations {
  myInvitations {
    id
    user {
      fullName
      email
      phoneNumber
      address
      avatarUrl
    }
    room {
      title
      address
      description
      rate
    }
    status
    timeOfCheck
  }
}
    `;

/**
 * __useMyInvitationsQuery__
 *
 * To run a query within a React component, call `useMyInvitationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyInvitationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyInvitationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyInvitationsQuery(baseOptions?: Apollo.QueryHookOptions<MyInvitationsQuery, MyInvitationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyInvitationsQuery, MyInvitationsQueryVariables>(MyInvitationsDocument, options);
      }
export function useMyInvitationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyInvitationsQuery, MyInvitationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyInvitationsQuery, MyInvitationsQueryVariables>(MyInvitationsDocument, options);
        }
export type MyInvitationsQueryHookResult = ReturnType<typeof useMyInvitationsQuery>;
export type MyInvitationsLazyQueryHookResult = ReturnType<typeof useMyInvitationsLazyQuery>;
export type MyInvitationsQueryResult = Apollo.QueryResult<MyInvitationsQuery, MyInvitationsQueryVariables>;
export const OwnerRatesDocument = gql`
    query OwnerRates($ownerId: String!, $page: Float!, $limit: Float!) {
  ownerRates(ownerId: $ownerId, page: $page, limit: $limit) {
    totalPages
    ownerRates {
      id
      rate
      user {
        id
        fullName
        avatarUrl
      }
      comment
      createdAt
      updatedAt
    }
  }
}
    `;

/**
 * __useOwnerRatesQuery__
 *
 * To run a query within a React component, call `useOwnerRatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useOwnerRatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOwnerRatesQuery({
 *   variables: {
 *      ownerId: // value for 'ownerId'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useOwnerRatesQuery(baseOptions: Apollo.QueryHookOptions<OwnerRatesQuery, OwnerRatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OwnerRatesQuery, OwnerRatesQueryVariables>(OwnerRatesDocument, options);
      }
export function useOwnerRatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OwnerRatesQuery, OwnerRatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OwnerRatesQuery, OwnerRatesQueryVariables>(OwnerRatesDocument, options);
        }
export type OwnerRatesQueryHookResult = ReturnType<typeof useOwnerRatesQuery>;
export type OwnerRatesLazyQueryHookResult = ReturnType<typeof useOwnerRatesLazyQuery>;
export type OwnerRatesQueryResult = Apollo.QueryResult<OwnerRatesQuery, OwnerRatesQueryVariables>;
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
      rates {
        id
        comment
        rate
        user {
          id
          fullName
          avatarUrl
        }
        images {
          imageUrl
        }
        createdAt
        updatedAt
      }
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
export const RoomRatesDocument = gql`
    query RoomRates($roomId: String!, $limit: Float!, $page: Float!) {
  roomRates(roomId: $roomId, page: $page, limit: $limit) {
    totalPages
    roomRates {
      id
      rate
      user {
        id
        fullName
        avatarUrl
      }
      comment
      images {
        imageUrl
      }
      createdAt
      updatedAt
    }
  }
}
    `;

/**
 * __useRoomRatesQuery__
 *
 * To run a query within a React component, call `useRoomRatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoomRatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoomRatesQuery({
 *   variables: {
 *      roomId: // value for 'roomId'
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useRoomRatesQuery(baseOptions: Apollo.QueryHookOptions<RoomRatesQuery, RoomRatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RoomRatesQuery, RoomRatesQueryVariables>(RoomRatesDocument, options);
      }
export function useRoomRatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RoomRatesQuery, RoomRatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RoomRatesQuery, RoomRatesQueryVariables>(RoomRatesDocument, options);
        }
export type RoomRatesQueryHookResult = ReturnType<typeof useRoomRatesQuery>;
export type RoomRatesLazyQueryHookResult = ReturnType<typeof useRoomRatesLazyQuery>;
export type RoomRatesQueryResult = Apollo.QueryResult<RoomRatesQuery, RoomRatesQueryVariables>;
export const RoomsDocument = gql`
    query Rooms($page: Float!, $limit: Float!, $orderBy: RoomOrderByInput, $filter: RoomFilterInput) {
  rooms(page: $page, limit: $limit, orderBy: $orderBy, filter: $filter) {
    totalPages
    rooms {
      ...roomInfo
    }
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
