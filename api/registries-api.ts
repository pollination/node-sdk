/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.10.20
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
import { Plugin } from '../models';
// @ts-ignore
import { Recipe } from '../models';
// @ts-ignore
import { RepositoryIndex } from '../models';
/**
 * RegistriesApi - axios parameter creator
 * @export
 */
export const RegistriesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get Package
         * @param {string} owner 
         * @param {string} type 
         * @param {string} name 
         * @param {string} digest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackage: async (owner: string, type: string, name: string, digest: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'owner' is not null or undefined
            if (owner === null || owner === undefined) {
                throw new RequiredError('owner','Required parameter owner was null or undefined when calling getPackage.');
            }
            // verify required parameter 'type' is not null or undefined
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling getPackage.');
            }
            // verify required parameter 'name' is not null or undefined
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling getPackage.');
            }
            // verify required parameter 'digest' is not null or undefined
            if (digest === null || digest === undefined) {
                throw new RequiredError('digest','Required parameter digest was null or undefined when calling getPackage.');
            }
            const localVarPath = `/registries/{owner}/{type}/{name}/{digest}`
                .replace(`{${"owner"}}`, encodeURIComponent(String(owner)))
                .replace(`{${"type"}}`, encodeURIComponent(String(type)))
                .replace(`{${"name"}}`, encodeURIComponent(String(name)))
                .replace(`{${"digest"}}`, encodeURIComponent(String(digest)));
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
         * @summary Get Package in JSON format
         * @param {string} owner 
         * @param {string} type 
         * @param {string} name 
         * @param {string} digest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageJson: async (owner: string, type: string, name: string, digest: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'owner' is not null or undefined
            if (owner === null || owner === undefined) {
                throw new RequiredError('owner','Required parameter owner was null or undefined when calling getPackageJson.');
            }
            // verify required parameter 'type' is not null or undefined
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling getPackageJson.');
            }
            // verify required parameter 'name' is not null or undefined
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling getPackageJson.');
            }
            // verify required parameter 'digest' is not null or undefined
            if (digest === null || digest === undefined) {
                throw new RequiredError('digest','Required parameter digest was null or undefined when calling getPackageJson.');
            }
            const localVarPath = `/registries/{owner}/{type}/{name}/{digest}/json`
                .replace(`{${"owner"}}`, encodeURIComponent(String(owner)))
                .replace(`{${"type"}}`, encodeURIComponent(String(type)))
                .replace(`{${"name"}}`, encodeURIComponent(String(name)))
                .replace(`{${"digest"}}`, encodeURIComponent(String(digest)));
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
         * @summary Get Registry Index
         * @param {string} owner 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRegistryIndex: async (owner: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'owner' is not null or undefined
            if (owner === null || owner === undefined) {
                throw new RequiredError('owner','Required parameter owner was null or undefined when calling getRegistryIndex.');
            }
            const localVarPath = `/registries/{owner}/index.json`
                .replace(`{${"owner"}}`, encodeURIComponent(String(owner)));
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
         * @summary Push a plugin to the registry
         * @param {string} owner 
         * @param {any} _package 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postPlugin: async (owner: string, _package: any, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'owner' is not null or undefined
            if (owner === null || owner === undefined) {
                throw new RequiredError('owner','Required parameter owner was null or undefined when calling postPlugin.');
            }
            // verify required parameter '_package' is not null or undefined
            if (_package === null || _package === undefined) {
                throw new RequiredError('_package','Required parameter _package was null or undefined when calling postPlugin.');
            }
            const localVarPath = `/registries/{owner}/plugins`
                .replace(`{${"owner"}}`, encodeURIComponent(String(owner)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();

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


            if (_package !== undefined) { 
                localVarFormParams.append('package', _package as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
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
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Push an Recipe to the registry
         * @param {string} owner 
         * @param {any} _package 
         * @param {string} [authorization] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postRecipe: async (owner: string, _package: any, authorization?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'owner' is not null or undefined
            if (owner === null || owner === undefined) {
                throw new RequiredError('owner','Required parameter owner was null or undefined when calling postRecipe.');
            }
            // verify required parameter '_package' is not null or undefined
            if (_package === null || _package === undefined) {
                throw new RequiredError('_package','Required parameter _package was null or undefined when calling postRecipe.');
            }
            const localVarPath = `/registries/{owner}/recipes`
                .replace(`{${"owner"}}`, encodeURIComponent(String(owner)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();

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

            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['authorization'] = String(authorization);
            }


            if (_package !== undefined) { 
                localVarFormParams.append('package', _package as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
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
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RegistriesApi - functional programming interface
 * @export
 */
export const RegistriesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get Package
         * @param {string} owner 
         * @param {string} type 
         * @param {string} name 
         * @param {string} digest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackage(owner: string, type: string, name: string, digest: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await RegistriesApiAxiosParamCreator(configuration).getPackage(owner, type, name, digest, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get Package in JSON format
         * @param {string} owner 
         * @param {string} type 
         * @param {string} name 
         * @param {string} digest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackageJson(owner: string, type: string, name: string, digest: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Recipe | Plugin>> {
            const localVarAxiosArgs = await RegistriesApiAxiosParamCreator(configuration).getPackageJson(owner, type, name, digest, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get Registry Index
         * @param {string} owner 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRegistryIndex(owner: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RepositoryIndex>> {
            const localVarAxiosArgs = await RegistriesApiAxiosParamCreator(configuration).getRegistryIndex(owner, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Push a plugin to the registry
         * @param {string} owner 
         * @param {any} _package 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postPlugin(owner: string, _package: any, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await RegistriesApiAxiosParamCreator(configuration).postPlugin(owner, _package, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Push an Recipe to the registry
         * @param {string} owner 
         * @param {any} _package 
         * @param {string} [authorization] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postRecipe(owner: string, _package: any, authorization?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await RegistriesApiAxiosParamCreator(configuration).postRecipe(owner, _package, authorization, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * RegistriesApi - factory interface
 * @export
 */
export const RegistriesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Get Package
         * @param {string} owner 
         * @param {string} type 
         * @param {string} name 
         * @param {string} digest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackage(owner: string, type: string, name: string, digest: string, options?: any): AxiosPromise<any> {
            return RegistriesApiFp(configuration).getPackage(owner, type, name, digest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Package in JSON format
         * @param {string} owner 
         * @param {string} type 
         * @param {string} name 
         * @param {string} digest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageJson(owner: string, type: string, name: string, digest: string, options?: any): AxiosPromise<Recipe | Plugin> {
            return RegistriesApiFp(configuration).getPackageJson(owner, type, name, digest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Registry Index
         * @param {string} owner 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRegistryIndex(owner: string, options?: any): AxiosPromise<RepositoryIndex> {
            return RegistriesApiFp(configuration).getRegistryIndex(owner, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Push a plugin to the registry
         * @param {string} owner 
         * @param {any} _package 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postPlugin(owner: string, _package: any, options?: any): AxiosPromise<any> {
            return RegistriesApiFp(configuration).postPlugin(owner, _package, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Push an Recipe to the registry
         * @param {string} owner 
         * @param {any} _package 
         * @param {string} [authorization] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postRecipe(owner: string, _package: any, authorization?: string, options?: any): AxiosPromise<any> {
            return RegistriesApiFp(configuration).postRecipe(owner, _package, authorization, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RegistriesApi - interface
 * @export
 * @interface RegistriesApi
 */
export interface RegistriesApiInterface {
    /**
     * 
     * @summary Get Package
     * @param {string} owner 
     * @param {string} type 
     * @param {string} name 
     * @param {string} digest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistriesApiInterface
     */
    getPackage(owner: string, type: string, name: string, digest: string, options?: any): AxiosPromise<any>;

    /**
     * 
     * @summary Get Package in JSON format
     * @param {string} owner 
     * @param {string} type 
     * @param {string} name 
     * @param {string} digest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistriesApiInterface
     */
    getPackageJson(owner: string, type: string, name: string, digest: string, options?: any): AxiosPromise<Recipe | Plugin>;

    /**
     * 
     * @summary Get Registry Index
     * @param {string} owner 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistriesApiInterface
     */
    getRegistryIndex(owner: string, options?: any): AxiosPromise<RepositoryIndex>;

    /**
     * 
     * @summary Push a plugin to the registry
     * @param {string} owner 
     * @param {any} _package 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistriesApiInterface
     */
    postPlugin(owner: string, _package: any, options?: any): AxiosPromise<any>;

    /**
     * 
     * @summary Push an Recipe to the registry
     * @param {string} owner 
     * @param {any} _package 
     * @param {string} [authorization] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistriesApiInterface
     */
    postRecipe(owner: string, _package: any, authorization?: string, options?: any): AxiosPromise<any>;

}

/**
 * RegistriesApi - object-oriented interface
 * @export
 * @class RegistriesApi
 * @extends {BaseAPI}
 */
export class RegistriesApi extends BaseAPI implements RegistriesApiInterface {
    /**
     * 
     * @summary Get Package
     * @param {string} owner 
     * @param {string} type 
     * @param {string} name 
     * @param {string} digest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistriesApi
     */
    public getPackage(owner: string, type: string, name: string, digest: string, options?: any) {
        return RegistriesApiFp(this.configuration).getPackage(owner, type, name, digest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Package in JSON format
     * @param {string} owner 
     * @param {string} type 
     * @param {string} name 
     * @param {string} digest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistriesApi
     */
    public getPackageJson(owner: string, type: string, name: string, digest: string, options?: any) {
        return RegistriesApiFp(this.configuration).getPackageJson(owner, type, name, digest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Registry Index
     * @param {string} owner 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistriesApi
     */
    public getRegistryIndex(owner: string, options?: any) {
        return RegistriesApiFp(this.configuration).getRegistryIndex(owner, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Push a plugin to the registry
     * @param {string} owner 
     * @param {any} _package 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistriesApi
     */
    public postPlugin(owner: string, _package: any, options?: any) {
        return RegistriesApiFp(this.configuration).postPlugin(owner, _package, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Push an Recipe to the registry
     * @param {string} owner 
     * @param {any} _package 
     * @param {string} [authorization] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistriesApi
     */
    public postRecipe(owner: string, _package: any, authorization?: string, options?: any) {
        return RegistriesApiFp(this.configuration).postRecipe(owner, _package, authorization, options).then((request) => request(this.axios, this.basePath));
    }
}
