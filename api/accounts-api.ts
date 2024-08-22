/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.6.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { AccountPublic } from '../models';
// @ts-ignore
import type { HTTPValidationError } from '../models';
// @ts-ignore
import type { PublicAccountList } from '../models';
// @ts-ignore
import type { QuotaList } from '../models';
// @ts-ignore
import type { QuotaType } from '../models';
// @ts-ignore
import type { RoleEnum } from '../models';
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
        checkAccountName: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('checkAccountName', 'name', name)
            const localVarPath = `/accounts/check/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete an account
         * @summary Delete an account
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAccount: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteAccount', 'name', name)
            const localVarPath = `/accounts/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWTAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication APIKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "x-pollination-token", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
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
        getAccount: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getAccount', 'name', name)
            const localVarPath = `/accounts/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
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
        listAccounts: async (search?: string, type?: string, role?: RoleEnum, page?: number, perPage?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/accounts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWTAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication APIKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "x-pollination-token", configuration)

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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
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
        listQuotas: async (name: string, type?: Array<QuotaType>, exhausted?: boolean, enforced?: boolean, page?: number, perPage?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('listQuotas', 'name', name)
            const localVarPath = `/accounts/{name}/quotas`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWTAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication APIKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "x-pollination-token", configuration)

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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
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
    const localVarAxiosParamCreator = AccountsApiAxiosParamCreator(configuration)
    return {
        /**
         * Check if an account name is taken
         * @summary Check if an account with this name exists
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async checkAccountName(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkAccountName(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AccountsApi.checkAccountName']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete an account
         * @summary Delete an account
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAccount(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAccount(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AccountsApi.deleteAccount']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieve an account by name
         * @summary Get an account by name
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAccount(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AccountPublic>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAccount(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AccountsApi.getAccount']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
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
        async listAccounts(search?: string, type?: string, role?: RoleEnum, page?: number, perPage?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PublicAccountList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAccounts(search, type, role, page, perPage, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AccountsApi.listAccounts']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
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
        async listQuotas(name: string, type?: Array<QuotaType>, exhausted?: boolean, enforced?: boolean, page?: number, perPage?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QuotaList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listQuotas(name, type, exhausted, enforced, page, perPage, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AccountsApi.listQuotas']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AccountsApi - factory interface
 * @export
 */
export const AccountsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AccountsApiFp(configuration)
    return {
        /**
         * Check if an account name is taken
         * @summary Check if an account with this name exists
         * @param {AccountsApiCheckAccountNameRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkAccountName(requestParameters: AccountsApiCheckAccountNameRequest, options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.checkAccountName(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete an account
         * @summary Delete an account
         * @param {AccountsApiDeleteAccountRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAccount(requestParameters: AccountsApiDeleteAccountRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteAccount(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve an account by name
         * @summary Get an account by name
         * @param {AccountsApiGetAccountRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAccount(requestParameters: AccountsApiGetAccountRequest, options?: RawAxiosRequestConfig): AxiosPromise<AccountPublic> {
            return localVarFp.getAccount(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List accounts
         * @summary List Accounts on the Pollination platform
         * @param {AccountsApiListAccountsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAccounts(requestParameters: AccountsApiListAccountsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<PublicAccountList> {
            return localVarFp.listAccounts(requestParameters.search, requestParameters.type, requestParameters.role, requestParameters.page, requestParameters.perPage, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List Quotas
         * @param {AccountsApiListQuotasRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listQuotas(requestParameters: AccountsApiListQuotasRequest, options?: RawAxiosRequestConfig): AxiosPromise<QuotaList> {
            return localVarFp.listQuotas(requestParameters.name, requestParameters.type, requestParameters.exhausted, requestParameters.enforced, requestParameters.page, requestParameters.perPage, options).then((request) => request(axios, basePath));
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
 * Request parameters for deleteAccount operation in AccountsApi.
 * @export
 * @interface AccountsApiDeleteAccountRequest
 */
export interface AccountsApiDeleteAccountRequest {
    /**
     * 
     * @type {string}
     * @memberof AccountsApiDeleteAccount
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
    public checkAccountName(requestParameters: AccountsApiCheckAccountNameRequest, options?: RawAxiosRequestConfig) {
        return AccountsApiFp(this.configuration).checkAccountName(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete an account
     * @summary Delete an account
     * @param {AccountsApiDeleteAccountRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    public deleteAccount(requestParameters: AccountsApiDeleteAccountRequest, options?: RawAxiosRequestConfig) {
        return AccountsApiFp(this.configuration).deleteAccount(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve an account by name
     * @summary Get an account by name
     * @param {AccountsApiGetAccountRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    public getAccount(requestParameters: AccountsApiGetAccountRequest, options?: RawAxiosRequestConfig) {
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
    public listAccounts(requestParameters: AccountsApiListAccountsRequest = {}, options?: RawAxiosRequestConfig) {
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
    public listQuotas(requestParameters: AccountsApiListQuotasRequest, options?: RawAxiosRequestConfig) {
        return AccountsApiFp(this.configuration).listQuotas(requestParameters.name, requestParameters.type, requestParameters.exhausted, requestParameters.enforced, requestParameters.page, requestParameters.perPage, options).then((request) => request(this.axios, this.basePath));
    }
}

