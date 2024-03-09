export enum CategorySupportedLanguages {
	En = 'en',
	Es = 'es',
	De = 'de',
	Fr = 'fr',
	It = 'it',
	Pt = 'pt'
}

export enum CategorySupportedPlatforms {
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

export enum CategoryPartyPrivacy {
	Public = 0,
	Private = 1
}

export enum CategoryTriggerStringDetectionMethod {
	Equals = 0,
	Includes = 1,
	StartsWith = 2,
	EndsWith = 3
}

export enum CategoryTriggerAction {
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
