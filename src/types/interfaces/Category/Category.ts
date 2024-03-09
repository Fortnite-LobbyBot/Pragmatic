import type {
	CategoryPartyPrivacy,
	CategorySupportedLanguages,
	CategorySupportedPlatforms,
	CategoryTriggerAction,
	CategoryTriggerStringDetectionMethod
} from '../../enums/Category/Category';

export interface ICategory {
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
