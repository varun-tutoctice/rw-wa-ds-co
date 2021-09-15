import {HttpErrorResponse} from "@angular/common/http";

export enum ServiceErrorCodes {
  UNREACHABLE_SERVICE_ERROR_CODE = 0,
  INTERNAL_ERROR = 500,
  TOO_MANY_RETRIES_ERROR = 429,
  UNAUTHORIZED = 401,
  TIMEOUT_SERVICE_ERROR_CODE = -1,
  VALIDATION_ERROR_CODE = -2,
  UNDEFINED_RESPONSE_ERROR_CODE = -2,
  PAYLOAD_RESPONSE_ERROR_CODE = -3,
}

export interface IResponse {
  error?: {
    code: number | null;
  }
}

export const ErrorTypes = {
  SERVICE_ERROR: 'serviceError',
  VALIDATION_ERROR: 'validationError'
};

export interface IError {
  error?: string | null;
  code?: number | null;
  message?: string | null;
  errorType?: string | null;
}

export class ServiceError {
  readonly code: number | null;
  readonly message: string | null;
  readonly errorType: string | null;
  readonly details: string | null = null;

  constructor(serviceError: IError | any, details?: string) {
    this.code = serviceError.code ?? null;
    this.message = serviceError.message ?? null;
    this.errorType = serviceError.errorType ?? ErrorTypes.SERVICE_ERROR;
    this.details = details ?? null;
  }

  public static undefinedError(): ServiceError {
    return new ServiceError({
      message: 'Response Successful: data is undefined',
      code: ServiceErrorCodes.UNDEFINED_RESPONSE_ERROR_CODE
    });
  }

  public static validationError(): ServiceError {
    return new ServiceError({
      message: 'Data from service failed internal validation',
      code: ServiceErrorCodes.VALIDATION_ERROR_CODE
    });
  }

  public static payloadError(): ServiceError {
    return new ServiceError({
      message: 'Payload response return an error',
      code: ServiceErrorCodes.PAYLOAD_RESPONSE_ERROR_CODE
    });
  }
}

export function convertToServiceError(httpErrorResponse: HttpErrorResponse): ServiceError {
  const status = httpErrorResponse.status;
  const errorType = status === ServiceErrorCodes.VALIDATION_ERROR_CODE ? ErrorTypes.VALIDATION_ERROR : ErrorTypes.SERVICE_ERROR;
  const details = httpErrorResponse.statusText;
  return new ServiceError({
    code: httpErrorResponse.status,
    message: httpErrorResponse.message,
    errorType: errorType
  }, details);
}

export function createTimoutServiceError(): ServiceError {
  const msg = 'Timeout error';
  return new ServiceError({
    code: ServiceErrorCodes.TIMEOUT_SERVICE_ERROR_CODE,
    message: msg,
    errorType: ErrorTypes.SERVICE_ERROR
  }, msg);
}
