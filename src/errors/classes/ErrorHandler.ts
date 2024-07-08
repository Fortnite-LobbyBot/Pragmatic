import { ErrorCodes } from '../../types';

interface ErrorSchema {
	message: string;
}

const errorMap: Record<ErrorCodes, ErrorSchema> = {
	[ErrorCodes.CommonInvalidRequest]: {
		message: 'The request is not valid.'
	},
	[ErrorCodes.CommonUnableToProcessRequest]: {
		message: 'Unable to process the request. Please try again.'
	},
	[ErrorCodes.CommonInvalidFieldsLength]: {
		message: 'The body fields have an invalid length.'
	},
	[ErrorCodes.CommonRateLimitExceeded]: {
		message: 'You are being rate limited.'
	},
	[ErrorCodes.CommonUnableToSaveToDatabase]: {
		message: 'Unable to save changes. Please check all fields.'
	},

	[ErrorCodes.AuthInvalidToken]: {
		message: 'Invalid token provided.'
	},
	[ErrorCodes.AuthInvalidAPIToken]: {
		message: 'Invalid API token provided.'
	},
	[ErrorCodes.AuthInvalidCaptchaToken]: {
		message: 'Sorry, the captcha was not resolved correctly. Please try again.'
	},
	[ErrorCodes.AuthUnauthorized]: {
		message: 'You are not authorized to perform this action.'
	},
	[ErrorCodes.AuthUserBanned]: {
		message: 'Your account is banned from the service.'
	},
	[ErrorCodes.LoginInvalidCredentials]: {
		message: 'The email or password is incorrect'
	},
	[ErrorCodes.LoginInvalidEmail]: {
		message: 'The email is invalid.'
	},
	[ErrorCodes.LoginInvalidOrUsedEmail]: {
		message: 'The email is invalid or is already used.'
	},

	[ErrorCodes.Oauth2InvalidCode]: {
		message: 'Unable to verify your request at this moment. Please try again later.'
	},
	[ErrorCodes.Oauth2InvalidScope]: {
		message: 'Invalid scope provided.'
	},
	[ErrorCodes.Oauth2TokenInvalid]: {
		message: 'Unable to verify Oauth2 token. Please try again later.'
	},
	[ErrorCodes.Oauth2UnableToFetchUser]: {
		message: 'Unable to obtain user information. Please try again later.'
	},
	[ErrorCodes.Oauth2UnableToFetchConnections]: {
		message: 'Unable to obtain user connections. Please try again later.'
	},
	[ErrorCodes.Oauth2UserWithoutConnection]: {
		message: 'User does not have connections. Please try again later.'
	},
	[ErrorCodes.Oauth2ConnectionNotVerified]: {
		message: 'User does have a connection, but the connection is not verified. Please try again later.'
	},

	[ErrorCodes.ReleaseNotFound]: {
		message: 'Sorry, no release found. Please try again later.'
	},
	[ErrorCodes.ReleaseVersionAlreadyExists]: {
		message: 'Release version already exists.'
	}
};

export abstract class ErrorHandler {
	public static getError(error: ErrorCodes): ErrorSchema {
		return errorMap[error];
	}
}
