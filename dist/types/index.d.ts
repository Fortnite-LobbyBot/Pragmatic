// Generated by dts-bundle-generator v9.5.1

export declare enum BotTypes {
	Public = 0,
	Private = 1
}
export declare enum BotStatus {
	Offline = 0,
	Booting = 1,
	Available = 2,
	Busy = 3,
	Disconnected = 4
}
export declare enum CategoryConfigSupportedPlatforms {
	Win = "WIN",
	Mac = "MAC",
	Psn = "PSN",
	Xbl = "XBL",
	Swt = "SWT",
	Ios = "IOS",
	And = "AND",
	Ps5 = "PS5",
	Xsx = "XSX"
}
export declare enum CategoryConfigPartyPrivacy {
	Public = 0,
	Private = 1
}
export declare enum CategoryConfigTriggerStringDetectionMethod {
	Equals = 0,
	Includes = 1,
	StartsWith = 2,
	EndsWith = 3
}
export declare enum CategoryConfigTriggerAction {
	ChatBan = 0,
	Kick = 1,
	Block = 2,
	RemoveFriend = 3,
	AddFriend = 4,
	Promote = 5,
	Copy = 6,
	Mimic = 7,
	Hide = 8,
	Show = 9,
	Blacklist = 10,
	Whitelist = 11
}
export declare enum Locales {
	Default = "en",
	De = "de",
	Es = "es",
	Fr = "fr",
	It = "it",
	Pl = "pl",
	Pt = "pt",
	Tr = "tr"
}
export interface IBot {
	id: string;
	owner: string;
	parent: string;
	nickname: string;
	type: BotTypes;
}
export interface ICosmeticVariantData {
	t: string;
	n: string;
	o: {
		t: string;
		n: string | null;
	}[];
}
export interface ICosmeticVariantMeta {
	c: string;
	v: string;
	dE?: number;
}
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
export interface IConnectedClientBot extends IConnectedBot {
	email: string;
	deviceAuth: {
		accountId: string;
		deviceId: string;
		secret: string;
	};
}
export interface ICategoryConfig {
	replyLangs?: Locales[];
	searchLangs?: Locales[];
	platform?: `${CategoryConfigSupportedPlatforms}`[];
	privacy?: `${CategoryConfigPartyPrivacy}`;
	prefixes?: string[];
	extraOwners?: string[];
	admins?: string[];
	whitelistUsers?: string[];
	blacklistUsers?: string[];
	excludedAutoAddFriends?: string[];
	otherBots?: string[];
	statusText?: string[];
	statusInterval?: number[];
	level?: number[];
	bpLevel?: number[];
	disableMatchmakingChecks?: boolean;
	disableJoinMessages?: boolean;
	inviteTimeout?: number;
	maxBotsPerLobby?: number;
	maxBotsPerLobbyWithOwner?: number;
	maxBotsPerLobbyWithAdmin?: number;
	maxBotsPerLobbyWithWhitelistUser?: number;
	allowMatchmaking?: boolean;
	acceptFriendRequests?: boolean;
	sendFriendRequestOnJoinParty?: boolean;
	sendFriendRequestOnMemberJoinParty?: boolean;
	runCommandsWithoutPrefix?: boolean;
	setCosmeticsWithoutCommands?: boolean;
	usernameTriggers?: {
		triggers?: string[];
		detectionMethods?: CategoryConfigTriggerStringDetectionMethod[];
		actions?: CategoryConfigTriggerAction[];
		messages?: string[];
	}[];
	messageContentTriggers?: {
		triggers?: string[];
		detectionMethods?: CategoryConfigTriggerStringDetectionMethod[];
		actions?: CategoryConfigTriggerAction[];
		messages?: string[];
	}[];
	cosmeticTriggers?: {
		triggers?: string[];
		detectionMethods?: CategoryConfigTriggerStringDetectionMethod[];
		actions?: CategoryConfigTriggerAction[];
		messages?: string[];
	}[];
	addFriendTrigger?: {
		actions?: CategoryConfigTriggerAction[];
		messages?: string[];
	};
	memberJoinTrigger?: {
		actions?: CategoryConfigTriggerAction[];
		messages?: string[];
	};
	changeCosmeticTrigger?: {
		actions?: CategoryConfigTriggerAction[];
		messages?: string[];
	};
	onlyOwnerCommands?: string[];
	onlyAdminCommands?: string[];
	onlyWhitelistUsersCommands?: string[];
	onlyFriendsCommands?: string[];
	onlyPartyMembersCommands?: string[];
	onlyWhisperCommands?: string[];
	startOutfit?: string[];
	startOutfitVariants?: number[][][];
	startBackpack?: string[];
	startBackpackVariants?: number[][][];
	startPickaxe?: string[];
	startPickaxeVariants?: number[][][];
	startBanner?: string[];
	joinOutfit?: string[];
	joinOutfitVariants?: number[][][];
	joinBackpack?: string[];
	joinBackpackVariants?: number[][][];
	joinPickaxe?: string[];
	joinPickaxeVariants?: number[][][];
	joinEmote?: string[];
	joinEmoji?: string[];
	joinBanner?: string[];
	memberJoinOutfit?: string[];
	memberJoinOutfitVariants?: number[][][];
	memberJoinBackpack?: string[];
	memberJoinBackpackVariants?: number[][][];
	memberJoinPickaxe?: string[];
	memberJoinPickaxeVariants?: number[][][];
	memberJoinEmote?: string[];
	memberJoinEmoji?: string[];
	memberJoinBanner?: string[];
}
export interface ICategory {
	id: string;
	owner: string;
	name: string;
	config: ICategoryConfig;
}
export interface IUser {
	id: string;
	token: string;
	username: string;
	email: string;
	password: string;
	apiToken: string;
	connections: {
		epic?: {
			id: string;
			username: string;
		};
		discord?: {
			id: string;
			username: string;
		};
	};
}

export {};
