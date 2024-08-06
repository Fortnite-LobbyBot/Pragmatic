import type { IGeneralError } from './GeneralError';
import type { IInputError } from './InputError';

export type IError = IInputError | IGeneralError;
