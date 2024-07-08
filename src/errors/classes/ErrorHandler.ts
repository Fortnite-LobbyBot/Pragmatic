import type { ErrorCodes } from '../../types/enums/error/ErrorCodes';
import { type errorMap, validatedErrorMap } from '../../types/enums/error/ErrorMap';

export abstract class ErrorHandler {
	public static getError<T extends ErrorCodes>(error: T): (typeof errorMap)[T] {
		return validatedErrorMap[error];
	}
}
