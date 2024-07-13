import type { IDBBot, IDBCategory } from '..';

type ConnectionSchema = {
	id?: string;
	username?: string;
};

export interface IClientAccount {
	user: {
		id: string;
		username: string;
		email: string;
		apiToken: string;
		connections?: {
			discord?: ConnectionSchema;
			epic?: ConnectionSchema;
		};
	};
	bots?: IDBBot[];
	categories?: IDBCategory[];
}
