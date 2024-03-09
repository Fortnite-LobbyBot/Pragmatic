export interface IUser {
	token: string;
	username: string;
	email: string;
	password: string;
	apiToken: string;
	connections: {
		discord: { id: string; username: string };
		epic: { id: string; username: string };
	};
}
