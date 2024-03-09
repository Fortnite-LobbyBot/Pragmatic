import type { IPartyMember } from '..';
import type { BotStatus, BotTypes } from '../../enums';

export interface IConnectedBot {
	id: string;
	owner: string;
	parent: string;
	nickname: string;
	type: BotTypes;
	status: BotStatus;
	epicId?: string;
	friendsCount?: number;
	party?: {
		id?: string;
		members: IPartyMember[];
	};
}
