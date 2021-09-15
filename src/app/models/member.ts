import {CountriesCodeEnum, IGigyaData, IGigyaProfile, IResponse} from "@app/models";
import {diffDate} from "@app/utils/time";

const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

export enum MemberFieldSetEnum {
  TRAVEL_PROFILES = 'travelProfiles',
  SOCIAL_PROFILES = 'socialProfiles',
}

export enum UsageTypeEnum {
  HOME = 'HOME'
}

export enum PhoneTypeEnum {
  MOBILE = 'MOBILE'
}

export interface IMemberName {
  firstName: string;
  lastName: string;
  countryCode: CountriesCodeEnum | undefined;
}

export class MemberName {
  firstName: string = '';
  lastName: string = '';
  countryCode: CountriesCodeEnum | null = null;

  constructor(memberName?: IMemberName) {
    if (memberName) {
      this.firstName = memberName.firstName ?? '';
      this.lastName = memberName.lastName ?? '';
      this.countryCode = memberName.countryCode ?? null;
    }
  }

  mergeGigya(data: IGigyaProfile): void {
    if (data) {
      this.firstName  = data.firstName ?? this.firstName;
      this.lastName  = data.lastName ?? this.lastName;
    }
  }
}

export interface IPreferred {
  id: string;
  preferred: boolean;
  usageType: UsageTypeEnum;
}

export interface IMemberAddress extends IPreferred {
  line1: string;
  line2?: string;
  address1?: string;
  address2?: string;
  locality1: string;
  postalCode: string;
  region1: string;
  countryCode: CountriesCodeEnum
}

export class MemberAddress {
  id: string = '';
  preferred: boolean = false;
  address1: string = ''
  address2: string = ''
  state: string = '';
  city: string = '';
  postalCode: string = '';
  countryCode: CountriesCodeEnum | null = null;

  constructor(memberAddress?: IMemberAddress) {
    if (memberAddress) {
      this.id = memberAddress.id;
      this.preferred = Boolean(memberAddress.preferred);
      this.address1 = (memberAddress.line1 || memberAddress.address1) ?? '';
      this.address2 = (memberAddress.line2 || memberAddress.address2) ?? '';
      this.state = memberAddress.region1 ?? '';
      this.city = memberAddress.locality1 ?? '';
      this.postalCode = memberAddress.postalCode ?? '';
      this.countryCode = memberAddress.countryCode ?? null;
    }
  }

  mergeGigya(profile?: IGigyaProfile): void {
    if (profile) {
      const addresses = profile.address ? profile.address.split('@') : [];
      this.address1 = addresses.length > 0 ? addresses[0] : this.address1;
      this.address2 = addresses.length > 1 ? addresses[1] : this.address2;
      this.state = profile.state ?? this.state;
      this.city = profile.city ?? this.city;
      this.postalCode = profile.zip ?? this.postalCode;
      this.countryCode = profile.country ?? this.countryCode;
    }
  }
}

export enum EmailFormatEnum {
  HTML = 'HTML'
}

export interface IMemberPreferredEmail extends IPreferred {
  address: string;
  format: EmailFormatEnum
}

export class MemberEmail {
  id: string | null = null;
  address: string | null = null;
  isPreferred: boolean = false;
  usageType: UsageTypeEnum | null = null;
  format: EmailFormatEnum | null = null;

  constructor(memberEmail?: IMemberPreferredEmail) {
    if (memberEmail) {
      this.id = memberEmail.id ?? null;
      this.address = memberEmail.address ?? null;
      this.isPreferred = memberEmail.preferred ?? false;
      this.usageType = memberEmail.usageType ?? null;
      this.format = memberEmail.format ?? null;
    }
  }

  mergeGigya(profile?: IGigyaProfile): void {
    if (profile) {
      this.address = profile.email ?? this.address;
    }
  }
}

