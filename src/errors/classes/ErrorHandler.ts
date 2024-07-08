import { ErrorCodes, ErrorTypes } from '../../types';

interface ErrorSchema {
	message: string;
	type: ErrorTypes;
}

const errorMap = {
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
	[ErrorCodes.LoginInvalidCredentials]: {
		type: ErrorTypes.Input,
		message: 'The email or password is incorrect'
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
} as const;

type AssertErrorMapType = {
	[K in keyof typeof errorMap]: ErrorSchema;
};

function validateErrorMapType<T extends AssertErrorMapType>(map: T): T {
	return map;
}

const validatedErrorMap = validateErrorMapType(errorMap);

export abstract class ErrorHandler {
	public static getError<T extends ErrorCodes>(error: T): (typeof errorMap)[T] {
		return validatedErrorMap[error];
	}
}