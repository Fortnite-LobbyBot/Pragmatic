import type { Locales } from '../../enums';
import type {
	CategoryConfigPartyPrivacy,
	CategoryConfigSupportedPlatforms,
	CategoryConfigTriggerAction,
	CategoryConfigTriggerStringDetectionMethod
} from '../../enums/Category/Config';

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
