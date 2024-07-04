export interface IClientUser {
	id: string;
	username: string;
	email: string;
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
