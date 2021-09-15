import {
  AmbLevelCode,
  CountriesCodeEnum,
  CountryGroupingEnum,
  CreditCard,
  CreditCardTypeEnum,
  EmailFormatEnum,
  ICreditCard,
  IGigyaProfile,
  IMember,
  IMemberAddress,
  IMemberName,
  IMemberPreferredEmail,
  IMemberPreferredPhone,
  IMemberProgram,
  IMemberTravelProfile,
  IRatePreference,
  Member,
  MemberAddress,
  MemberBirth,
  MemberEarningType,
  MemberEmail,
  MemberLevelCode,
  MemberName,
  MemberPhone,
  MemberProgram,
  MemberTravelProfile,
  PhoneTypeEnum,
  ProgramCode,
  ProgramStatusCode,
  ProgramStatusReasonEnum,
  RateCategory,
  SocialProfileType,
  TravelProfileTypeEnum,
  UsageTypeEnum
} from "@app/models";

describe('MemberName', () => {
  it('should have default values, no param', () => {
    const memberName = new MemberName();
    expect(memberName.firstName).toEqual('');
    expect(memberName.lastName).toEqual('');
    expect(memberName.countryCode).toBeNull();
  });

  it('should have default values with params', () => {
    const memberName = new MemberName({
      firstName: 'john',
      lastName: 'doe',
      countryCode: CountriesCodeEnum.MEXICO
    });
    expect(memberName.firstName).toEqual('john');
    expect(memberName.lastName).toEqual('doe');
    expect(memberName.countryCode).toEqual(CountriesCodeEnum.MEXICO);
  });

  it('should have default values with incomplete params', () => {
    const memberName = new MemberName(<IMemberName> {
      firstName: 'john',
      countryCode: CountriesCodeEnum.MEXICO
    });
    expect(memberName.firstName).toEqual('john');
    expect(memberName.lastName).toEqual('');
    expect(memberName.countryCode).toEqual(CountriesCodeEnum.MEXICO);
  });

  it('#mergeGigya should set values', () => {
    const memberName = new MemberName({
      firstName: 'john',
      lastName: 'doe',
      countryCode: CountriesCodeEnum.MEXICO
    });
    memberName.mergeGigya(<IGigyaProfile> {
      firstName: 'JOHN',
      lastName: 'DOE'
    });
    expect(memberName.firstName).toEqual('JOHN');
    expect(memberName.lastName).toEqual('DOE');
    expect(memberName.countryCode).toEqual(CountriesCodeEnum.MEXICO);
  });
});

describe('MemberBirth', () => {
  it('should have default values, no param', () => {
    const memberBirth = new MemberBirth();
    expect(memberBirth.month).toBeNull();
    expect(memberBirth.day).toBeNull();
  });

  it('should have default values with params', () => {
    const memberBirth = new MemberBirth('1986-09-19');
    expect(memberBirth.month).toEqual(9);
    expect(memberBirth.day).toEqual(18);
  });

  it('#mergeGigya should set values', () => {
    const memberBirth = new MemberBirth('1986-09-19');
    memberBirth.mergeGigya(<IGigyaProfile> {
      birthDay: 1,
      birthMonth: 12
    });
    expect(memberBirth.month).toEqual(12);
    expect(memberBirth.day).toEqual(1);
  });

  it('#mergeGigya should set values, incomplete', () => {
    const memberBirth = new MemberBirth('1986-09-19');
    memberBirth.mergeGigya(<IGigyaProfile> {
      birthDay: 1
    });
    expect(memberBirth.month).toEqual(9);
    expect(memberBirth.day).toEqual(18);
  });
});

