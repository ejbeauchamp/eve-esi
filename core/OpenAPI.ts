/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiRequestOptions } from './ApiRequestOptions';

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
type Headers = Record<string, string>;

export type OpenAPIConfig = {
	BASE: string;
	VERSION: string;
	WITH_CREDENTIALS: boolean;
	CREDENTIALS: 'include' | 'omit' | 'same-origin';
	TOKEN?: string | Resolver<string>;
	USERNAME?: string | Resolver<string>;
	PASSWORD?: string | Resolver<string>;
	HEADERS?: Headers | Resolver<Headers>;
	ENCODE_PATH?: (path: string) => string;
};

export const OpenAPI: OpenAPIConfig = {
	BASE: 'https://esi.evetech.net/latest',
	VERSION: '1.17',
	WITH_CREDENTIALS: false,
	CREDENTIALS: 'include',
	TOKEN: undefined,
	USERNAME: undefined,
	PASSWORD: undefined,
	HEADERS: undefined,
	ENCODE_PATH: undefined,
};
