import { ErrorCodes } from './ErrorCodes';
import { ErrorTypes } from './ErrorTypes';

interface ErrorSchema {
	message: string;
	type: ErrorTypes;
}

export const errorMap = {
	[ErrorCodes.GenericUnknown]: {
		type: ErrorTypes.General,
		message: 'An unknown error occurred. This may be due to an unexpected condition in the server.'
	},
	[ErrorCodes.GenericInternalError]: {
		type: ErrorTypes.General,
		message: 'An internal server error occurred. This may be due to an unhandled exception. Please try again.'
	},
	[ErrorCodes.GenericValidationFailed]: {
		type: ErrorTypes.General,
		message: 'Validation of the request data failed.'
	},
	[ErrorCodes.GenericParseFailed]: {
		type: ErrorTypes.General,
		message: 'The request could not be parsed. This may be due to a malformed input or an unsupported data format.'
	},
	[ErrorCodes.GenericNotFound]: {
		type: ErrorTypes.General,
		message: 'The requested resource does not exist.'
	},

	[ErrorCodes.CommonInvalidRequest]: {
		type: ErrorTypes.General,
		message: 'The request is not valid.'
	},
	[ErrorCodes.CommonUnableToProcessRequest]: {
		type: ErrorTypes.General,
		message: 'Unable to process the request. Please try again.'
	},
	[ErrorCodes.CommonInvalidFieldsLength]: {
		type: ErrorTypes.General,
		message: 'The body fields have an invalid length.'
	},
	[ErrorCodes.CommonRateLimitExceeded]: {
		type: ErrorTypes.General,
		message: 'You are being rate limited.'
	},
	[ErrorCodes.CommonUnableToSaveToDatabase]: {
		type: ErrorTypes.General,
		message: 'Unable to save changes. Please check all fields.'
	},

	[ErrorCodes.AuthInvalidToken]: {
		type: ErrorTypes.General,
		message: 'Invalid token provided.'
	},
	[ErrorCodes.AuthInvalidAPIToken]: {
		type: ErrorTypes.General,
		message: 'Invalid API token provided.'
	},
	[ErrorCodes.AuthInvalidCaptchaToken]: {
		type: ErrorTypes.General,
		message: 'Sorry, the captcha was not resolved correctly. Please try again.'
	},
	[ErrorCodes.AuthUnauthorized]: {
		type: ErrorTypes.General,
		message: 'You are not authorized to perform this action.'
	},
	[ErrorCodes.AuthUserBanned]: {
		type: ErrorTypes.General,
		message: 'Your account is banned from the service.'
	},
	[ErrorCodes.AuthPasswordConfirmationInvalid]: {
		type: ErrorTypes.Input,
		message: 'Sorry, the password is invalid or does not match.'
	},
	[ErrorCodes.LoginInvalidCredentials]: {
		type: ErrorTypes.Input,
		message: 'The email or password is incorrect.'
	},
	[ErrorCodes.LoginInvalidEmail]: {
		type: ErrorTypes.Input,
		message: 'The email is invalid.'
	},
	[ErrorCodes.LoginInvalidOrUsedEmail]: {
		type: ErrorTypes.Input,
		message: 'The email is invalid or is already used.'
	},

	[ErrorCodes.Oauth2InvalidCode]: {
		type: ErrorTypes.General,
		message: 'Unable to verify your request at this moment. Please try again later.'
	},
	[ErrorCodes.Oauth2InvalidScope]: {
		type: ErrorTypes.General,
		message: 'Invalid scope provided.'
	},
	[ErrorCodes.Oauth2TokenInvalid]: {
		type: ErrorTypes.General,
		message: 'Unable to verify Oauth2 token. Please try again later.'
	},
	[ErrorCodes.Oauth2UnableToFetchUser]: {
		type: ErrorTypes.General,
		message: 'Unable to obtain user information. Please try again later.'
	},
	[ErrorCodes.Oauth2UnableToFetchConnections]: {
		type: ErrorTypes.General,
		message: 'Unable to obtain user connections. Please try again later.'
	},
	[ErrorCodes.Oauth2UserWithoutConnection]: {
		type: ErrorTypes.General,
		message: 'User does not have connections. Please try again later.'
	},
	[ErrorCodes.Oauth2ConnectionNotVerified]: {
		type: ErrorTypes.General,
		message: 'User does have a connection, but the connection is not verified. Please try again later.'
	},

	[ErrorCodes.ReleaseNotFound]: {
		type: ErrorTypes.General,
		message: 'Sorry, no release found. Please try again later.'
	},
	[ErrorCodes.ReleaseVersionAlreadyExists]: {
		type: ErrorTypes.General,
		message: 'Release version already exists.'
	}
} as const satisfies Record<ErrorCodes, ErrorSchema>;
