/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.10.19
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { AccountPublic } from '../models';
// @ts-ignore
import { HTTPValidationError } from '../models';
// @ts-ignore
import { PublicAccountList } from '../models';
/**
 * AccountsApi - axios parameter creator
 * @export
 */
export const AccountsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieve an account by name
         * @summary Get an account by name
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAccount: async (name: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling getAccount.');
            }
            const localVarPath = `/accounts/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * List accounts
         * @summary List Accounts on the Pollination platform
         * @param {number} [page] Page number starting from 1
         * @param {number} [perPage] Number of items per page
         * @param {string} [search] Search string to find accounts
         * @param {string} [type] Whether the account is for a user or an org
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAccounts: async (page?: number, perPage?: number, search?: string, type?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/accounts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['per-page'] = perPage;
            }

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AccountsApi - functional programming interface
 * @export
 */
export const AccountsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieve an account by name
         * @summary Get an account by name
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAccount(name: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AccountPublic>> {
            const localVarAxiosArgs = await AccountsApiAxiosParamCreator(configuration).getAccount(name, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * List accounts
         * @summary List Accounts on the Pollination platform
         * @param {number} [page] Page number starting from 1
         * @param {number} [perPage] Number of items per page
         * @param {string} [search] Search string to find accounts
         * @param {string} [type] Whether the account is for a user or an org
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAccounts(page?: number, perPage?: number, search?: string, type?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PublicAccountList>> {
            const localVarAxiosArgs = await AccountsApiAxiosParamCreator(configuration).listAccounts(page, perPage, search, type, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AccountsApi - factory interface
 * @export
 */
export const AccountsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieve an account by name
         * @summary Get an account by name
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAccount(name: string, options?: any): AxiosPromise<AccountPublic> {
            return AccountsApiFp(configuration).getAccount(name, options).then((request) => request(axios, basePath));
        },
        /**
         * List accounts
         * @summary List Accounts on the Pollination platform
         * @param {number} [page] Page number starting from 1
         * @param {number} [perPage] Number of items per page
         * @param {string} [search] Search string to find accounts
         * @param {string} [type] Whether the account is for a user or an org
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAccounts(page?: number, perPage?: number, search?: string, type?: string, options?: any): AxiosPromise<PublicAccountList> {
            return AccountsApiFp(configuration).listAccounts(page, perPage, search, type, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AccountsApi - interface
 * @export
 * @interface AccountsApi
 */
export interface AccountsApiInterface {
    /**
     * Retrieve an account by name
     * @summary Get an account by name
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApiInterface
     */
    getAccount(name: string, options?: any): AxiosPromise<AccountPublic>;

    /**
     * List accounts
     * @summary List Accounts on the Pollination platform
     * @param {number} [page] Page number starting from 1
     * @param {number} [perPage] Number of items per page
     * @param {string} [search] Search string to find accounts
     * @param {string} [type] Whether the account is for a user or an org
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApiInterface
     */
    listAccounts(page?: number, perPage?: number, search?: string, type?: string, options?: any): AxiosPromise<PublicAccountList>;

}

/**
 * AccountsApi - object-oriented interface
 * @export
 * @class AccountsApi
 * @extends {BaseAPI}
 */
export class AccountsApi extends BaseAPI implements AccountsApiInterface {
    /**
     * Retrieve an account by name
     * @summary Get an account by name
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    public getAccount(name: string, options?: any) {
        return AccountsApiFp(this.configuration).getAccount(name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List accounts
     * @summary List Accounts on the Pollination platform
     * @param {number} [page] Page number starting from 1
     * @param {number} [perPage] Number of items per page
     * @param {string} [search] Search string to find accounts
     * @param {string} [type] Whether the account is for a user or an org
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    public listAccounts(page?: number, perPage?: number, search?: string, type?: string, options?: any) {
        return AccountsApiFp(this.configuration).listAccounts(page, perPage, search, type, options).then((request) => request(this.axios, this.basePath));
    }
}
