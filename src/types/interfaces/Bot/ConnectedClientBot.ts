import type { IConnectedBot } from './ConnectedBot';

export interface IConnectedClientBot extends IConnectedBot {
	email: string;
	deviceAuth: {
		accountId: string;
		deviceId: string;
		secret: string;
	};
}