describe('MemberAddress', () => {
  it('should have default values, no param', () => {
    const memberAddress = new MemberAddress();
    expect(memberAddress.id).toEqual('');
    expect(memberAddress.preferred).toBeFalsy();
    expect(memberAddress.address1).toEqual('');
    expect(memberAddress.address2).toEqual('');
    expect(memberAddress.state).toEqual('');
    expect(memberAddress.city).toEqual('');
    expect(memberAddress.postalCode).toEqual('');
    expect(memberAddress.countryCode).toBeNull();
  });

  it('should have default values with param, address1, address2', () => {
    const memberAddress = new MemberAddress(<IMemberAddress>{
      id: 'abc',
      preferred: true,
      address1: 'address1',
      address2: 'address2',
      region1: 'state',
      locality1: 'city',
      postalCode: 'postalCode',
      countryCode: CountriesCodeEnum.MEXICO
    });
    expect(memberAddress.id).toEqual('abc');
    expect(memberAddress.preferred).toBeTruthy();
    expect(memberAddress.address1).toEqual('address1');
    expect(memberAddress.address2).toEqual('address2');
    expect(memberAddress.state).toEqual('state');
    expect(memberAddress.city).toEqual('city');
    expect(memberAddress.postalCode).toEqual('postalCode');
    expect(memberAddress.countryCode).toEqual(CountriesCodeEnum.MEXICO)
  });

  it('should have default values with param, line1, line2', () => {
    const memberAddress = new MemberAddress(<IMemberAddress>{
      id: 'abc',
      preferred: true,
      line1: 'line1',
      line2: 'line2',
      region1: 'state',
      locality1: 'city',
      postalCode: 'postalCode',
      countryCode: CountriesCodeEnum.MEXICO
    });
    expect(memberAddress.id).toEqual('abc');
    expect(memberAddress.preferred).toBeTruthy();
    expect(memberAddress.address1).toEqual('line1');
    expect(memberAddress.address2).toEqual('line2');
    expect(memberAddress.state).toEqual('state');
    expect(memberAddress.city).toEqual('city');
    expect(memberAddress.postalCode).toEqual('postalCode');
    expect(memberAddress.countryCode).toEqual(CountriesCodeEnum.MEXICO)
  });

  it('#mergeGigya, pass no params', () => {
    const memberAddress = new MemberAddress(<IMemberAddress>{
      id: 'abc',
      preferred: true,
      line1: 'line1',
      line2: 'line2',
      region1: 'state',
      locality1: 'city',
      postalCode: 'postalCode',
      countryCode: CountriesCodeEnum.MEXICO
    });
    memberAddress.mergeGigya();
    expect(memberAddress.id).toEqual('abc');
    expect(memberAddress.preferred).toBeTruthy();
    expect(memberAddress.address1).toEqual('line1');
    expect(memberAddress.address2).toEqual('line2');
    expect(memberAddress.state).toEqual('state');
    expect(memberAddress.city).toEqual('city');
    expect(memberAddress.postalCode).toEqual('postalCode');
    expect(memberAddress.countryCode).toEqual(CountriesCodeEnum.MEXICO)
  });

  it('#mergeGigya, pass params', () => {
    const memberAddress = new MemberAddress(<IMemberAddress>{
      id: 'abc',
      preferred: true,
      line1: 'line1',
      line2: 'line2',
      region1: 'state',
      locality1: 'city',
      postalCode: 'postalCode',
      countryCode: CountriesCodeEnum.MEXICO
    });
    memberAddress.mergeGigya(<IGigyaProfile>{
      address: 'ravinia st100',
      state: 'georgia',
      city: 'atlanta',
      zip: '30346',
      country: CountriesCodeEnum.MEXICO
    });
    expect(memberAddress.id).toEqual('abc');
    expect(memberAddress.preferred).toBeTruthy();
    expect(memberAddress.address1).toEqual('ravinia st100');
    expect(memberAddress.address2).toEqual('line2');
    expect(memberAddress.state).toEqual('georgia');
    expect(memberAddress.city).toEqual('atlanta');
    expect(memberAddress.postalCode).toEqual('30346');
    expect(memberAddress.countryCode).toEqual(CountriesCodeEnum.MEXICO)
  });

  it('#mergeGigya, pass params, multiple addresses', () => {
    const memberAddress = new MemberAddress(<IMemberAddress>{
      id: 'abc',
      preferred: true,
      line1: 'line1',
      line2: 'line2',
      region1: 'state',
      locality1: 'city',
      postalCode: 'postalCode',
      countryCode: CountriesCodeEnum.MEXICO
    });
    memberAddress.mergeGigya(<IGigyaProfile>{
      address: 'ravinia st100@perimeter center',
      state: 'georgia',
      city: 'atlanta',
      zip: '30346',
      country: CountriesCodeEnum.MEXICO
    });
    expect(memberAddress.id).toEqual('abc');
    expect(memberAddress.preferred).toBeTruthy();
    expect(memberAddress.address1).toEqual('ravinia st100');
    expect(memberAddress.address2).toEqual('perimeter center');
    expect(memberAddress.state).toEqual('georgia');
    expect(memberAddress.city).toEqual('atlanta');
    expect(memberAddress.postalCode).toEqual('30346');
    expect(memberAddress.countryCode).toEqual(CountriesCodeEnum.MEXICO)
  });
});

