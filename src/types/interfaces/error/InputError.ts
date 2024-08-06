import type { ErrorInputTypes, ErrorTypes, InputErrorCodes } from '../../enums';
import type { IBaseError } from './BaseError';

export interface IInputError extends IBaseError {
	errorCode: InputErrorCodes;
	type: ErrorTypes.Input;
	input: ErrorInputTypes;
}
