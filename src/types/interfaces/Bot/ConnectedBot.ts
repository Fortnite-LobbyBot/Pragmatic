import type { BotStatus, BotTypes } from '../../enums';
import type { IPartyMember } from '../Party/Member';

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
