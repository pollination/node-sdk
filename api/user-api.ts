/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.7.0
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
import type { CreatedContent } from '../models';
// @ts-ignore
import type { HTTPValidationError } from '../models';
// @ts-ignore
import type { OrganizationRole } from '../models';
// @ts-ignore
import type { UpdateAccepted } from '../models';
// @ts-ignore
import type { UserCreate } from '../models';
// @ts-ignore
import type { UserPrivate } from '../models';
// @ts-ignore
import type { UserUpdate } from '../models';
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
        createUser: async (userCreate: UserCreate, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userCreate' is not null or undefined
            assertParamExists('createUser', 'userCreate', userCreate)
            const localVarPath = `/user`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(userCreate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get authenticated user profile
         * @summary Get authenticated user profile.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMe: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user`;
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
         * @summary Get the authenticated user organization roles
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOrganizationRoles: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/organizationr-roles`;
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
         * @summary Get the authenticated user roles
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoles: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/roles`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
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
        updateUserProfile: async (userUpdate: UserUpdate, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userUpdate' is not null or undefined
            assertParamExists('updateUserProfile', 'userUpdate', userUpdate)
            const localVarPath = `/user`;
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

            // authentication APIKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "x-pollination-token", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(userUpdate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
    const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new user.
         * @summary Register a new user
         * @param {UserCreate} userCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createUser(userCreate: UserCreate, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreatedContent>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createUser(userCreate, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserApi.createUser']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get authenticated user profile
         * @summary Get authenticated user profile.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMe(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserPrivate>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMe(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserApi.getMe']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get the authenticated user organization roles
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOrganizationRoles(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<OrganizationRole>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOrganizationRoles(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserApi.getOrganizationRoles']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get the authenticated user roles
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRoles(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoles(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserApi.getRoles']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update the authenticated user profile
         * @summary Update the authenticated user
         * @param {UserUpdate} userUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateUserProfile(userUpdate: UserUpdate, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateAccepted>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateUserProfile(userUpdate, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserApi.updateUserProfile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserApiFp(configuration)
    return {
        /**
         * Create a new user.
         * @summary Register a new user
         * @param {UserApiCreateUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUser(requestParameters: UserApiCreateUserRequest, options?: RawAxiosRequestConfig): AxiosPromise<CreatedContent> {
            return localVarFp.createUser(requestParameters.userCreate, options).then((request) => request(axios, basePath));
        },
        /**
         * Get authenticated user profile
         * @summary Get authenticated user profile.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMe(options?: RawAxiosRequestConfig): AxiosPromise<UserPrivate> {
            return localVarFp.getMe(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get the authenticated user organization roles
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOrganizationRoles(options?: RawAxiosRequestConfig): AxiosPromise<Array<OrganizationRole>> {
            return localVarFp.getOrganizationRoles(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get the authenticated user roles
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoles(options?: RawAxiosRequestConfig): AxiosPromise<Array<string>> {
            return localVarFp.getRoles(options).then((request) => request(axios, basePath));
        },
        /**
         * Update the authenticated user profile
         * @summary Update the authenticated user
         * @param {UserApiUpdateUserProfileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUserProfile(requestParameters: UserApiUpdateUserProfileRequest, options?: RawAxiosRequestConfig): AxiosPromise<UpdateAccepted> {
            return localVarFp.updateUserProfile(requestParameters.userUpdate, options).then((request) => request(axios, basePath));
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
    public createUser(requestParameters: UserApiCreateUserRequest, options?: RawAxiosRequestConfig) {
        return UserApiFp(this.configuration).createUser(requestParameters.userCreate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get authenticated user profile
     * @summary Get authenticated user profile.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getMe(options?: RawAxiosRequestConfig) {
        return UserApiFp(this.configuration).getMe(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get the authenticated user organization roles
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getOrganizationRoles(options?: RawAxiosRequestConfig) {
        return UserApiFp(this.configuration).getOrganizationRoles(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get the authenticated user roles
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getRoles(options?: RawAxiosRequestConfig) {
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
    public updateUserProfile(requestParameters: UserApiUpdateUserProfileRequest, options?: RawAxiosRequestConfig) {
        return UserApiFp(this.configuration).updateUserProfile(requestParameters.userUpdate, options).then((request) => request(this.axios, this.basePath));
    }
}

