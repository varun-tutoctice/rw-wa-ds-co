import {SocialProfileType} from "@app/models/member";
import {CountriesCodeEnum} from "@app/models/countries";

export enum ScreenSetEnum {
  IHG_LOGIN = 'IHG-Login'
}

export enum ScreenEnum {
  GIGYA_BR_CONSENT = 'gigya-br-consent'
}

export interface ScreenSetConfig {
  screenSet: ScreenSetEnum;
  startScreen: ScreenEnum,
  containerID: string,
  customLang: {[key: string]: string},
  onAfterScreenLoad(): void,
  onHide(): void,
  onError(): void,
  onBeforeSubmit(): void,
}

export enum GigyaSlice {
  PROFILE = 'profile',
  DATA = 'data',
  PREFERENCES = 'preferences',
}

export enum GigyaExtra {
  ADDRESS = 'address',
  PHONES = 'phones'
}

export interface IAvailableLoginResponse {
  errorCode: number;
  isAvailable?: boolean;
}

export interface IAvailableLoginRequest {
  loginID: string;
  callback(data: IAvailableLoginResponse): void
}

export interface IScreenSetRequest extends ScreenSetConfig {
  lang: string;
}

export interface  IGigyaAccounts {
  isAvailableLoginID(request: IAvailableLoginRequest): void;
  showScreenSet(request: IScreenSetRequest): void;
  setAccountInfo(request: ISetAccountInfoRequest): void
  getAccountInfo(request: IGetAccountInfoRequest): void
}

export interface IGigyaSocialize {
  refreshUI(request: { callback(): void }): void
}

export interface IGigya {
  accounts: IGigyaAccounts;
  socialize: IGigyaSocialize;
}

export interface ISetAccountInfoResponse {
  errorCode: number;
  id: string;
}

export interface IGigyaSocialProfile {
  handle: string;
  type: SocialProfileType
}

export interface IGigyaData {
  hasBRMembership: boolean;
  memberKey: number;
  rcMembershipNumber: string;
  hasPIN: boolean;
  socialProfiles: IGigyaSocialProfile[]
}

export interface IGigyaPhone {
  number: string;
}

export interface IGigyaProfile {
  firstName: string;
  lastName: string;
  address: string;
  birthDay?: number;
  birthMonth?: number;
  city: string;
  country: CountriesCodeEnum;
  email: string;
  phones: IGigyaPhone[];
  state: string;
  zip: string;
}

export interface IGetAccountInfoResponse {
  errorCode: number;
  data: IGigyaData;
  profile: IGigyaProfile;
  isActive: boolean;
  isRegistered: boolean;
  isVerified: boolean;
}

export interface IGetAccountInfoRequest {
  include: string;
  extraProfileFields: string;
  callback(response: IGetAccountInfoResponse): void;
}

export interface ISetAccountInfoRequest extends IGigyaAccount {
  context: string;
  callback(response: ISetAccountInfoResponse): void
}

export interface IGigyaAccount {
  profile: {
    birthDay?: string;
    birthMonth?: string;
    email?: string;
    phones?: [{ number: string }],
    country?: string;
    address?: string;
    state?: string;
    city?: string;
    zip?: string;
  };
  removeLoginEmails?: string;
  // social data pending
}
