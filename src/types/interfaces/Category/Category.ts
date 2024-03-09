import type { IConfig } from './Config';

export interface ICategory {
	owner: string;
	name: string;
	config: IConfig;
}
