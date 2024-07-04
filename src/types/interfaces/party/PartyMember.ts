import type { ICosmeticVariants } from '../cosmetic/CosmeticVariants';

export interface IPartyMember {
	id: string;
	displayName?: string;
	outfit?: string;
	emote?: string;
	backpack?: string;
	pickaxe?: string;
	variants?: ICosmeticVariants;
	isReady?: boolean;
	isLeader?: boolean;
	isSittingOut?: boolean;
	isPlaying?: boolean;
}