describe('MemberEmail', () => {
  it('should have default values, no param', () => {
    const memberEmail = new MemberEmail();
    expect(memberEmail.id).toBeNull();
    expect(memberEmail.address).toBeNull();
    expect(memberEmail.isPreferred).toBeFalsy();
    expect(memberEmail.usageType).toBeNull();
    expect(memberEmail.format).toBeNull();
  });

  it('should have default values with param', () => {
    const memberEmail = new MemberEmail({
      id: '123',
      address: 'john.doe@ihg.com',
      preferred: true,
      usageType: UsageTypeEnum.HOME,
      format: EmailFormatEnum.HTML
    });
    expect(memberEmail.id).toEqual('123');
    expect(memberEmail.isPreferred).toBeTruthy();
    expect(memberEmail.address).toEqual('john.doe@ihg.com');
    expect(memberEmail.usageType).toEqual(UsageTypeEnum.HOME);
    expect(memberEmail.format).toEqual(EmailFormatEnum.HTML);
  });

  it('should have default values with param, incomplete', () => {
    const memberEmail = new MemberEmail(<IMemberPreferredEmail>{
      id: '123',
      address: 'john.doe@ihg.com',
      format: EmailFormatEnum.HTML
    });
    expect(memberEmail.id).toEqual('123');
    expect(memberEmail.isPreferred).toBeFalsy();
    expect(memberEmail.address).toEqual('john.doe@ihg.com');
    expect(memberEmail.usageType).toBeNull();
    expect(memberEmail.format).toEqual(EmailFormatEnum.HTML);
  });

  it('#mergeGigya, no params', () => {
    const memberEmail = new MemberEmail({
      id: '123',
      address: 'john.doe@ihg.com',
      preferred: true,
      usageType: UsageTypeEnum.HOME,
      format: EmailFormatEnum.HTML
    });
    memberEmail.mergeGigya();
    expect(memberEmail.id).toEqual('123');
    expect(memberEmail.isPreferred).toBeTruthy();
    expect(memberEmail.address).toEqual('john.doe@ihg.com');
    expect(memberEmail.usageType).toEqual(UsageTypeEnum.HOME);
    expect(memberEmail.format).toEqual(EmailFormatEnum.HTML);
  });

  it('#mergeGigya, with params', () => {
    const memberEmail = new MemberEmail({
      id: '123',
      address: 'john.doe@ihg.com',
      preferred: true,
      usageType: UsageTypeEnum.HOME,
      format: EmailFormatEnum.HTML
    });
    memberEmail.mergeGigya(<IGigyaProfile> {
      email: 'other.doe@ihg.com'
    });
    expect(memberEmail.id).toEqual('123');
    expect(memberEmail.isPreferred).toBeTruthy();
    expect(memberEmail.address).toEqual('other.doe@ihg.com');
    expect(memberEmail.usageType).toEqual(UsageTypeEnum.HOME);
    expect(memberEmail.format).toEqual(EmailFormatEnum.HTML);
  });

  it('#mergeGigya, no property', () => {
    const memberEmail = new MemberEmail({
      id: '123',
      address: 'john.doe@ihg.com',
      preferred: true,
      usageType: UsageTypeEnum.HOME,
      format: EmailFormatEnum.HTML
    });
    memberEmail.mergeGigya(<IGigyaProfile> {
    });
    expect(memberEmail.id).toEqual('123');
    expect(memberEmail.isPreferred).toBeTruthy();
    expect(memberEmail.address).toEqual('john.doe@ihg.com');
    expect(memberEmail.usageType).toEqual(UsageTypeEnum.HOME);
    expect(memberEmail.format).toEqual(EmailFormatEnum.HTML);
  });
});

describe('MemberPhone', () => {
  it('should have default values, no param', () => {
    const memberPhone = new MemberPhone();
    expect(memberPhone.fullNumber).toBeNull();
    expect(memberPhone.internationalCallingCode).toBeNull();
    expect(memberPhone.usageType).toBeNull();
    expect(memberPhone.phoneType).toBeNull();
    expect(memberPhone.isSms).toBeFalsy();
  });

  it('should have default values with param', () => {
    const memberPhone = new MemberPhone(<IMemberPreferredPhone>{
      fullNumber: '12345678',
      internationalCallingCode: '1',
      usageType: UsageTypeEnum.HOME,
      phoneType: PhoneTypeEnum.MOBILE,
      isSms: true
    });
    expect(memberPhone.fullNumber).toEqual('12345678');
    expect(memberPhone.internationalCallingCode).toEqual('1')
    expect(memberPhone.usageType).toEqual(UsageTypeEnum.HOME);
    expect(memberPhone.phoneType).toEqual(PhoneTypeEnum.MOBILE);
    expect(memberPhone.isSms).toBeTruthy();
  });

  it('should have default values with param, incomplete', () => {
    const memberPhone = new MemberPhone(<IMemberPreferredPhone>{
      fullNumber: '12345678',
      icc: '2',
      phoneType: PhoneTypeEnum.MOBILE,
      sms: false
    });
    expect(memberPhone.fullNumber).toEqual('12345678');
    expect(memberPhone.internationalCallingCode).toEqual('2');
    expect(memberPhone.usageType).toBeNull();
    expect(memberPhone.phoneType).toEqual(PhoneTypeEnum.MOBILE);
    expect(memberPhone.isSms).toBeFalsy();
  });

  it('#mergeGigya, empty params', () => {
    const memberPhone = new MemberPhone(<IMemberPreferredPhone>{
      fullNumber: '12345678',
      internationalCallingCode: '1',
      usageType: UsageTypeEnum.HOME,
      phoneType: PhoneTypeEnum.MOBILE,
      isSms: true
    });
    memberPhone.mergeGigya();
    expect(memberPhone.fullNumber).toEqual('12345678');
    expect(memberPhone.internationalCallingCode).toEqual('1')
    expect(memberPhone.usageType).toEqual(UsageTypeEnum.HOME);
    expect(memberPhone.phoneType).toEqual(PhoneTypeEnum.MOBILE);
    expect(memberPhone.isSms).toBeTruthy();
  });

  it('#mergeGigya, no empty params', () => {
    const memberPhone = new MemberPhone(<IMemberPreferredPhone>{
      fullNumber: '12345678',
      internationalCallingCode: '1',
      usageType: UsageTypeEnum.HOME,
      phoneType: PhoneTypeEnum.MOBILE,
      isSms: true
    });
    memberPhone.mergeGigya(<IGigyaProfile> {
      phones: [{ number: '+17703372774'}],
      country: CountriesCodeEnum.UNITED_STATES
    });
    expect(memberPhone.fullNumber).toEqual('7703372774');
    expect(memberPhone.internationalCallingCode).toEqual('1')
    expect(memberPhone.usageType).toEqual(UsageTypeEnum.HOME);
    expect(memberPhone.phoneType).toEqual(PhoneTypeEnum.MOBILE);
    expect(memberPhone.isSms).toBeTruthy();
  });

  it('#mergeGigya, invalid number', () => {
    const memberPhone = new MemberPhone(<IMemberPreferredPhone>{
      fullNumber: '12345678',
      internationalCallingCode: '2',
      usageType: UsageTypeEnum.HOME,
      phoneType: PhoneTypeEnum.MOBILE,
      isSms: true
    });
    memberPhone.mergeGigya(<IGigyaProfile> {
      phones: [{ number: 'abc'}],
      country: CountriesCodeEnum.UNITED_STATES
    });
    expect(memberPhone.fullNumber).toEqual('12345678');
    expect(memberPhone.internationalCallingCode).toEqual('2')
    expect(memberPhone.usageType).toEqual(UsageTypeEnum.HOME);
    expect(memberPhone.phoneType).toEqual(PhoneTypeEnum.MOBILE);
    expect(memberPhone.isSms).toBeTruthy();
  });

  it('#mergeGigya, empty phones array', () => {
    const memberPhone = new MemberPhone(<IMemberPreferredPhone>{
      fullNumber: '12345678',
      internationalCallingCode: '2',
      usageType: UsageTypeEnum.HOME,
      phoneType: PhoneTypeEnum.MOBILE,
      isSms: true
    });
    memberPhone.mergeGigya(<IGigyaProfile> {
      phones: [{}],
      country: CountriesCodeEnum.UNITED_STATES
    });
    expect(memberPhone.fullNumber).toEqual('12345678');
    expect(memberPhone.internationalCallingCode).toEqual('2')
    expect(memberPhone.usageType).toEqual(UsageTypeEnum.HOME);
    expect(memberPhone.phoneType).toEqual(PhoneTypeEnum.MOBILE);
    expect(memberPhone.isSms).toBeTruthy();
  });
});

