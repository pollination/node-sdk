/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.7.2
 * Contact: info@pollination.solutions
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
import type { APITokenCreate } from '../models';
// @ts-ignore
import type { APITokenList } from '../models';
// @ts-ignore
import type { APITokenPrivate } from '../models';
// @ts-ignore
import type { HTTPValidationError } from '../models';
/**
 * APITokensApi - axios parameter creator
 * @export
 */
export const APITokensApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new API token
         * @summary Create a new API token
         * @param {APITokenCreate} aPITokenCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createToken: async (aPITokenCreate: APITokenCreate, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aPITokenCreate' is not null or undefined
            assertParamExists('createToken', 'aPITokenCreate', aPITokenCreate)
            const localVarPath = `/tokens`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWTAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(aPITokenCreate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a token
         * @summary Delete an API Token
         * @param {string} tokenId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteToken: async (tokenId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tokenId' is not null or undefined
            assertParamExists('deleteToken', 'tokenId', tokenId)
            const localVarPath = `/tokens/{token_id}`
                .replace(`{${"token_id"}}`, encodeURIComponent(String(tokenId)));
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List API tokens for the authenticated user
         * @summary List user API tokens
         * @param {number} [page] Page number starting from 1
         * @param {number} [perPage] Number of items per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listTokens: async (page?: number, perPage?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/tokens`;
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
         * Regenerate a token
         * @summary Regenerate an API token
         * @param {string} tokenId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        regenerateToken: async (tokenId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tokenId' is not null or undefined
            assertParamExists('regenerateToken', 'tokenId', tokenId)
            const localVarPath = `/tokens/{token_id}`
                .replace(`{${"token_id"}}`, encodeURIComponent(String(tokenId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWTAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
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
 * APITokensApi - functional programming interface
 * @export
 */
export const APITokensApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = APITokensApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new API token
         * @summary Create a new API token
         * @param {APITokenCreate} aPITokenCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createToken(aPITokenCreate: APITokenCreate, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<APITokenPrivate>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createToken(aPITokenCreate, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['APITokensApi.createToken']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete a token
         * @summary Delete an API Token
         * @param {string} tokenId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteToken(tokenId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteToken(tokenId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['APITokensApi.deleteToken']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List API tokens for the authenticated user
         * @summary List user API tokens
         * @param {number} [page] Page number starting from 1
         * @param {number} [perPage] Number of items per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listTokens(page?: number, perPage?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<APITokenList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listTokens(page, perPage, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['APITokensApi.listTokens']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Regenerate a token
         * @summary Regenerate an API token
         * @param {string} tokenId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async regenerateToken(tokenId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<APITokenPrivate>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.regenerateToken(tokenId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['APITokensApi.regenerateToken']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * APITokensApi - factory interface
 * @export
 */
export const APITokensApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = APITokensApiFp(configuration)
    return {
        /**
         * Create a new API token
         * @summary Create a new API token
         * @param {APITokensApiCreateTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createToken(requestParameters: APITokensApiCreateTokenRequest, options?: RawAxiosRequestConfig): AxiosPromise<APITokenPrivate> {
            return localVarFp.createToken(requestParameters.aPITokenCreate, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a token
         * @summary Delete an API Token
         * @param {APITokensApiDeleteTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteToken(requestParameters: APITokensApiDeleteTokenRequest, options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.deleteToken(requestParameters.tokenId, options).then((request) => request(axios, basePath));
        },
        /**
         * List API tokens for the authenticated user
         * @summary List user API tokens
         * @param {APITokensApiListTokensRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listTokens(requestParameters: APITokensApiListTokensRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<APITokenList> {
            return localVarFp.listTokens(requestParameters.page, requestParameters.perPage, options).then((request) => request(axios, basePath));
        },
        /**
         * Regenerate a token
         * @summary Regenerate an API token
         * @param {APITokensApiRegenerateTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        regenerateToken(requestParameters: APITokensApiRegenerateTokenRequest, options?: RawAxiosRequestConfig): AxiosPromise<APITokenPrivate> {
            return localVarFp.regenerateToken(requestParameters.tokenId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createToken operation in APITokensApi.
 * @export
 * @interface APITokensApiCreateTokenRequest
 */
export interface APITokensApiCreateTokenRequest {
    /**
     * 
     * @type {APITokenCreate}
     * @memberof APITokensApiCreateToken
     */
    readonly aPITokenCreate: APITokenCreate
}

/**
 * Request parameters for deleteToken operation in APITokensApi.
 * @export
 * @interface APITokensApiDeleteTokenRequest
 */
export interface APITokensApiDeleteTokenRequest {
    /**
     * 
     * @type {string}
     * @memberof APITokensApiDeleteToken
     */
    readonly tokenId: string
}

/**
 * Request parameters for listTokens operation in APITokensApi.
 * @export
 * @interface APITokensApiListTokensRequest
 */
export interface APITokensApiListTokensRequest {
    /**
     * Page number starting from 1
     * @type {number}
     * @memberof APITokensApiListTokens
     */
    readonly page?: number

    /**
     * Number of items per page
     * @type {number}
     * @memberof APITokensApiListTokens
     */
    readonly perPage?: number
}

/**
 * Request parameters for regenerateToken operation in APITokensApi.
 * @export
 * @interface APITokensApiRegenerateTokenRequest
 */
export interface APITokensApiRegenerateTokenRequest {
    /**
     * 
     * @type {string}
     * @memberof APITokensApiRegenerateToken
     */
    readonly tokenId: string
}

/**
 * APITokensApi - object-oriented interface
 * @export
 * @class APITokensApi
 * @extends {BaseAPI}
 */
export class APITokensApi extends BaseAPI {
    /**
     * Create a new API token
     * @summary Create a new API token
     * @param {APITokensApiCreateTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APITokensApi
     */
    public createToken(requestParameters: APITokensApiCreateTokenRequest, options?: RawAxiosRequestConfig) {
        return APITokensApiFp(this.configuration).createToken(requestParameters.aPITokenCreate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a token
     * @summary Delete an API Token
     * @param {APITokensApiDeleteTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APITokensApi
     */
    public deleteToken(requestParameters: APITokensApiDeleteTokenRequest, options?: RawAxiosRequestConfig) {
        return APITokensApiFp(this.configuration).deleteToken(requestParameters.tokenId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List API tokens for the authenticated user
     * @summary List user API tokens
     * @param {APITokensApiListTokensRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APITokensApi
     */
    public listTokens(requestParameters: APITokensApiListTokensRequest = {}, options?: RawAxiosRequestConfig) {
        return APITokensApiFp(this.configuration).listTokens(requestParameters.page, requestParameters.perPage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Regenerate a token
     * @summary Regenerate an API token
     * @param {APITokensApiRegenerateTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APITokensApi
     */
    public regenerateToken(requestParameters: APITokensApiRegenerateTokenRequest, options?: RawAxiosRequestConfig) {
        return APITokensApiFp(this.configuration).regenerateToken(requestParameters.tokenId, options).then((request) => request(this.axios, this.basePath));
    }
}

