export interface ICosmeticVariantData {
	t: string;
	n: string;
	o: { t: string; n: string | null }[];
}

export interface ICosmeticVariantMeta {
	c: string;
	v: string;
	dE?: number;
};

export interface ICosmeticVariants {
	outfit?: ICosmeticVariantMeta[];
	backpack?: ICosmeticVariantMeta[];
	pickaxe?: ICosmeticVariantMeta[];
}

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
