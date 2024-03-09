export interface Bot {
	id: string;
	parent: string;
	nickname: string;
	epicId?: string;
	friendsCount?: number;
	party?: {
		id?: string;
	};
}
