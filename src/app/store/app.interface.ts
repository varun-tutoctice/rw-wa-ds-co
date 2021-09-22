export interface IApp {
  username: string;
  password: string;
  authenticationMessage: string;
}

export interface IAppState {
  choice: Choice;
  vouchers: vouchersApp;
}

export interface AutoSelectionVoucherDefinitionIdsModel {
  
    voucherDefinitionId: string;
    voucherName: string;
  
}

export interface VoucherDetailsModel{
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

export interface CategoryDetailsModel {
    categoryId: string;
    categoryName: string;
    categoryIcon: string;
    categoryChoiceCount: number;
    voucherDetails: VoucherDetailsModel[]
}

export interface Choice {
  benefits: [
    {
      benefitId: string;
      benefitName: string;
      benefitType: string;
      milestoneUnits: string;
      milestoneValue: number;
      choiceSelectionCount: number;
      choiceExpirationDate: object;
      autoSelectionVoucherDefinitionIds: AutoSelectionVoucherDefinitionIdsModel[];
      categoryDetails: CategoryDetailsModel[];
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
