import type { ErrorInputTypes } from '../../enums';
import type { IBaseError } from './BaseError';

export interface IParsedError extends IBaseError {
	input?: ErrorInputTypes;
}
