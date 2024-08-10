import { ErrorHandler } from '../../errors';
import type { IParsedError } from '../../types';

type RequestOptions = {
	method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
	headers?: Record<string, string>;
	body?: any;
};

type ResponseObject<TResponse> =
	| {
			readonly data: undefined;
			readonly errors: IParsedError[];
	  }
	| {
			readonly data: TResponse;
			readonly errors: undefined;
	  };

export abstract class HTTP {
	public static get<TResponse>(
		service: string,
		endpoint: string,
		token?: string | undefined,
		options?: Omit<RequestOptions, 'method'>
	): Promise<ResponseObject<TResponse>> {
		return this.request(service, endpoint, token, { ...options, method: 'GET' });
	}

	public static post<TResponse>(
		service: string,
		endpoint: string,
		token?: string | undefined,
		options?: Omit<RequestOptions, 'method'>
	): Promise<ResponseObject<TResponse>> {
		return this.request(service, endpoint, token, { ...options, method: 'POST' });
	}

	public static put<TResponse>(
		service: string,
		endpoint: string,
		token?: string | undefined,
		options?: Omit<RequestOptions, 'method'>
	): Promise<ResponseObject<TResponse>> {
		return this.request(service, endpoint, token, { ...options, method: 'PUT' });
	}

	public static patch<TResponse>(
		service: string,
		endpoint: string,
		token?: string | undefined,
		options?: Omit<RequestOptions, 'method'>
	): Promise<ResponseObject<TResponse>> {
		return this.request(service, endpoint, token, { ...options, method: 'PATCH' });
	}

	public static delete<TResponse>(
		service: string,
		endpoint: string,
		token?: string | undefined,
		options?: Omit<RequestOptions, 'method'>
	): Promise<ResponseObject<TResponse>> {
		return this.request(service, endpoint, token, { ...options, method: 'DELETE' });
	}

	public static async request<TResponse>(
		service: string,
		endpoint: string,
		token: string | undefined,
		options: RequestOptions
	): Promise<ResponseObject<TResponse>> {
		const requestOptions = {
			...options,
			body: options.body ? JSON.stringify(options.body) : undefined,
			headers: options.headers ?? {}
		};

		if (token) requestOptions.headers['Authorization'] = token;

		const response = await fetch(service + endpoint, requestOptions);

		return HTTP.parseResponse<TResponse>(response);
	}

	private static async parseResponse<TResponse>(response: Response): Promise<ResponseObject<TResponse>> {
		const json = (await response.json()) as TResponse;

		const errors = ErrorHandler.parseErrorResponse(json);

		if (errors) return { data: undefined, errors: errors } as const;

		return { data: json, errors: undefined } as const;
	}
}
