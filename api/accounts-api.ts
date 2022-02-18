/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.26.2
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
// @ts-ignore
import { QuotaList } from '../models';
// @ts-ignore
import { QuotaType } from '../models';
// @ts-ignore
import { RoleEnum } from '../models';
/**
 * AccountsApi - axios parameter creator
 * @export
 */
export const AccountsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Check if an account name is taken
         * @summary Check if an account with this name exists
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkAccountName: async (name: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling checkAccountName.');
            }
            const localVarPath = `/accounts/check/{name}`
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
         * @param {string} [search] Search string to find accounts
         * @param {string} [type] Whether the account is for a user or an org
         * @param {RoleEnum} [role] The role the user has in relation to this account
         * @param {number} [page] Page number starting from 1
         * @param {number} [perPage] Number of items per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAccounts: async (search?: string, type?: string, role?: RoleEnum, page?: number, perPage?: number, options: any = {}): Promise<RequestArgs> => {
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

            // authentication APIKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("x-pollination-token")
                    : await configuration.apiKey;
                localVarHeaderParameter["x-pollination-token"] = localVarApiKeyValue;
            }

            // authentication JWTAuth required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (role !== undefined) {
                localVarQueryParameter['role'] = role;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['per-page'] = perPage;
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
        /**
         * 
         * @summary List Quotas
         * @param {string} name 
         * @param {Array<QuotaType>} [type] The types of quotas to get
         * @param {boolean} [exhausted] Whether to return only quotas which are exhausted
         * @param {boolean} [enforced] Whether to return only quotas which are enforced
         * @param {number} [page] Page number starting from 1
         * @param {number} [perPage] Number of items per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listQuotas: async (name: string, type?: Array<QuotaType>, exhausted?: boolean, enforced?: boolean, page?: number, perPage?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling listQuotas.');
            }
            const localVarPath = `/accounts/{name}/quotas`
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

            // authentication APIKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("x-pollination-token")
                    : await configuration.apiKey;
                localVarHeaderParameter["x-pollination-token"] = localVarApiKeyValue;
            }

            // authentication JWTAuth required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (type) {
                localVarQueryParameter['type'] = type;
            }

            if (exhausted !== undefined) {
                localVarQueryParameter['exhausted'] = exhausted;
            }

            if (enforced !== undefined) {
                localVarQueryParameter['enforced'] = enforced;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['per-page'] = perPage;
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
         * Check if an account name is taken
         * @summary Check if an account with this name exists
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async checkAccountName(name: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await AccountsApiAxiosParamCreator(configuration).checkAccountName(name, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
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
         * @param {string} [search] Search string to find accounts
         * @param {string} [type] Whether the account is for a user or an org
         * @param {RoleEnum} [role] The role the user has in relation to this account
         * @param {number} [page] Page number starting from 1
         * @param {number} [perPage] Number of items per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAccounts(search?: string, type?: string, role?: RoleEnum, page?: number, perPage?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PublicAccountList>> {
            const localVarAxiosArgs = await AccountsApiAxiosParamCreator(configuration).listAccounts(search, type, role, page, perPage, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary List Quotas
         * @param {string} name 
         * @param {Array<QuotaType>} [type] The types of quotas to get
         * @param {boolean} [exhausted] Whether to return only quotas which are exhausted
         * @param {boolean} [enforced] Whether to return only quotas which are enforced
         * @param {number} [page] Page number starting from 1
         * @param {number} [perPage] Number of items per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listQuotas(name: string, type?: Array<QuotaType>, exhausted?: boolean, enforced?: boolean, page?: number, perPage?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QuotaList>> {
            const localVarAxiosArgs = await AccountsApiAxiosParamCreator(configuration).listQuotas(name, type, exhausted, enforced, page, perPage, options);
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
         * Check if an account name is taken
         * @summary Check if an account with this name exists
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkAccountName(name: string, options?: any): AxiosPromise<any> {
            return AccountsApiFp(configuration).checkAccountName(name, options).then((request) => request(axios, basePath));
        },
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
         * @param {string} [search] Search string to find accounts
         * @param {string} [type] Whether the account is for a user or an org
         * @param {RoleEnum} [role] The role the user has in relation to this account
         * @param {number} [page] Page number starting from 1
         * @param {number} [perPage] Number of items per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAccounts(search?: string, type?: string, role?: RoleEnum, page?: number, perPage?: number, options?: any): AxiosPromise<PublicAccountList> {
            return AccountsApiFp(configuration).listAccounts(search, type, role, page, perPage, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List Quotas
         * @param {string} name 
         * @param {Array<QuotaType>} [type] The types of quotas to get
         * @param {boolean} [exhausted] Whether to return only quotas which are exhausted
         * @param {boolean} [enforced] Whether to return only quotas which are enforced
         * @param {number} [page] Page number starting from 1
         * @param {number} [perPage] Number of items per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listQuotas(name: string, type?: Array<QuotaType>, exhausted?: boolean, enforced?: boolean, page?: number, perPage?: number, options?: any): AxiosPromise<QuotaList> {
            return AccountsApiFp(configuration).listQuotas(name, type, exhausted, enforced, page, perPage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for checkAccountName operation in AccountsApi.
 * @export
 * @interface AccountsApiCheckAccountNameRequest
 */
