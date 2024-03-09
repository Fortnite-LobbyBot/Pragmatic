import type { IPartyMember } from '../';
import type { BotStatus, BotTypes } from '../../enums';

export interface IBot {
	id: string;
	parent: string;
	type: BotTypes;
	status: BotStatus;
	nickname: string;
	epicId?: string;
	friendsCount?: number;
	party?: {
		id?: string;
		members: IPartyMember[];
	};
}
