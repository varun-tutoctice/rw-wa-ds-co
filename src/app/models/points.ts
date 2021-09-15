import {IResponse} from "@app/models/service-error";

export interface IPointsResponse extends IResponse {
  href: string
}

export class Points {
  readonly href: string = '';
  constructor(response?: IPointsResponse) {
    if (response) {
      this.href = response.href;
    }
  }
}
