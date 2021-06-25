/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.13.3
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
import { HTTPValidationError } from '../models';
// @ts-ignore
import { UserPublic } from '../models';
// @ts-ignore
import { UserPublicList } from '../models';
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Check if a username is already taken by a user or an org
         * @summary Check if a username is already taken
         * @param {string} username 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkUsername: async (username: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'username' is not null or undefined
            if (username === null || username === undefined) {
                throw new RequiredError('username','Required parameter username was null or undefined when calling checkUsername.');
            }
            const localVarPath = `/users/check_username/{username}`
                .replace(`{${"username"}}`, encodeURIComponent(String(username)));
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
         * Get a specific user profile by name
         * @summary Get a specific user profile
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneUser: async (name: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling getOneUser.');
            }
            const localVarPath = `/users/{name}`
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
         * 
         * @summary List Users
         * @param {string} [search] Search string to find users
         * @param {number} [page] Page number starting from 1
         * @param {number} [perPage] Number of items per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listUsers: async (search?: string, page?: number, perPage?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
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
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Check if a username is already taken by a user or an org
         * @summary Check if a username is already taken
         * @param {string} username 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async checkUsername(username: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await UsersApiAxiosParamCreator(configuration).checkUsername(username, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get a specific user profile by name
         * @summary Get a specific user profile
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOneUser(name: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserPublic>> {
            const localVarAxiosArgs = await UsersApiAxiosParamCreator(configuration).getOneUser(name, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary List Users
         * @param {string} [search] Search string to find users
         * @param {number} [page] Page number starting from 1
         * @param {number} [perPage] Number of items per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listUsers(search?: string, page?: number, perPage?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserPublicList>> {
            const localVarAxiosArgs = await UsersApiAxiosParamCreator(configuration).listUsers(search, page, perPage, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Check if a username is already taken by a user or an org
         * @summary Check if a username is already taken
         * @param {string} username 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkUsername(username: string, options?: any): AxiosPromise<any> {
            return UsersApiFp(configuration).checkUsername(username, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a specific user profile by name
         * @summary Get a specific user profile
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneUser(name: string, options?: any): AxiosPromise<UserPublic> {
            return UsersApiFp(configuration).getOneUser(name, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List Users
         * @param {string} [search] Search string to find users
         * @param {number} [page] Page number starting from 1
         * @param {number} [perPage] Number of items per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listUsers(search?: string, page?: number, perPage?: number, options?: any): AxiosPromise<UserPublicList> {
            return UsersApiFp(configuration).listUsers(search, page, perPage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for checkUsername operation in UsersApi.
 * @export
 * @interface UsersApiCheckUsernameRequest
 */
export interface UsersApiCheckUsernameRequest {
    /**
     * 
     * @type {string}
     * @memberof UsersApiCheckUsername
     */
    readonly username: string
}

/**
 * Request parameters for getOneUser operation in UsersApi.
 * @export
 * @interface UsersApiGetOneUserRequest
 */
export interface UsersApiGetOneUserRequest {
    /**
     * 
     * @type {string}
     * @memberof UsersApiGetOneUser
     */
    readonly name: string
}

/**
 * Request parameters for listUsers operation in UsersApi.
 * @export
 * @interface UsersApiListUsersRequest
 */
export interface UsersApiListUsersRequest {
    /**
     * Search string to find users
     * @type {string}
     * @memberof UsersApiListUsers
     */
    readonly search?: string

    /**
     * Page number starting from 1
     * @type {number}
     * @memberof UsersApiListUsers
     */
    readonly page?: number

    /**
     * Number of items per page
     * @type {number}
     * @memberof UsersApiListUsers
     */
    readonly perPage?: number
}

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * Check if a username is already taken by a user or an org
     * @summary Check if a username is already taken
     * @param {UsersApiCheckUsernameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public checkUsername(requestParameters: UsersApiCheckUsernameRequest, options?: any) {
        return UsersApiFp(this.configuration).checkUsername(requestParameters.username, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a specific user profile by name
     * @summary Get a specific user profile
     * @param {UsersApiGetOneUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getOneUser(requestParameters: UsersApiGetOneUserRequest, options?: any) {
        return UsersApiFp(this.configuration).getOneUser(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List Users
     * @param {UsersApiListUsersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public listUsers(requestParameters: UsersApiListUsersRequest = {}, options?: any) {
        return UsersApiFp(this.configuration).listUsers(requestParameters.search, requestParameters.page, requestParameters.perPage, options).then((request) => request(this.axios, this.basePath));
    }
}
