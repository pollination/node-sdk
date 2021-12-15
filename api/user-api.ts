/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.21.1
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
import { CreatedContent } from '../models';
// @ts-ignore
import { HTTPValidationError } from '../models';
// @ts-ignore
import { UpdateAccepted } from '../models';
// @ts-ignore
import { UserCreate } from '../models';
// @ts-ignore
import { UserPrivate } from '../models';
// @ts-ignore
import { UserUpdate } from '../models';
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new user.
         * @summary Register a new user
         * @param {UserCreate} userCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUser: async (userCreate: UserCreate, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userCreate' is not null or undefined
            if (userCreate === null || userCreate === undefined) {
                throw new RequiredError('userCreate','Required parameter userCreate was null or undefined when calling createUser.');
            }
            const localVarPath = `/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

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
            const needsSerialization = (typeof userCreate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(userCreate !== undefined ? userCreate : {}) : (userCreate || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Get authenticated user profile
         * @summary Get authenticated user profile.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMe: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/user`;
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
         * @summary Get the authenticated user roles
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoles: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/roles`;
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
         * Update the authenticated user profile
         * @summary Update the authenticated user
         * @param {UserUpdate} userUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUserProfile: async (userUpdate: UserUpdate, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userUpdate' is not null or undefined
            if (userUpdate === null || userUpdate === undefined) {
                throw new RequiredError('userUpdate','Required parameter userUpdate was null or undefined when calling updateUserProfile.');
            }
            const localVarPath = `/user`;
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
            const needsSerialization = (typeof userUpdate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(userUpdate !== undefined ? userUpdate : {}) : (userUpdate || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Create a new user.
         * @summary Register a new user
         * @param {UserCreate} userCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createUser(userCreate: UserCreate, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreatedContent>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).createUser(userCreate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get authenticated user profile
         * @summary Get authenticated user profile.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMe(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserPrivate>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).getMe(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get the authenticated user roles
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRoles(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).getRoles(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update the authenticated user profile
         * @summary Update the authenticated user
         * @param {UserUpdate} userUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateUserProfile(userUpdate: UserUpdate, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateAccepted>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).updateUserProfile(userUpdate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Create a new user.
         * @summary Register a new user
         * @param {UserCreate} userCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUser(userCreate: UserCreate, options?: any): AxiosPromise<CreatedContent> {
            return UserApiFp(configuration).createUser(userCreate, options).then((request) => request(axios, basePath));
        },
        /**
         * Get authenticated user profile
         * @summary Get authenticated user profile.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMe(options?: any): AxiosPromise<UserPrivate> {
            return UserApiFp(configuration).getMe(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get the authenticated user roles
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoles(options?: any): AxiosPromise<Array<string>> {
            return UserApiFp(configuration).getRoles(options).then((request) => request(axios, basePath));
        },
        /**
         * Update the authenticated user profile
         * @summary Update the authenticated user
         * @param {UserUpdate} userUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUserProfile(userUpdate: UserUpdate, options?: any): AxiosPromise<UpdateAccepted> {
            return UserApiFp(configuration).updateUserProfile(userUpdate, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createUser operation in UserApi.
 * @export
 * @interface UserApiCreateUserRequest
 */
export interface UserApiCreateUserRequest {
    /**
     * 
     * @type {UserCreate}
     * @memberof UserApiCreateUser
     */
    readonly userCreate: UserCreate
}

/**
 * Request parameters for updateUserProfile operation in UserApi.
 * @export
 * @interface UserApiUpdateUserProfileRequest
 */
export interface UserApiUpdateUserProfileRequest {
    /**
     * 
     * @type {UserUpdate}
     * @memberof UserApiUpdateUserProfile
     */
    readonly userUpdate: UserUpdate
}

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
    /**
     * Create a new user.
     * @summary Register a new user
     * @param {UserApiCreateUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public createUser(requestParameters: UserApiCreateUserRequest, options?: any) {
        return UserApiFp(this.configuration).createUser(requestParameters.userCreate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get authenticated user profile
     * @summary Get authenticated user profile.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getMe(options?: any) {
        return UserApiFp(this.configuration).getMe(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get the authenticated user roles
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getRoles(options?: any) {
        return UserApiFp(this.configuration).getRoles(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update the authenticated user profile
     * @summary Update the authenticated user
     * @param {UserApiUpdateUserProfileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public updateUserProfile(requestParameters: UserApiUpdateUserProfileRequest, options?: any) {
        return UserApiFp(this.configuration).updateUserProfile(requestParameters.userUpdate, options).then((request) => request(this.axios, this.basePath));
    }
}