describe('CreditCard', () => {
  it('should have default values, no param', () => {
    const creditCard = new CreditCard();
    expect(creditCard.type).toBeNull();
    expect(creditCard.cardNumber).toBeNull();
    expect(creditCard.expirationMonth).toBeNull();
    expect(creditCard.expirationYear).toBeNull();
    expect(creditCard.billingAddress).toBeDefined();
  });

  it('should have default values with param', () => {
    const creditCard = new CreditCard(<ICreditCard>{
      creditCardType: CreditCardTypeEnum.VISA,
      cardToken: '411111111111111',
      expirationMonth: '12',
      expirationYear: '2099',
      billingAddress: <IMemberAddress> {
        address1: 'address1'
      }
    });
    expect(creditCard.type).toEqual(CreditCardTypeEnum.VISA);
    expect(creditCard.cardNumber).toEqual('411111111111111');
    expect(creditCard.expirationMonth).toEqual('12');
    expect(creditCard.expirationYear).toEqual('2099');
    expect(creditCard.billingAddress.address1).toEqual('address1');
  });

  it('should have default values with param, incomplete', () => {
    const creditCard = new CreditCard(<ICreditCard>{
      creditCardType: CreditCardTypeEnum.VISA,
      cardToken: '411111111111111',
      billingAddress: <IMemberAddress> {
        address1: 'address1'
      }
    });
    expect(creditCard.type).toEqual(CreditCardTypeEnum.VISA);
    expect(creditCard.cardNumber).toEqual('411111111111111');
    expect(creditCard.expirationMonth).toBeNull();
    expect(creditCard.expirationYear).toBeNull();
    expect(creditCard.billingAddress.address1).toEqual('address1');
  });
});

describe('RateCategory', () => {
  it('should have default values, no param', () => {
    const rateCategory = new RateCategory();
    expect(rateCategory.rateCode).toBeNull();
    expect(rateCategory.rateDescription).toBeNull();
  });

  it('should have default values with param', () => {
    const creditCard = new RateCategory(<IRatePreference>{
      rateCode: 'IGCOR',
      rateDescription: 'best flex'
    });
    expect(creditCard.rateCode).toEqual('IGCOR');
    expect(creditCard.rateDescription).toEqual('best flex');
  });

  it('should have default values with param, incomplete', () => {
    const creditCard = new RateCategory(<IRatePreference>{
      rateCode: 'IGCOR'
    });
    expect(creditCard.rateCode).toEqual('IGCOR');
    expect(creditCard.rateDescription).toBeNull();
  });
});

