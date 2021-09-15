import {LanguagesEnum} from "@app/models/languages";
import {WebCountriesEnum} from "@app/models/countries";

export interface RetryConfig {
  maxRetries: number;
  interval: number;
  timeout: number;
}

export interface DaoConfig {
  apiKey: string;
  url: string;
  config: RetryConfig
}

export interface LocaleConfig {
  country: WebCountriesEnum;
  language: LanguagesEnum;
  localeString: string;
}

export interface AppConfig {
  appName: string,
  brandName: string;
  brandCode: string;
  environment: string,
  appVersion: string,
  baseURL: string,
  country: string;
  language: string;
  locale: LocaleConfig,
  isChinaDomain: boolean,
  global: {
    apiKey: string,
    gigyaApiKey: string,
    ssoCookie: string,
    webTokenCookie: string,
    config: RetryConfig
  },
  messagesResourcePath: {
    url: string
  },
  ratingsAndReviews: {
    BAZAARVOICE_URL: string,
    STAGING_BAZAARVOICE_URL: string,
    hotelReview: {
      submissionUrl: string
    },
    writeReview: {
      path: string,
      parameters: {
        user: string,
        submission: string,
        campaign: string
      }
    }
  },
  membershipBenefits: {
    ambassadorCertificateBook: {
      path: string
    }
  },
  termsAndConditions: {
    path: string
  },
  hotelLocationMap: {
    url: string
  },
  tierLevelAPI: DaoConfig,
  getMemberProfileAPI: DaoConfig,
  memberProfileAPI: DaoConfig,
  memberCommunicationPreferencesAPI: DaoConfig,
  memberCommunicationPreferencesOptInAPI: DaoConfig,
  memberPasswordAPI: DaoConfig,
  memberEmailsAPI: DaoConfig,
  memberPhonesAPI: DaoConfig,
  memberAddressesAPI: DaoConfig,
  memberTravelProfileAPI: DaoConfig,
  memberStatusAPI: DaoConfig,
  memberAccountsAPI: DaoConfig,
  reservationsAPI: DaoConfig,
  paymentOptionsAPI: DaoConfig,
  locationCountriesAPI: DaoConfig,
  locationStatesAPI: DaoConfig,
  languagesRegionsAPI: DaoConfig,
  ratesCategoriesAPI: DaoConfig,
  partnersAlliancesAPI: DaoConfig,
  pointsAPI: DaoConfig,
  validationsEmailsAPI: DaoConfig,
  stayPreferencesAPI: DaoConfig,
  pastStayDAO: DaoConfig,
  stayDAO: DaoConfig,
  stayListDAO: DaoConfig,
  eventDAO: DaoConfig,
  hotelDetailDAO: DaoConfig,
  uiSlotsDAO: DaoConfig,
  resDirectDAO: DaoConfig,
  pointsEstimatorDAO: DaoConfig,
  accountActivityDAO: DaoConfig,
  stayReviewDAO: DaoConfig,
  choiceBenefitDAO: DaoConfig,
  earningDetailsDAO: DaoConfig,
  hertzRedeemDAO: DaoConfig,
  partnerBenefitsHertzDAO: DaoConfig,
  choiceBenefitRedemptionDAO: DaoConfig,
  sendEmailBillDAO: DaoConfig,
  registeredOffersDAO: DaoConfig,
  freeNightsDetailsDAO: DaoConfig,
  cardOrderDAO: DaoConfig,
  associateDAO: DaoConfig,
  membershipBenefitDAO: DaoConfig,
  targetSystemDAO: DaoConfig,
  retrieveResDAO: DaoConfig,
  firmOfferConfirmationDAO: DaoConfig,
  accountSessionDAO: DaoConfig,
  log: {
    url: string,
    thresholdNumber: number,
    thresholdTime: number,
    thresholdLevel: string,
    logLevels: string[],
    maskingWords: string[],
    level: string,
    config: RetryConfig
  },
  resources: {
    urls: {
      stayPreferences: string,
      reservationConfirmation: string,
      changeReservation: string,
      cancelReservation: string,
      viewReservation: string,
      addTripExtras: string
    }
  },
  featureToggle:{
    apiKey: string,
    url: string,
    timeout: number
  },
  serviceVirtualizationEnabled: boolean,
  shtfURL: string,
  passwordStrength : {
    minLength: number,
    characterGroups: number,
    regularExpression: string
  },
  gigyaConfig: {
    maxRetries: number
  }
}

