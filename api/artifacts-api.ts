/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: 0.9.2
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
import { FileMeta } from '../models';
// @ts-ignore
import { HTTPValidationError } from '../models';
// @ts-ignore
import { KeyRequest } from '../models';
// @ts-ignore
import { S3UploadRequest } from '../models';
// @ts-ignore
import { UpdateAccepted } from '../models';
/**
 * ArtifactsApi - axios parameter creator
 * @export
 */
export const ArtifactsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new artifact.
         * @summary Get an Artifact upload link.
         * @param {string} owner 
         * @param {string} name 
         * @param {KeyRequest} keyRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createArtifact: async (owner: string, name: string, keyRequest: KeyRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'owner' is not null or undefined
            if (owner === null || owner === undefined) {
                throw new RequiredError('owner','Required parameter owner was null or undefined when calling createArtifact.');
            }
            // verify required parameter 'name' is not null or undefined
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling createArtifact.');
            }
            // verify required parameter 'keyRequest' is not null or undefined
            if (keyRequest === null || keyRequest === undefined) {
                throw new RequiredError('keyRequest','Required parameter keyRequest was null or undefined when calling createArtifact.');
            }
            const localVarPath = `/projects/{owner}/{name}/artifacts`
                .replace(`{${"owner"}}`, encodeURIComponent(String(owner)))
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CompulsoryAuth required
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
            const needsSerialization = (typeof keyRequest !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(keyRequest !== undefined ? keyRequest : {}) : (keyRequest || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete one or multiple artifacts based on key prefix
         * @summary Delete one or many artifacts by key/prefix
         * @param {string} owner 
         * @param {string} name 
         * @param {Array<string>} [path] The path to an file within a project folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteArtifact: async (owner: string, name: string, path?: Array<string>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'owner' is not null or undefined
            if (owner === null || owner === undefined) {
                throw new RequiredError('owner','Required parameter owner was null or undefined when calling deleteArtifact.');
            }
            // verify required parameter 'name' is not null or undefined
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling deleteArtifact.');
            }
            const localVarPath = `/projects/{owner}/{name}/artifacts`
                .replace(`{${"owner"}}`, encodeURIComponent(String(owner)))
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CompulsoryAuth required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (path) {
                localVarQueryParameter['path'] = path;
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
         * Retrieve a list of artifacts.
         * @summary Download an artifact from the project folder
         * @param {string} owner 
         * @param {string} name 
         * @param {string} [path] The path to an file within a project folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downloadArtifact: async (owner: string, name: string, path?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'owner' is not null or undefined
            if (owner === null || owner === undefined) {
                throw new RequiredError('owner','Required parameter owner was null or undefined when calling downloadArtifact.');
            }
            // verify required parameter 'name' is not null or undefined
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling downloadArtifact.');
            }
            const localVarPath = `/projects/{owner}/{name}/artifacts/download`
                .replace(`{${"owner"}}`, encodeURIComponent(String(owner)))
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

            // authentication OptionalAuth required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (path !== undefined) {
                localVarQueryParameter['path'] = path;
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
         * Retrieve a list of artifacts.
         * @summary List artifacts in a project folder
         * @param {string} owner 
         * @param {string} name 
         * @param {number} [page] Page number starting from 1
         * @param {number} [perPage] Number of items per page
         * @param {Array<string>} [path] The path to an file within a project folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listArtifacts: async (owner: string, name: string, page?: number, perPage?: number, path?: Array<string>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'owner' is not null or undefined
            if (owner === null || owner === undefined) {
                throw new RequiredError('owner','Required parameter owner was null or undefined when calling listArtifacts.');
            }
            // verify required parameter 'name' is not null or undefined
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling listArtifacts.');
            }
            const localVarPath = `/projects/{owner}/{name}/artifacts`
                .replace(`{${"owner"}}`, encodeURIComponent(String(owner)))
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

            // authentication OptionalAuth required
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

            if (path) {
                localVarQueryParameter['path'] = path;
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
 * ArtifactsApi - functional programming interface
 * @export
 */
export const ArtifactsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Create a new artifact.
         * @summary Get an Artifact upload link.
         * @param {string} owner 
         * @param {string} name 
         * @param {KeyRequest} keyRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createArtifact(owner: string, name: string, keyRequest: KeyRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<S3UploadRequest>> {
            const localVarAxiosArgs = await ArtifactsApiAxiosParamCreator(configuration).createArtifact(owner, name, keyRequest, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete one or multiple artifacts based on key prefix
         * @summary Delete one or many artifacts by key/prefix
         * @param {string} owner 
         * @param {string} name 
         * @param {Array<string>} [path] The path to an file within a project folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteArtifact(owner: string, name: string, path?: Array<string>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateAccepted>> {
            const localVarAxiosArgs = await ArtifactsApiAxiosParamCreator(configuration).deleteArtifact(owner, name, path, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve a list of artifacts.
         * @summary Download an artifact from the project folder
         * @param {string} owner 
         * @param {string} name 
         * @param {string} [path] The path to an file within a project folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async downloadArtifact(owner: string, name: string, path?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await ArtifactsApiAxiosParamCreator(configuration).downloadArtifact(owner, name, path, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve a list of artifacts.
         * @summary List artifacts in a project folder
         * @param {string} owner 
         * @param {string} name 
         * @param {number} [page] Page number starting from 1
         * @param {number} [perPage] Number of items per page
         * @param {Array<string>} [path] The path to an file within a project folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listArtifacts(owner: string, name: string, page?: number, perPage?: number, path?: Array<string>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<FileMeta>>> {
            const localVarAxiosArgs = await ArtifactsApiAxiosParamCreator(configuration).listArtifacts(owner, name, page, perPage, path, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ArtifactsApi - factory interface
 * @export
 */
export const ArtifactsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Create a new artifact.
         * @summary Get an Artifact upload link.
         * @param {string} owner 
         * @param {string} name 
         * @param {KeyRequest} keyRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createArtifact(owner: string, name: string, keyRequest: KeyRequest, options?: any): AxiosPromise<S3UploadRequest> {
            return ArtifactsApiFp(configuration).createArtifact(owner, name, keyRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete one or multiple artifacts based on key prefix
         * @summary Delete one or many artifacts by key/prefix
         * @param {string} owner 
         * @param {string} name 
         * @param {Array<string>} [path] The path to an file within a project folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteArtifact(owner: string, name: string, path?: Array<string>, options?: any): AxiosPromise<UpdateAccepted> {
            return ArtifactsApiFp(configuration).deleteArtifact(owner, name, path, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a list of artifacts.
         * @summary Download an artifact from the project folder
         * @param {string} owner 
         * @param {string} name 
         * @param {string} [path] The path to an file within a project folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downloadArtifact(owner: string, name: string, path?: string, options?: any): AxiosPromise<object> {
            return ArtifactsApiFp(configuration).downloadArtifact(owner, name, path, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a list of artifacts.
         * @summary List artifacts in a project folder
         * @param {string} owner 
         * @param {string} name 
         * @param {number} [page] Page number starting from 1
         * @param {number} [perPage] Number of items per page
         * @param {Array<string>} [path] The path to an file within a project folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listArtifacts(owner: string, name: string, page?: number, perPage?: number, path?: Array<string>, options?: any): AxiosPromise<Array<FileMeta>> {
            return ArtifactsApiFp(configuration).listArtifacts(owner, name, page, perPage, path, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ArtifactsApi - interface
 * @export
 * @interface ArtifactsApi
 */
export interface ArtifactsApiInterface {
    /**
     * Create a new artifact.
     * @summary Get an Artifact upload link.
     * @param {string} owner 
     * @param {string} name 
     * @param {KeyRequest} keyRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtifactsApiInterface
     */
    createArtifact(owner: string, name: string, keyRequest: KeyRequest, options?: any): AxiosPromise<S3UploadRequest>;

    /**
     * Delete one or multiple artifacts based on key prefix
     * @summary Delete one or many artifacts by key/prefix
     * @param {string} owner 
     * @param {string} name 
     * @param {Array<string>} [path] The path to an file within a project folder
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtifactsApiInterface
     */
    deleteArtifact(owner: string, name: string, path?: Array<string>, options?: any): AxiosPromise<UpdateAccepted>;

    /**
     * Retrieve a list of artifacts.
     * @summary Download an artifact from the project folder
     * @param {string} owner 
     * @param {string} name 
     * @param {string} [path] The path to an file within a project folder
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtifactsApiInterface
     */
    downloadArtifact(owner: string, name: string, path?: string, options?: any): AxiosPromise<object>;

    /**
     * Retrieve a list of artifacts.
     * @summary List artifacts in a project folder
     * @param {string} owner 
     * @param {string} name 
     * @param {number} [page] Page number starting from 1
     * @param {number} [perPage] Number of items per page
     * @param {Array<string>} [path] The path to an file within a project folder
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtifactsApiInterface
     */
    listArtifacts(owner: string, name: string, page?: number, perPage?: number, path?: Array<string>, options?: any): AxiosPromise<Array<FileMeta>>;

}

/**
 * ArtifactsApi - object-oriented interface
 * @export
 * @class ArtifactsApi
 * @extends {BaseAPI}
 */
export class ArtifactsApi extends BaseAPI implements ArtifactsApiInterface {
    /**
     * Create a new artifact.
     * @summary Get an Artifact upload link.
     * @param {string} owner 
     * @param {string} name 
     * @param {KeyRequest} keyRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtifactsApi
     */
    public createArtifact(owner: string, name: string, keyRequest: KeyRequest, options?: any) {
        return ArtifactsApiFp(this.configuration).createArtifact(owner, name, keyRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete one or multiple artifacts based on key prefix
     * @summary Delete one or many artifacts by key/prefix
     * @param {string} owner 
     * @param {string} name 
     * @param {Array<string>} [path] The path to an file within a project folder
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtifactsApi
     */
    public deleteArtifact(owner: string, name: string, path?: Array<string>, options?: any) {
        return ArtifactsApiFp(this.configuration).deleteArtifact(owner, name, path, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve a list of artifacts.
     * @summary Download an artifact from the project folder
     * @param {string} owner 
     * @param {string} name 
     * @param {string} [path] The path to an file within a project folder
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtifactsApi
     */
    public downloadArtifact(owner: string, name: string, path?: string, options?: any) {
        return ArtifactsApiFp(this.configuration).downloadArtifact(owner, name, path, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve a list of artifacts.
     * @summary List artifacts in a project folder
     * @param {string} owner 
     * @param {string} name 
     * @param {number} [page] Page number starting from 1
     * @param {number} [perPage] Number of items per page
     * @param {Array<string>} [path] The path to an file within a project folder
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtifactsApi
     */
    public listArtifacts(owner: string, name: string, page?: number, perPage?: number, path?: Array<string>, options?: any) {
        return ArtifactsApiFp(this.configuration).listArtifacts(owner, name, page, perPage, path, options).then((request) => request(this.axios, this.basePath));
    }
}
