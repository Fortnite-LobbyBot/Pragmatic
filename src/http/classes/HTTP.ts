import { ErrorHandler } from '../../errors';
import type { IParsedError } from '../../types';

type RequestOptions = {
	method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
	headers?: Record<string, string>;
	body?: string;
};

export abstract class HTTP {
	public static get<TResponse>(
		service: string,
		endpoint: string,
		options?: Omit<RequestOptions, 'method'>
	): Promise<TResponse | IParsedError[]> {
		return this.fetch(service, endpoint, { ...options, method: 'GET' });
	}

	public static post<TResponse>(
		service: string,
		endpoint: string,
		options?: Omit<RequestOptions, 'method'>
	): Promise<TResponse | IParsedError[]> {
		return this.fetch(service, endpoint, { ...options, method: 'POST' });
	}

	public static put<TResponse>(
		service: string,
		endpoint: string,
		options?: Omit<RequestOptions, 'method'>
	): Promise<TResponse | IParsedError[]> {
		return this.fetch(service, endpoint, { ...options, method: 'PUT' });
	}
	public static patch<TResponse>(
		service: string,
		endpoint: string,
		options?: Omit<RequestOptions, 'method'>
	): Promise<TResponse | IParsedError[]> {
		return this.fetch(service, endpoint, { ...options, method: 'PATCH' });
	}

	public static delete<TResponse>(
		service: string,
		endpoint: string,
		options?: Omit<RequestOptions, 'method'>
	): Promise<TResponse | IParsedError[]> {
		return this.fetch(service, endpoint, { ...options, method: 'DELETE' });
	}

	public static async fetch<TResponse>(
		service: string,
		endpoint: string,
		options: RequestOptions
	): Promise<TResponse | IParsedError[]> {
		const requestOptions = {
			...options,
			headers: options.headers
		};

		const response = await fetch(service + endpoint, requestOptions);

		return HTTP.parseResponse<TResponse>(response);
	}

	private static parseResponse<TResponse>(response: Response) {
		const contentType = response.headers.get('Content-Type');

		if (contentType?.startsWith('application/json')) {
			const json = response.json() as Promise<TResponse>;

			const errors = ErrorHandler.parseErrorResponse(json);

			return errors ?? json;
		}

		throw new Error('Unknown response type');
	}
}