export interface IMemberPreferredPhone extends IPreferred {
  phoneType: PhoneTypeEnum;
  fullNumber: string;
  sms: boolean;
  isSms?: boolean;
  verified: boolean;
  icc: string;
  internationalCallingCode?: string;
}

export class MemberPhone {
  fullNumber: string | null = null;
  internationalCallingCode: string | null = null;
  usageType: UsageTypeEnum | null = null;
  phoneType: PhoneTypeEnum | null = null;
  isSms: boolean = false;

  constructor(phone?: IMemberPreferredPhone) {
    if (phone) {
      this.fullNumber = phone.fullNumber ?? null;
      this.internationalCallingCode = (phone.icc || phone.internationalCallingCode) ?? null;
      this.usageType = phone.usageType ?? null;
      this.phoneType = phone.phoneType ?? null;
      this.isSms = (phone.sms || phone.isSms) ?? false;
    }
  }

  mergeGigya(profile?: IGigyaProfile): void {
    if (profile && profile?.phones?.length > 0 && profile?.phones[0].number) {
      let badNumber = false;
      let phoneNumber = null;
      let countryCode = null;
      let fullNumber = null;
      try {
        phoneNumber = phoneUtil.parse(profile?.phones[0].number, profile.country);
      } catch (_err) {
        badNumber = true;
      }
      if (!badNumber) {
        if (phoneNumber.hasCountryCode()) {
          countryCode = phoneNumber.getCountryCode().toString();
        }
        fullNumber = phoneNumber.getNationalNumber().toString();
      }
      this.fullNumber = fullNumber ?? this.fullNumber;
      this.internationalCallingCode = countryCode ?? this.internationalCallingCode;
    }
  }
}

export enum TravelProfileTypeEnum {
  BUSINESS_REWARDS = 'BR'
}

export interface IRatePreference {
  rateCode: string;
  rateDescription: string;
}

export enum CreditCardTypeEnum {
  VISA = 'VS'
}

export interface ICreditCard {
  creditCardType: CreditCardTypeEnum;
  cardToken: string;
  expirationMonth: string;
  expirationYear: string;
  billingAddress: IMemberAddress;
}

export class CreditCard {
  type: CreditCardTypeEnum | null = null;
  cardNumber: string | null = null;
  expirationMonth: string | null = null;
  expirationYear: string | null = null;
  billingAddress: MemberAddress = new MemberAddress();

  constructor(creditCard?: ICreditCard) {
    if (creditCard) {
      this.type = creditCard.creditCardType ?? null;
      this.cardNumber = creditCard.cardToken ?? null;
      this.expirationMonth = creditCard.expirationMonth ?? null;
      this.expirationYear = creditCard.expirationYear ?? null;
      this.billingAddress = new MemberAddress(creditCard.billingAddress);
    }
  }
}

export interface IMemberTravelProfile {
  id: string;
  name: string;
  type: TravelProfileTypeEnum;
  default: boolean;
  corporateAccountRef?: string;
  creditCard?: ICreditCard;
  ratePreferences?: IRatePreference[];
}

export class RateCategory {
  rateCode: string | null = null;
  rateDescription: string | null = null;
  constructor(ratePreference?: IRatePreference) {
    if (ratePreference) {
      this.rateCode = ratePreference.rateCode ?? null;
      this.rateDescription = ratePreference.rateDescription ?? null;
    }
  }
}

export class MemberTravelProfile {
  id: string | null = null;
  name: string | null = null;
  type: TravelProfileTypeEnum | null = null;
  isDefault: boolean = false;
  corporateId: string | null = null;
  creditCard = new CreditCard();
  ratePreferences: RateCategory[] = [];

  constructor(travelProfile?: IMemberTravelProfile) {
    if (travelProfile) {
      this.id = travelProfile.id ?? null;
      this.name = travelProfile.name ?? null;
      this.type = travelProfile.type ?? null;
      this.isDefault = travelProfile.default ?? null;
      this.corporateId = travelProfile.corporateAccountRef ?? null;
      this.creditCard = new CreditCard(travelProfile.creditCard);
      this.ratePreferences = (travelProfile.ratePreferences || []).map((r: IRatePreference) => new RateCategory(r))
    }
  }
}

