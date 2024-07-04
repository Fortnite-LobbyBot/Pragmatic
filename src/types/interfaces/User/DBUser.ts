export interface IDBUser {
	id: string;
	token: string;
	username: string;
	email: string;
	password: string;
	apiToken: string;
	connections?: {
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
