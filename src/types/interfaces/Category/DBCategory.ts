import type { ICategoryConfig } from './CategoryConfig';

export interface IDBCategory {
	id: string;
	owner: string;
	name: string;
	config: ICategoryConfig;
}