export enum AmbLevelCode {
  ROYAL = 'RAM'
}

export enum ProgramCode {
  PRIORITY_CLUB = 'PC',
  BUSINESS_REWARDS = 'BR',
  AMBASSADOR = 'AMB',
  KARMA = 'KAR'
}

export enum MemberLevelCode {
  CLUB = 'CLUB',
  GOLD = 'GOLD',
  PLATINUM = 'PLTN',
  SPIRE = 'SPRE'
}

export const MEMBER_LEVEL_CODES = [MemberLevelCode.CLUB, MemberLevelCode.GOLD, MemberLevelCode.PLATINUM, MemberLevelCode.SPIRE];

export type MemberLevelCodes = MemberLevelCode | AmbLevelCode;

export enum MemberEarningType {
  MILES = 'MILES',
  POINTS = 'POINTS',
}

export interface IMemberProgramYearToDateSummary {
  rolloverNights?: number;
  rewardNights?: number;
  qualifyingNights?: number;
  earnedPoints: number;
  eliteQualifyingEarnedPoints?: number;
}

export enum ProgramStatusCode {
  O = 'O'
}

export enum ProgramStatusReasonEnum {
  E = 'E',
  L = 'L',
  R = 'R',
}

export interface IMemberProgram {
  memberNumber: string;
  programCode: ProgramCode;
  statusCode: ProgramStatusCode;
  levelCode: MemberLevelCodes;
  levelDescription: string;
  enrollmentDate: string;
  currentPointsBalance?: number;
  yearToDateSummary: IMemberProgramYearToDateSummary;
  earningType: MemberEarningType;
  membershipKey: number;
  isLifetimeLevel?: boolean;
  numberOfEvents?: number;
  levelExpirationDate?: string;
  currentPointsBalanceExpirationDate?: string;
  membershipExpirationDate?: string;
  statusReason?: ProgramStatusReasonEnum;
}

export class MemberProgram {
  memberNumber: string | null = null;
  programCode: ProgramCode | null = null;
  statusCode: ProgramStatusCode | null = null;
  levelCode: MemberLevelCodes | null = null;
  levelDescription: string | null = null;
  currentPointsBalance: number | null = null;
  yearToDateSummary: IMemberProgramYearToDateSummary | null = null;
  earningType: MemberEarningType | null = null;
  membershipKey: number | null = null;
  isLifetimeLevel: boolean = false;
  numberOfEvents: number | null = null;
  statusReason: ProgramStatusReasonEnum | null = null;
  levelExpirationDate: string | null = null;
  membershipExpirationDate: string | null = null;
  currentPointsBalanceExpirationDate: string | null = null;

  constructor(program?: IMemberProgram) {
    if (program) {
      this.memberNumber = program.memberNumber ?? null;
      this.programCode = program.programCode ?? null;
      this.levelCode = program.levelCode ?? null;
      this.earningType = program.earningType ?? null;
      this.statusCode = program.statusCode ?? null;
      this.statusReason = program.statusReason ?? null;
      this.levelDescription = program.levelDescription ?? null;
      this.levelExpirationDate = program.levelExpirationDate ?? null;
      this.membershipExpirationDate = program.membershipExpirationDate ?? null;
      this.currentPointsBalance = program.currentPointsBalance ?? null;
      this.currentPointsBalanceExpirationDate = program.currentPointsBalanceExpirationDate ?? null;
      this.membershipKey = program.membershipKey ?? null;
      this.isLifetimeLevel = program.isLifetimeLevel ?? false;
      this.numberOfEvents = program.numberOfEvents ?? null;
      this.yearToDateSummary = program.yearToDateSummary ?? null;
    }
  }
}

