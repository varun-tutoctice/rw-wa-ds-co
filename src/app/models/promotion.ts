import {IResponse} from "@app/models";

export interface IPromotion extends IResponse {
  promoId: string;
  terms: string;
  imageUrl: string;
  desc1: string;
  desc2: string;
  paidResLink: string;
  title: string;
}

export class Promotion implements IPromotion {
  readonly desc1: string;
  readonly desc2: string;
  readonly imageUrl: string;
  readonly paidResLink: string;
  readonly promoId: string;
  readonly terms: string;
  readonly title: string;

  constructor(promotion: IPromotion) {
    this.desc1 = promotion.desc1;
    this.desc2 = promotion.desc2;
    this.imageUrl = promotion.imageUrl;
    this.paidResLink = promotion.paidResLink;
    this.promoId = promotion.promoId;
    this.terms = promotion.terms;
    this.title = promotion.title;
  }
}
