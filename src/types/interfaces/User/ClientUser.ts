import type { IDBUser } from './DBUser';

export interface IClientUser extends IDBUser {
	token: never;
	password: never;
}
