import { ErrorInputTypes, ErrorTypes } from '../../types';
import { ErrorCodes, type GeneralErrorCodes, type InputErrorCodes } from '../../types/enums/error/ErrorCodes';
import { errorMap } from '../../types/enums/error/ErrorMap';
import type { IError } from '../../types/interfaces/error/Error';
import type { IErrorResponse } from '../../types/interfaces/error/ErrorResponse';
import type { IParsedError } from '../../types/interfaces/error/ParsedError';

export abstract class ErrorHandler {
	public static getError<T extends ErrorCodes>(error: T): (typeof errorMap)[T] {
		return errorMap[error] ?? errorMap[ErrorCodes.GenericUnknown];
	}

	public static getErrorResponse(errors: ErrorCodes | ErrorCodes[], input?: ErrorInputTypes): IErrorResponse {
		if (Array.isArray(errors)) {
			return {
				type: 'error',
				errors: errors.map((error) => ErrorHandler.parseErrorCode(error, input))
			};
		} else {
			return {
				type: 'error',
				errors: [ErrorHandler.parseErrorCode(errors, input)]
			};
		}
	}
	public static parseErrorResponse(error: any): IParsedError[] | null {
		if (!ErrorHandler.isErrorResponse(error)) return null;

		return error.errors;
	}

	public static isErrorResponse(error?: any): error is IErrorResponse {
		return error?.type === 'error';
	}

	private static parseErrorCode(code: ErrorCodes, input?: ErrorInputTypes): IError {
		const { type, message } = ErrorHandler.getError(code);

		if (type === ErrorTypes.Input) {
			if (input === undefined) {
				throw new Error('Input is required for Input errors');
			}
			return {
				type,
				message,
				errorCode: code as InputErrorCodes,
				input
			};
		} else {
			return {
				type,
				message,
				errorCode: code as GeneralErrorCodes
			};
		}
	}

	public static handleErrors(code: string, error: any): [number, IErrorResponse] {
		switch (code) {
			case 'VALIDATION': {
				return [400, ErrorHandler.getErrorResponse(ErrorCodes.GenericValidationFailed)];
			}

			case 'NOT_FOUND': {
				return [404, ErrorHandler.getErrorResponse(ErrorCodes.GenericNotFound)];
			}

			case 'PARSE': {
				return [400, ErrorHandler.getErrorResponse(ErrorCodes.GenericParseFailed)];
			}

			case 'INTERNAL_SERVER_ERROR': {
				console.error(error);
				return [500, ErrorHandler.getErrorResponse(ErrorCodes.GenericInternalError)];
			}

			default: {
				console.error(error);
				return [500, ErrorHandler.getErrorResponse(ErrorCodes.GenericUnknown)];
			}
		}
	}
}
