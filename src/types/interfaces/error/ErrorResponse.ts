import type { IError } from './Error';

export interface IErrorResponse {
	type: 'error';
	errors: IError[];
}
