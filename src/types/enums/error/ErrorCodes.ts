import type { errorMap } from './ErrorMap';
import type { ErrorTypes } from './ErrorTypes';

export enum ErrorCodes {
	// * Common
	CommonInvalidRequest = 'net.fnlb.errors.common.invalid_request',
	CommonUnableToProcessRequest = 'net.fnlb.errors.common.unable_to_process_request',
	CommonInvalidFieldsLength = 'net.fnlb.errors.common.invalid_body_fields_length',
	CommonRateLimitExceeded = 'net.fnlb.errors.common.rate_limit_exceeded',
	CommonUnableToSaveToDatabase = 'net.fnlb.errors.common.unable_to_save_to_database',

	// * Auth
	AuthInvalidToken = 'net.fnlb.errors.auth.invalid_token',
	AuthInvalidAPIToken = 'net.fnlb.errors.auth.invalid_api_token',
	AuthInvalidCaptchaToken = 'net.fnlb.errors.auth.invalid_captcha_token',
	AuthUnauthorized = 'net.fnlb.errors.auth.unauthorized',
	AuthUserBanned = 'net.fnlb.errors.auth.user_banned',

	// * Login
	LoginInvalidCredentials = 'net.fnlb.errors.login.invalid_credentials',
	LoginInvalidEmail = 'net.fnlb.errors.login.invalid_email',
	LoginInvalidOrUsedEmail = 'net.fnlb.errors.login.invalid_or_used_email',

	// * Oauth2
	Oauth2InvalidCode = 'net.fnlb.errors.oauth2.invalid_code',
	Oauth2InvalidScope = 'net.fnlb.errors.oauth2.invalid_scope',
	Oauth2TokenInvalid = 'net.fnlb.errors.oauth2.token_invalid',
	Oauth2UnableToFetchUser = 'net.fnlb.errors.oauth2.unable_to_fetch_user',
	Oauth2UnableToFetchConnections = 'net.fnlb.errors.oauth2.unable_to_fetch_connections',
	Oauth2UserWithoutConnection = 'net.fnlb.errors.oauth2.user_without_connection',
	Oauth2ConnectionNotVerified = 'net.fnlb.errors.oauth2.connection_not_verified',

	// * Release
	ReleaseNotFound = 'net.fnlb.errors.release.no_release_found',
	ReleaseVersionAlreadyExists = 'net.fnlb.errors.release.version_already_exists'
}

export type GeneralErrorCodes = {
	[K in keyof typeof errorMap]: (typeof errorMap)[K] extends { type: ErrorTypes.General } ? K : never;
}[keyof typeof errorMap];

export type InputErrorCodes = {
	[K in keyof typeof errorMap]: (typeof errorMap)[K] extends { type: ErrorTypes.Input } ? K : never;
}[keyof typeof errorMap];
