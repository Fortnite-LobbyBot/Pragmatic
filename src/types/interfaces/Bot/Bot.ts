import type { IClientBot } from './ClientBot';

export interface IBot extends IClientBot {
	email: never;
	deviceAuth: never;
}
