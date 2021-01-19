/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.10.16
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
import { UserPrivate } from '../models';
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
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
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    return {
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
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
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
    };
};

/**
 * UserApi - interface
 * @export
 * @interface UserApi
 */
export interface UserApiInterface {
    /**
     * Get authenticated user profile
     * @summary Get authenticated user profile.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    getMe(options?: any): AxiosPromise<UserPrivate>;

    /**
     * 
     * @summary Get the authenticated user roles
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    getRoles(options?: any): AxiosPromise<Array<string>>;

}

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI implements UserApiInterface {
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
}
