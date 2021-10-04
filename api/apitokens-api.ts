/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.17.0-staging
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
import { APITokenCreate } from '../models';
// @ts-ignore
import { APITokenList } from '../models';
// @ts-ignore
import { APITokenPrivate } from '../models';
// @ts-ignore
import { HTTPValidationError } from '../models';
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
        createToken: async (aPITokenCreate: APITokenCreate, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'aPITokenCreate' is not null or undefined
            if (aPITokenCreate === null || aPITokenCreate === undefined) {
                throw new RequiredError('aPITokenCreate','Required parameter aPITokenCreate was null or undefined when calling createToken.');
            }
            const localVarPath = `/tokens`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

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
            const needsSerialization = (typeof aPITokenCreate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(aPITokenCreate !== undefined ? aPITokenCreate : {}) : (aPITokenCreate || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
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
        deleteToken: async (tokenId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'tokenId' is not null or undefined
            if (tokenId === null || tokenId === undefined) {
                throw new RequiredError('tokenId','Required parameter tokenId was null or undefined when calling deleteToken.');
            }
            const localVarPath = `/tokens/{token_id}`
                .replace(`{${"token_id"}}`, encodeURIComponent(String(tokenId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * List API tokens for the authenticated user
         * @summary List user API tokens
         * @param {number} [page] Page number starting from 1
         * @param {number} [perPage] Number of items per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listTokens: async (page?: number, perPage?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/tokens`;
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
         * Regenerate a token
         * @summary Regenerate an API token
         * @param {string} tokenId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        regenerateToken: async (tokenId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'tokenId' is not null or undefined
            if (tokenId === null || tokenId === undefined) {
                throw new RequiredError('tokenId','Required parameter tokenId was null or undefined when calling regenerateToken.');
            }
            const localVarPath = `/tokens/{token_id}`
                .replace(`{${"token_id"}}`, encodeURIComponent(String(tokenId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
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
 * APITokensApi - functional programming interface
 * @export
 */
export const APITokensApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Create a new API token
         * @summary Create a new API token
         * @param {APITokenCreate} aPITokenCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createToken(aPITokenCreate: APITokenCreate, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<APITokenPrivate>> {
            const localVarAxiosArgs = await APITokensApiAxiosParamCreator(configuration).createToken(aPITokenCreate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete a token
         * @summary Delete an API Token
         * @param {string} tokenId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteToken(tokenId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await APITokensApiAxiosParamCreator(configuration).deleteToken(tokenId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
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
        async listTokens(page?: number, perPage?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<APITokenList>> {
            const localVarAxiosArgs = await APITokensApiAxiosParamCreator(configuration).listTokens(page, perPage, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Regenerate a token
         * @summary Regenerate an API token
         * @param {string} tokenId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async regenerateToken(tokenId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<APITokenPrivate>> {
            const localVarAxiosArgs = await APITokensApiAxiosParamCreator(configuration).regenerateToken(tokenId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * APITokensApi - factory interface
 * @export
 */
export const APITokensApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Create a new API token
         * @summary Create a new API token
         * @param {APITokenCreate} aPITokenCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createToken(aPITokenCreate: APITokenCreate, options?: any): AxiosPromise<APITokenPrivate> {
            return APITokensApiFp(configuration).createToken(aPITokenCreate, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a token
         * @summary Delete an API Token
         * @param {string} tokenId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteToken(tokenId: string, options?: any): AxiosPromise<any> {
            return APITokensApiFp(configuration).deleteToken(tokenId, options).then((request) => request(axios, basePath));
        },
        /**
         * List API tokens for the authenticated user
         * @summary List user API tokens
         * @param {number} [page] Page number starting from 1
         * @param {number} [perPage] Number of items per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listTokens(page?: number, perPage?: number, options?: any): AxiosPromise<APITokenList> {
            return APITokensApiFp(configuration).listTokens(page, perPage, options).then((request) => request(axios, basePath));
        },
        /**
         * Regenerate a token
         * @summary Regenerate an API token
         * @param {string} tokenId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        regenerateToken(tokenId: string, options?: any): AxiosPromise<APITokenPrivate> {
            return APITokensApiFp(configuration).regenerateToken(tokenId, options).then((request) => request(axios, basePath));
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
    public createToken(requestParameters: APITokensApiCreateTokenRequest, options?: any) {
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
    public deleteToken(requestParameters: APITokensApiDeleteTokenRequest, options?: any) {
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
    public listTokens(requestParameters: APITokensApiListTokensRequest = {}, options?: any) {
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
    public regenerateToken(requestParameters: APITokensApiRegenerateTokenRequest, options?: any) {
        return APITokensApiFp(this.configuration).regenerateToken(requestParameters.tokenId, options).then((request) => request(this.axios, this.basePath));
    }
}
