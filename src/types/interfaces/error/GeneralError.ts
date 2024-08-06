import type { ErrorTypes, GeneralErrorCodes } from '../..';
import type { IBaseError } from './BaseError';

export interface IGeneralError extends IBaseError {
	errorCode: GeneralErrorCodes;
	type: ErrorTypes.General;
}