describe('MemberTravelProfile', () => {
  it('should have default values, no param', () => {
    const memberTravelProfile = new MemberTravelProfile();
    expect(memberTravelProfile.id).toBeNull();
    expect(memberTravelProfile.name).toBeNull();
    expect(memberTravelProfile.type).toBeNull();
    expect(memberTravelProfile.isDefault).toBeFalsy();
    expect(memberTravelProfile.corporateId).toBeNull();
    expect(memberTravelProfile.creditCard).toBeDefined();
    expect(memberTravelProfile.ratePreferences).toEqual([]);
  });

  it('should have default values with param', () => {
    const memberTravelProfile = new MemberTravelProfile(<IMemberTravelProfile>{
      id: '123',
      name: 'business rewards',
      type: TravelProfileTypeEnum.BUSINESS_REWARDS,
      default: true,
      corporateAccountRef: '123456',
      creditCard: {
        cardToken: '41111111111'
      },
      ratePreferences: [{
        rateDescription: 'best',
        rateCode: 'IGCOR'
      }]
    });
    expect(memberTravelProfile.id).toEqual('123');
    expect(memberTravelProfile.name).toEqual('business rewards');
    expect(memberTravelProfile.type).toEqual(TravelProfileTypeEnum.BUSINESS_REWARDS);
    expect(memberTravelProfile.isDefault).toBeTruthy();
    expect(memberTravelProfile.corporateId).toEqual('123456');
    expect(memberTravelProfile.creditCard.cardNumber).toEqual('41111111111');
    expect(memberTravelProfile.ratePreferences.length).toEqual(1);
    expect(memberTravelProfile.ratePreferences[0].rateCode).toEqual('IGCOR');
  });

  it('should have default values with param, incomplete', () => {
    const memberTravelProfile = new MemberTravelProfile(<IMemberTravelProfile>{
      id: '123',
      name: 'business rewards',
      type: TravelProfileTypeEnum.BUSINESS_REWARDS,
      default: true,
      creditCard: {
        cardToken: '41111111111'
      },
      ratePreferences: [{
        rateDescription: 'best',
        rateCode: 'IGCOR'
      }]
    });
    expect(memberTravelProfile.id).toEqual('123');
    expect(memberTravelProfile.name).toEqual('business rewards');
    expect(memberTravelProfile.type).toEqual(TravelProfileTypeEnum.BUSINESS_REWARDS);
    expect(memberTravelProfile.isDefault).toBeTruthy();
    expect(memberTravelProfile.corporateId).toBeNull();
    expect(memberTravelProfile.creditCard.cardNumber).toEqual('41111111111');
    expect(memberTravelProfile.ratePreferences.length).toEqual(1);
    expect(memberTravelProfile.ratePreferences[0].rateCode).toEqual('IGCOR');
  });
});

describe('MemberProgram', () => {
  it('should have default values, no param', () => {
    const memberProgram = new MemberProgram();
    expect(memberProgram.memberNumber).toBeNull();
    expect(memberProgram.programCode).toBeNull();
    expect(memberProgram.statusCode).toBeNull();
    expect(memberProgram.levelCode).toBeNull();
    expect(memberProgram.levelDescription).toBeNull();
    expect(memberProgram.currentPointsBalance).toBeNull();
    expect(memberProgram.yearToDateSummary).toBeNull();
    expect(memberProgram.earningType).toBeNull();
    expect(memberProgram.membershipKey).toBeNull();
    expect(memberProgram.isLifetimeLevel).toBeFalsy();
    expect(memberProgram.numberOfEvents).toBeNull();
    expect(memberProgram.statusReason).toBeNull();
    expect(memberProgram.levelExpirationDate).toBeNull();
    expect(memberProgram.membershipExpirationDate).toBeNull();
    expect(memberProgram.currentPointsBalanceExpirationDate).toBeNull();
  });

  it('should have default values with param', () => {
    const memberProgram = new MemberProgram(<IMemberProgram>{
      memberNumber: '12345678',
      programCode: ProgramCode.PRIORITY_CLUB,
      statusCode: ProgramStatusCode.O,
      levelCode: MemberLevelCode.CLUB,
      levelDescription: 'club',
      currentPointsBalance: 1000,
      yearToDateSummary: {
        earnedPoints: 99
      },
      earningType: MemberEarningType.POINTS,
      membershipKey: 999,
      isLifetimeLevel: true,
      numberOfEvents: 10,
      levelExpirationDate: '2000-01-02',
      currentPointsBalanceExpirationDate: '2000-01-03',
      membershipExpirationDate: '2000-01-04',
      statusReason: ProgramStatusReasonEnum.E,
    });
    expect(memberProgram.memberNumber).toEqual('12345678');
    expect(memberProgram.programCode).toEqual(ProgramCode.PRIORITY_CLUB);
    expect(memberProgram.statusCode).toEqual(ProgramStatusCode.O);
    expect(memberProgram.levelCode).toEqual(MemberLevelCode.CLUB);
    expect(memberProgram.levelDescription).toEqual('club');
    expect(memberProgram.currentPointsBalance).toEqual(1000);
    expect(memberProgram.yearToDateSummary?.earnedPoints).toEqual(99);
    expect(memberProgram.earningType).toEqual(MemberEarningType.POINTS);
    expect(memberProgram.membershipKey).toEqual(999);
    expect(memberProgram.isLifetimeLevel).toBeTruthy()
    expect(memberProgram.numberOfEvents).toEqual(10);
    expect(memberProgram.statusReason).toEqual(ProgramStatusReasonEnum.E);
    expect(memberProgram.levelExpirationDate).toEqual('2000-01-02');
    expect(memberProgram.membershipExpirationDate).toEqual('2000-01-04');
    expect(memberProgram.currentPointsBalanceExpirationDate).toEqual('2000-01-03');
  });
});

