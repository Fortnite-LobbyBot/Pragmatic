import type { ICategoryConfig } from './Config';

export interface ICategory {
	id: string;
	owner: string;
	name: string;
	config: ICategoryConfig;
}
