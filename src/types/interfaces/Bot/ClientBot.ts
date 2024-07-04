import type { IBot } from './Bot';

export interface IClientBot extends IBot {
	email: string;
	deviceAuth: {
		accountId: string;
		deviceId: string;
		secret: string;
	};
}
