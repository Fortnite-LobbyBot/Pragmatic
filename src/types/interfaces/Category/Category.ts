enum CategorySupportedLanguages {
	En = 'en',
	Es = 'es',
	De = 'de',
	Fr = 'fr',
	It = 'it',
	Pt = 'pt'
}

enum CategorySupportedPlatforms {
	Win = 'WIN',
	Mac = 'MAC',
	Psn = 'PSN',
	Xbl = 'XBL',
	Swt = 'SWT',
	Ios = 'IOS',
	And = 'AND',
	Ps5 = 'PS5',
	Xsx = 'XSX'
}

enum CategoryPartyPrivacy {
	Public = 0,
	Private = 1
}

enum CategoryTriggerStringDetectionMethod {
	Equals = 0,
	Includes = 1,
	StartsWith = 2,
	EndsWith = 3
}

enum CategoryTriggerAction {
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

export interface Category {
	replyLangs?: `${CategorySupportedLanguages}`[];
	searchLangs?: `${CategorySupportedLanguages}`[];
	platform?: `${CategorySupportedPlatforms}`[];
	privacy?: `${CategoryPartyPrivacy}`;
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
		detectionMethods?: CategoryTriggerStringDetectionMethod[];
		actions?: CategoryTriggerAction[];
		messages?: string[];
	}[];

	messageContentTriggers?: {
		triggers?: string[];
		detectionMethods?: CategoryTriggerStringDetectionMethod[];
		actions?: CategoryTriggerAction[];
		messages?: string[];
	}[];

	cosmeticTriggers?: {
		triggers?: string[];
		detectionMethods?: CategoryTriggerStringDetectionMethod[];
		actions?: CategoryTriggerAction[];
		messages?: string[];
	}[];

	addFriendTrigger?: {
		actions?: CategoryTriggerAction[];
		messages?: string[];
	};

	memberJoinTrigger?: {
		actions?: CategoryTriggerAction[];
		messages?: string[];
	};

	changeCosmeticTrigger?: {
		actions?: CategoryTriggerAction[];
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
