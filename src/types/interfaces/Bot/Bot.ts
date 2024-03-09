import type { BotTypes } from "../../enums";

export interface IBot {
	id: string;
	owner: string;
	parent: string;
	nickname: string;
	type: BotTypes;
	email: string;
	deviceAuth: {
		accountId: string;
		deviceId: string;
		secret: string;
	};
}
