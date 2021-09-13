export interface IApp {
  username: string;
  password: string;
  authenticationMessage: string;
}

export interface IAppState {
  choice: choiceApp;
  vouchers: vouchersApp;
}

export interface autoSelectionVoucherDefinitionIdsModel {
  
    voucherDefinitionId: string;
    voucherName: string;
  
}

export interface voucherDetailsModel{
    voucherDefinitionId: string;
    voucherMaxCount: number;
    voucherImage: string;
    voucherIcon: string;
    voucherName: string;
    shortDescription: string;
    longDescription: string;
    expirationDescription: string;
    restrictions: string;
    displayOrderNumber: number;
}

export interface categoryDetailsModel {
    categoryId: string;
    categoryName: string;
    categoryIcon: string;
    categoryChoiceCount: number;
    voucherDetails: voucherDetailsModel[]
}

export interface choiceApp {
  benefits: [
    {
      benefitId: string;
      benefitName: string;
      benefitType: string;
      milestoneUnits: string;
      milestoneValue: number;
      choiceSelectionCount: number;
      choiceExpirationDate: object;
      autoSelectionVoucherDefinitionIds: autoSelectionVoucherDefinitionIdsModel[];
      categoryDetails: categoryDetailsModel[];
    }
  ];
}

export const initialAppState: IAppState = {
  choice: {benefits: [
    {
      benefitId: '',
      benefitName: '',
      benefitType: '',
      milestoneUnits: '',
      milestoneValue: 0,
      choiceSelectionCount: 0,
      choiceExpirationDate: {},
      autoSelectionVoucherDefinitionIds: [],
      categoryDetails: [],

    }
  ]},
  vouchers: {},
};

export interface vouchersApp {}