export enum CountryGroupingEnum {
  EU = 'EU',
  GDPR = 'GDPR'
}

export enum SocialProfileType {
  INSTAGRAM= 'INSTAGRAM',
  TWITTER= 'TWITTER'
}

export interface IMemberSocialProfile {
  type: SocialProfileType;
  handle: string;
}

const NINETY_DAYS = 90;

export interface IMember extends IResponse {
  id: string;
  rewardsClubMemberNumber: string;
  name: IMemberName;
  preferredAddress: IMemberAddress
  preferredEmail: IMemberPreferredEmail;
  preferredPhone: IMemberPreferredPhone;
  sms: IMemberPreferredPhone;
  nameOnCard: string;
  travelProfiles: IMemberTravelProfile[];
  programs: IMemberProgram[];
  isIHGEmployee: boolean;
  isPinCreated: boolean;
  countryGroupings: CountryGroupingEnum[];
  birthDate?: string;
  socialProfiles: IMemberSocialProfile[];
}

export class MemberBirth {
  month: number | null = null;
  day: number | null = null;

  constructor(dateString?: string) {
    if (dateString) {
      const date = new Date(dateString);
      this.month = date.getMonth() + 1;
      this.day = date.getDate();
    }
  }

  mergeGigya(data: IGigyaProfile): void {
    this.month = data.birthMonth && data.birthDay ? data.birthMonth : this.month;
    this.day = data.birthMonth && data.birthDay ? data.birthDay : this.day;
  }
}

export class Member {

  memberNumber: string | null = null;
  isEUResident: boolean = false;
  isEmployee: boolean = false;
  name: MemberName = new MemberName();
  birth: MemberBirth = new MemberBirth();
  socialProfiles: IMemberSocialProfile[] = [];
  displayName: string = '';
  address: MemberAddress = new MemberAddress();
  email: MemberEmail = new MemberEmail();
  phone: MemberPhone = new MemberPhone();
  smsPhone: MemberPhone = new MemberPhone();
  programs: MemberProgram[] = [];
  travelProfiles: MemberTravelProfile[] = [];

  constructor(member?: IMember) {
    if (member) {
      this.memberNumber = member.rewardsClubMemberNumber ?? null;
      this.isEUResident = (member.countryGroupings ?? []).includes(CountryGroupingEnum.EU);
      this.isEmployee = member.isIHGEmployee ?? false;
      this.name = new MemberName(member.name);
      this.birth = new MemberBirth(member.birthDate);
      this.socialProfiles = member.socialProfiles;
      this.displayName = `${this.name.firstName} ${this.name.lastName}`;
      this.address = new MemberAddress(member.preferredAddress);
      this.email = new MemberEmail(member.preferredEmail);
      this.phone = new MemberPhone(member.preferredPhone);
      this.smsPhone = new MemberPhone(member.sms);
      this.programs = (member.programs || []).map((p: IMemberProgram) => new MemberProgram(p));
      this.travelProfiles = (member.travelProfiles || []).map((tp: IMemberTravelProfile) => new MemberTravelProfile(tp));
    }
  }

  hasRewardsClubProgram(): boolean {
    return !!this.programs.find((rp: MemberProgram) => rp.programCode === ProgramCode.PRIORITY_CLUB);
  }

  getRewardsClubProgram(): MemberProgram {
    return this.programs.filter((rp: MemberProgram) => rp.programCode === ProgramCode.PRIORITY_CLUB)[0];
  }

  hasAmbassadorProgram(): boolean {
    return !!this.programs.find((rp: MemberProgram) => rp.programCode === ProgramCode.AMBASSADOR);
  }

  hasBusinessRewardsProgram(): boolean {
    return !!this.programs.find((rp: MemberProgram) => rp.programCode === ProgramCode.BUSINESS_REWARDS);
  }

  getBusinessRewardsProgram(): MemberProgram {
    return this.programs.filter((rp: MemberProgram) => rp.programCode === ProgramCode.BUSINESS_REWARDS)[0];
  }