export interface AccountsApiCheckAccountNameRequest {
    /**
     * 
     * @type {string}
     * @memberof AccountsApiCheckAccountName
     */
    readonly name: string
}

/**
 * Request parameters for getAccount operation in AccountsApi.
 * @export
 * @interface AccountsApiGetAccountRequest
 */
export interface AccountsApiGetAccountRequest {
    /**
     * 
     * @type {string}
     * @memberof AccountsApiGetAccount
     */
    readonly name: string
}

/**
 * Request parameters for listAccounts operation in AccountsApi.
 * @export
 * @interface AccountsApiListAccountsRequest
 */
export interface AccountsApiListAccountsRequest {
    /**
     * Search string to find accounts
     * @type {string}
     * @memberof AccountsApiListAccounts
     */
    readonly search?: string

    /**
     * Whether the account is for a user or an org
     * @type {string}
     * @memberof AccountsApiListAccounts
     */
    readonly type?: string

    /**
     * The role the user has in relation to this account
     * @type {RoleEnum}
     * @memberof AccountsApiListAccounts
     */
    readonly role?: RoleEnum

    /**
     * Page number starting from 1
     * @type {number}
     * @memberof AccountsApiListAccounts
     */
    readonly page?: number

    /**
     * Number of items per page
     * @type {number}
     * @memberof AccountsApiListAccounts
     */
    readonly perPage?: number
}

/**
 * Request parameters for listQuotas operation in AccountsApi.
 * @export
 * @interface AccountsApiListQuotasRequest
 */
export interface AccountsApiListQuotasRequest {
    /**
     * 
     * @type {string}
     * @memberof AccountsApiListQuotas
     */
    readonly name: string

    /**
     * The types of quotas to get
     * @type {Array<QuotaType>}
     * @memberof AccountsApiListQuotas
     */
    readonly type?: Array<QuotaType>

    /**
     * Whether to return only quotas which are exhausted
     * @type {boolean}
     * @memberof AccountsApiListQuotas
     */
    readonly exhausted?: boolean

    /**
     * Whether to return only quotas which are enforced
     * @type {boolean}
     * @memberof AccountsApiListQuotas
     */
    readonly enforced?: boolean

    /**
     * Page number starting from 1
     * @type {number}
     * @memberof AccountsApiListQuotas
     */
    readonly page?: number

    /**
     * Number of items per page
     * @type {number}
     * @memberof AccountsApiListQuotas
     */
    readonly perPage?: number
}

/**
 * AccountsApi - object-oriented interface
 * @export
 * @class AccountsApi
 * @extends {BaseAPI}
 */
export class AccountsApi extends BaseAPI {
    /**
     * Check if an account name is taken
     * @summary Check if an account with this name exists
     * @param {AccountsApiCheckAccountNameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    public checkAccountName(requestParameters: AccountsApiCheckAccountNameRequest, options?: any) {
        return AccountsApiFp(this.configuration).checkAccountName(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve an account by name
     * @summary Get an account by name
     * @param {AccountsApiGetAccountRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    public getAccount(requestParameters: AccountsApiGetAccountRequest, options?: any) {
        return AccountsApiFp(this.configuration).getAccount(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List accounts
     * @summary List Accounts on the Pollination platform
     * @param {AccountsApiListAccountsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    public listAccounts(requestParameters: AccountsApiListAccountsRequest = {}, options?: any) {
        return AccountsApiFp(this.configuration).listAccounts(requestParameters.search, requestParameters.type, requestParameters.role, requestParameters.page, requestParameters.perPage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List Quotas
     * @param {AccountsApiListQuotasRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    public listQuotas(requestParameters: AccountsApiListQuotasRequest, options?: any) {
        return AccountsApiFp(this.configuration).listQuotas(requestParameters.name, requestParameters.type, requestParameters.exhausted, requestParameters.enforced, requestParameters.page, requestParameters.perPage, options).then((request) => request(this.axios, this.basePath));
    }
}