describe('Member', () => {
  it('should have default values, no param', () => {
    const member = new Member();
    expect(member.memberNumber).toBeNull();
    expect(member.isEUResident).toBeFalsy();
    expect(member.isEmployee).toBeFalsy();
    expect(member.name).toBeDefined();
    expect(member.birth).toBeDefined();
    expect(member.socialProfiles).toEqual([]);
    expect(member.displayName).toEqual('');
    expect(member.address).toBeDefined();
    expect(member.email).toBeDefined();
    expect(member.phone).toBeDefined();
    expect(member.smsPhone).toBeDefined();
    expect(member.programs).toEqual([]);
    expect(member.travelProfiles).toEqual([]);
  });

  it('should have default values with param', () => {
    const member = new Member(<IMember> {
      rewardsClubMemberNumber: '12345678',
      countryGroupings: [CountryGroupingEnum.EU],
      isIHGEmployee: true,
      name: {
        firstName: 'john',
        lastName: 'doe'
      },
      birthDate: '1986-09-19',
      socialProfiles: [{
        handle: 'twitter',
        type: SocialProfileType.TWITTER
      }],
      preferredAddress: {
        address1: 'address1'
      },
      preferredEmail: {
        address: 'john.doe@ihg.com'
      },
      preferredPhone: {
        fullNumber: '1122334455'
      },
      sms: {
        fullNumber: '5544332211'
      },
      programs: [{
        numberOfEvents: 10
      }],
      travelProfiles: [{
        name: 'travelProfile'
      }]
    });
    expect(member.memberNumber).toEqual('12345678');
    expect(member.isEUResident).toBeTruthy();
    expect(member.isEmployee).toBeTruthy();
    expect(member.name.firstName).toEqual('john');
    expect(member.name.lastName).toEqual('doe');
    expect(member.birth.day).toEqual(18);
    expect(member.birth.month).toEqual(9);
    expect(member.socialProfiles.length).toEqual(1);
    expect(member.socialProfiles[0].type).toEqual(SocialProfileType.TWITTER);
    expect(member.address.address1).toEqual('address1');
    expect(member.email.address).toEqual('john.doe@ihg.com');
    expect(member.phone.fullNumber).toEqual('1122334455');
    expect(member.smsPhone.fullNumber).toEqual('5544332211');
    expect(member.programs.length).toEqual(1);
    expect(member.programs[0].numberOfEvents).toEqual(10);
    expect(member.travelProfiles.length).toEqual(1);
    expect(member.travelProfiles[0].name).toEqual('travelProfile');
  });

  it('#hasRewardsClubProgram should return true', function () {
    const member = new Member(<IMember> {
      programs: [{
        programCode: ProgramCode.PRIORITY_CLUB
      }]
    });
    expect(member.hasRewardsClubProgram()).toBeTruthy();
  });

  it('#hasRewardsClubProgram should return false', function () {
    const member = new Member(<IMember> {
      programs: [{
        programCode: ProgramCode.AMBASSADOR
      }]
    });
    expect(member.hasRewardsClubProgram()).toBeFalsy();
  });

  it('#getRewardsClubProgram should return true', function () {
    const iMemberProgram = <IMemberProgram>{
      programCode: ProgramCode.PRIORITY_CLUB
    };
    const memberProgram = new MemberProgram(iMemberProgram);
    const member = new Member(<IMember> {});
    member.programs = [memberProgram];
    expect(member.getRewardsClubProgram()).toEqual(memberProgram);
  });

  it('#hasBusinessRewardsProgram should return true', function () {
    const member = new Member(<IMember> {
      programs: [{
        programCode: ProgramCode.BUSINESS_REWARDS
      }]
    });
    expect(member.hasBusinessRewardsProgram()).toBeTruthy();
  });

  it('#hasBusinessRewardsProgram should return false', function () {
    const member = new Member(<IMember> {
      programs: [{
        programCode: ProgramCode.AMBASSADOR
      }]
    });
    expect(member.hasBusinessRewardsProgram()).toBeFalsy();
  });

  it('#getBusinessRewardsProgram should return true', function () {
    const iMemberProgram = <IMemberProgram>{
      programCode: ProgramCode.BUSINESS_REWARDS
    };
    const memberProgram = new MemberProgram(iMemberProgram);
    const member = new Member(<IMember> {});
    member.programs = [memberProgram];
    expect(member.getBusinessRewardsProgram()).toEqual(memberProgram);
  });

  it('#hasBusinessRewardsPoints should return false', function () {
    const member = new Member(<IMember> {
      programs: [{
        programCode: ProgramCode.AMBASSADOR
      }]
    });
    expect(member.hasBusinessRewardsPoints()).toBeFalsy();
  });

  it('#hasBusinessRewardsPoints should return true', function () {
    const member = new Member(<IMember> {
      programs: [{
        programCode: ProgramCode.BUSINESS_REWARDS,
        yearToDateSummary: {
          earnedPoints: 1000
        }
      }]
    });
    expect(member.hasBusinessRewardsPoints()).toBeTruthy();
  });

  it('#getBusinessRewardsEarnedPoints should return expected value', function () {
    const member = new Member(<IMember> {
      programs: [{
        programCode: ProgramCode.BUSINESS_REWARDS,
        yearToDateSummary: {
          earnedPoints: 1000
        }
      }]
    });
    expect(member.getBusinessRewardsEarnedPoints()).toEqual(1000);
  });

  it('#getBusinessRewardsEarnedPoints should return expected value', function () {
    const member = new Member(<IMember> {
      programs: [{
        programCode: ProgramCode.PRIORITY_CLUB,
        yearToDateSummary: {
          earnedPoints: 1000
        }
      }]
    });
    expect(member.getBusinessRewardsEarnedPoints()).toEqual(0);
  });

  it('#getRCEarnedPoints should return expected value', function () {
    const member = new Member(<IMember> {
      programs: [{
        programCode: ProgramCode.PRIORITY_CLUB,
        yearToDateSummary: {
          earnedPoints: 1000
        }
      }]
    });
    expect(member.getRCEarnedPoints()).toEqual(1000);
  });

  it('#getRCEarnedPoints should return expected value', function () {
    const member = new Member(<IMember> {
      programs: [{
        programCode: ProgramCode.BUSINESS_REWARDS,
        yearToDateSummary: {
          earnedPoints: 1000
        }
      }]
    });
    expect(member.getRCEarnedPoints()).toEqual(0);
  });

  it('#isClubLevel should return true', function () {
    const member = new Member(<IMember> {
      programs: [{
        programCode: ProgramCode.PRIORITY_CLUB,
        levelCode: MemberLevelCode.CLUB
      }]
    });
    expect(member.isClubLevel()).toBeTruthy();
  });

  it('#isClubLevel should return false', function () {
    const member = new Member(<IMember> {
      programs: [{
        programCode: ProgramCode.PRIORITY_CLUB,
        levelCode: MemberLevelCode.GOLD
      }]
    });
    expect(member.isClubLevel()).toBeFalsy();
  });

  it('#isElite should return true', function () {
    const member = new Member(<IMember> {
      programs: [{
        programCode: ProgramCode.PRIORITY_CLUB,
        levelCode: MemberLevelCode.GOLD
      }]
    });
    expect(member.isElite()).toBeTruthy();
  });

  it('#isElite should return false', function () {
    const member = new Member(<IMember> {
      programs: [{
        programCode: ProgramCode.PRIORITY_CLUB,
        levelCode: MemberLevelCode.CLUB
      }]
    });
    expect(member.isElite()).toBeFalsy();
  });

  it('#isAMBToRenew should return true, R reason', function () {
    const member = new Member(<IMember> {
      programs: [{
        programCode: ProgramCode.AMBASSADOR,
        levelCode: MemberLevelCode.CLUB,
        statusReason: ProgramStatusReasonEnum.R,
        statusCode: ProgramStatusCode.O
      }]
    });
    expect(member.isAMBToRenew()).toBeTruthy();
  });

  it('#isAMBToRenew should return true, L reason', function () {
    const member = new Member(<IMember> {
      programs: [{
        programCode: ProgramCode.AMBASSADOR,
        levelCode: MemberLevelCode.CLUB,
        statusReason: ProgramStatusReasonEnum.L,
        statusCode: ProgramStatusCode.O
      }]
    });
    expect(member.isAMBToRenew()).toBeTruthy();
  });

  it('#isAMBToRenew should return false, royal ambassador', function () {
    const member = new Member(<IMember> {
      programs: [{
        programCode: ProgramCode.AMBASSADOR,
        levelCode: AmbLevelCode.ROYAL,
        statusReason: ProgramStatusReasonEnum.L
      }]
    });
    expect(member.isAMBToRenew()).toBeFalsy();
  });

  it('#isLevelExpiring should return true', function () {

    let today = new Date();
    let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(today);
    let month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(today);
    let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(today);

    const iMemberProgram = <IMemberProgram>{
      programCode: ProgramCode.PRIORITY_CLUB,
      levelExpirationDate: `${year}-${month}-${day}`
    };
    const memberProgram = new MemberProgram(iMemberProgram);
    const member = new Member(<IMember> {});
    member.programs = [memberProgram];
    expect(member.hasRewardsClubProgram()).toBeTruthy();
    expect(member.isLevelExpiring()).toBeTruthy();
  });

  it('#isLevelExpiring should return false', function () {

    let today = new Date();
    let hundredDaysInTheFuture = new Date();
    hundredDaysInTheFuture.setDate(today.getDate() + 100)
    let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(hundredDaysInTheFuture);
    let month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(hundredDaysInTheFuture);
    let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(hundredDaysInTheFuture);

    const iMemberProgram = <IMemberProgram>{
      programCode: ProgramCode.PRIORITY_CLUB,
      levelExpirationDate: `${year}-${month}-${day}`
    };
    const memberProgram = new MemberProgram(iMemberProgram);
    const member = new Member(<IMember> {});
    member.programs = [memberProgram];
    expect(member.hasRewardsClubProgram()).toBeTruthy();
    expect(member.isLevelExpiring()).toBeFalsy();
  });

  it('#isRCPointsExpiring should return true', function () {

    let today = new Date();
    let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(today);
    let month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(today);
    let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(today);

    const iMemberProgram = <IMemberProgram>{
      programCode: ProgramCode.PRIORITY_CLUB,
      currentPointsBalanceExpirationDate: `${year}-${month}-${day}`
    };
    const memberProgram = new MemberProgram(iMemberProgram);
    const member = new Member(<IMember> {});
    member.programs = [memberProgram];
    expect(member.hasRewardsClubProgram()).toBeTruthy();
    expect(member.isRCPointsExpiring()).toBeTruthy();
  });

  it('#isRCPointsExpiring should return false', function () {

    let today = new Date();
    let hundredDaysInTheFuture = new Date();
    hundredDaysInTheFuture.setDate(today.getDate() + 100)
    let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(hundredDaysInTheFuture);
    let month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(hundredDaysInTheFuture);
    let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(hundredDaysInTheFuture);

    const iMemberProgram = <IMemberProgram>{
      programCode: ProgramCode.PRIORITY_CLUB,
      currentPointsBalanceExpirationDate: `${year}-${month}-${day}`
    };
    const memberProgram = new MemberProgram(iMemberProgram);
    const member = new Member(<IMember> {});
    member.programs = [memberProgram];
    expect(member.hasRewardsClubProgram()).toBeTruthy();
    expect(member.isRCPointsExpiring()).toBeFalsy();
  });

  it('#hasAmbassadorProgram should return true', function () {
    const member = new Member(<IMember> {
      programs: [{
        programCode: ProgramCode.AMBASSADOR
      }]
    });
    expect(member.hasAmbassadorProgram()).toBeTruthy();
  });

  it('#hasAmbassadorProgram should return false', function () {
    const member = new Member(<IMember> {
      programs: [{
        programCode: ProgramCode.PRIORITY_CLUB
      }]
    });
    expect(member.hasAmbassadorProgram()).toBeFalsy();
  });

  it('#getRewardsClubProgram should return true', function () {
    const iMemberProgram = <IMemberProgram>{
      programCode: ProgramCode.AMBASSADOR
    };
    const memberProgram = new MemberProgram(iMemberProgram);
    const member = new Member(<IMember> {});
    member.programs = [memberProgram];
    expect(member.getAmbassadorProgram()).toEqual(memberProgram);
  });

  it('#isAmbassador should return true', function () {
    const member = new Member(<IMember> {
      programs: [{
        programCode: ProgramCode.AMBASSADOR,
        statusCode: ProgramStatusCode.O
      }]
    });
    expect(member.isAmbassador()).toBeTruthy();
  });

  it('#isAmbassador should return false', function () {
    const member = new Member(<IMember> {
      programs: [{
        programCode: ProgramCode.AMBASSADOR
      }]
    });
    expect(member.isAmbassador()).toBeFalsy();
  });

  it('#isAmbassador should return true', function () {
    const member = new Member(<IMember> {
      programs: [{
        programCode: ProgramCode.AMBASSADOR,
        levelCode: AmbLevelCode.ROYAL,
        statusCode: ProgramStatusCode.O
      }]
    });
    expect(member.isRoyalAmbassador()).toBeTruthy();
  });

  it('#isAmbassador should return true', function () {
    const member = new Member(<IMember> {
      programs: [{
        programCode: ProgramCode.AMBASSADOR,
        statusCode: ProgramStatusCode.O
      }]
    });
    expect(member.isRoyalAmbassador()).toBeFalsy();
  });

  it('#getCurrentPointsBalance should return expected value', function () {
    const member = new Member(<IMember> {
      programs: [{
        programCode: ProgramCode.PRIORITY_CLUB,
        currentPointsBalance: 100
      }]
    });
    expect(member.getCurrentPointsBalance()).toEqual(100);
  });

  it('#getCurrentPointsBalance should default value', function () {
    const member = new Member(<IMember> {});
    expect(member.getCurrentPointsBalance()).toEqual(0);
  });

  it('#getMemberLevelCode should return expected value', function () {
    const member = new Member(<IMember> {
      programs: [{
        programCode: ProgramCode.PRIORITY_CLUB,
        levelCode: MemberLevelCode.GOLD
      }]
    });
    expect(member.getMemberLevelCode()).toEqual(MemberLevelCode.GOLD);
  });

  it('#getMemberLevelCode should return default value', function () {
    const member = new Member(<IMember> {});
    expect(member.getMemberLevelCode()).toEqual(MemberLevelCode.CLUB);
  });
});