  hasBusinessRewardsPoints(): boolean {
    return this.hasBusinessRewardsProgram() ? this.getBusinessRewardsProgram().yearToDateSummary?.earnedPoints! > 0 : false;
  }

  getBusinessRewardsEarnedPoints(): number {
    return this.hasBusinessRewardsProgram() ? this.getBusinessRewardsProgram().yearToDateSummary?.earnedPoints || 0 : 0;
  }

  getRCEarnedPoints(): number {
    return this.hasRewardsClubProgram() ? this.getRewardsClubProgram().yearToDateSummary?.earnedPoints || 0 : 0;
  }

  getAmbassadorProgram(): MemberProgram {
    return this.programs.filter((rp: MemberProgram) => rp.programCode === ProgramCode.AMBASSADOR)[0];
  }

  isClubLevel(): boolean {
    return this.hasRewardsClubProgram() && this.getRewardsClubProgram().levelCode === MemberLevelCode.CLUB;
  }

  isElite(): boolean {
    return !this.isClubLevel();
  }

  isAmbassador(): boolean {
    if (this.hasAmbassadorProgram()) {
      const ambassadorProgram = this.getAmbassadorProgram();
      return ambassadorProgram.statusCode === ProgramStatusCode.O;
    }
    return  false;
  }

  isRoyalAmbassador(): boolean {
    if (this.hasAmbassadorProgram()) {
      return this.getAmbassadorProgram().levelCode === AmbLevelCode.ROYAL;
    }
    return false;
  }

  isAMBToRenew(): boolean {
    if (this.isAmbassador() && !this.isRoyalAmbassador()) {
      let ambProgram = this.getAmbassadorProgram();
      if (ambProgram) {
        let ambRenewalStatus = ambProgram.statusReason;
        if (ambRenewalStatus) {
          return ambRenewalStatus === ProgramStatusReasonEnum.R || ambRenewalStatus === ProgramStatusReasonEnum.L;
        }
      }
    }
    return false;
  }

  getCurrentPointsBalance(): number {
    if (this.hasRewardsClubProgram()) {
      return this.getRewardsClubProgram().currentPointsBalance || 0;
    }
    return 0;
  }

  getMemberLevelCode(): MemberLevelCodes {
    if (this.hasRewardsClubProgram()) {
      return this.getRewardsClubProgram().levelCode!;
    }
    return MemberLevelCode.CLUB;
  }

  isLevelExpiring(days: number = NINETY_DAYS): boolean {
    let levelToExpire = false;
    if (this.hasRewardsClubProgram()) {
      let rcProgram = this.getRewardsClubProgram();
      let levelExpirationDate = rcProgram.levelExpirationDate;
      if (levelExpirationDate) {
        let difference = diffDate(new Date(), new Date(levelExpirationDate));
        if (difference <= days) {
          levelToExpire = true;
        }
      }
    }
    return levelToExpire;
  };

  isRCPointsExpiring(days: number = NINETY_DAYS): boolean {
    let pointsToExpire = false;
    if (this.hasRewardsClubProgram()) {
      let rcProgram = this.getRewardsClubProgram();
      let pointsExpirationDate = rcProgram.currentPointsBalanceExpirationDate;
      if (pointsExpirationDate) {
        let difference = diffDate(new Date(), new Date(pointsExpirationDate));
        if (difference <= days) {
          pointsToExpire = true;
        }
      }
    }
    return pointsToExpire;
  };

  mergeGigyaData(profile: IGigyaProfile, data: IGigyaData) {
    this.name.mergeGigya(profile);
    this.birth.mergeGigya(profile);
    this.socialProfiles = data?.socialProfiles ? data.socialProfiles : this.socialProfiles;
    this.address.mergeGigya(profile);
    this.email.mergeGigya(profile);
    this.phone.mergeGigya(profile);
  }
}
