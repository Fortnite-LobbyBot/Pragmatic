import type { BotStatus } from '../../enums';
import type { IPartyMember } from '../party/PartyMember';
import type { IBot } from './Bot';

export interface IConnectedBot extends IBot {
	status: BotStatus;
	epicId?: string;
	friendsCount?: number;
	party?: {
		id?: string;
		members: IPartyMember[];
	};
}
