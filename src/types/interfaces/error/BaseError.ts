import type { ErrorCodes, ErrorTypes } from '../../enums';

export interface IBaseError {
	message: string;
	errorCode: ErrorCodes;
	type: ErrorTypes;
}
