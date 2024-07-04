import type { BotTypes } from '../../enums';

export interface IBot {
	id: string;
	owner: string;
	parent: string;
	nickname: string;
	type: BotTypes;
}
