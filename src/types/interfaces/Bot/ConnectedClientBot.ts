import type { BotStatus } from '../../enums';
import type { IPartyMember } from '../party/PartyMember';
import type { IClientBot } from './ClientBot';

export interface IConnectedClientBot extends IClientBot {
	status: BotStatus;
	epicId?: string;
	friendsCount?: number;
	party?: {
		id?: string;
		members: IPartyMember[];
	};
}
