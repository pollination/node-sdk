/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.7.1
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
import type { FileMetaList } from '../models';
// @ts-ignore
import type { HTTPValidationError } from '../models';
// @ts-ignore
import type { KeyRequest } from '../models';
// @ts-ignore
import type { S3UploadRequest } from '../models';
/**
 * ArtifactsApi - axios parameter creator
 * @export
 */
export const ArtifactsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get an Artifact upload link.
         * @param {string} owner 
         * @param {string} name 
         * @param {KeyRequest} keyRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createArtifact: async (owner: string, name: string, keyRequest: KeyRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'owner' is not null or undefined
            assertParamExists('createArtifact', 'owner', owner)
            // verify required parameter 'name' is not null or undefined
            assertParamExists('createArtifact', 'name', name)
            // verify required parameter 'keyRequest' is not null or undefined
            assertParamExists('createArtifact', 'keyRequest', keyRequest)
            const localVarPath = `/projects/{owner}/{name}/artifacts`
                .replace(`{${"owner"}}`, encodeURIComponent(String(owner)))
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
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

            // authentication APIKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "x-pollination-token", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(keyRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete one or many artifacts by key/prefix
         * @param {string} owner 
         * @param {string} name 
         * @param {Array<string>} [path] The path to an file within a project folder
         * @param {number} [page] Page number starting from 1
         * @param {number} [perPage] Number of items per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteArtifact: async (owner: string, name: string, path?: Array<string>, page?: number, perPage?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'owner' is not null or undefined
            assertParamExists('deleteArtifact', 'owner', owner)
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteArtifact', 'name', name)
            const localVarPath = `/projects/{owner}/{name}/artifacts`
                .replace(`{${"owner"}}`, encodeURIComponent(String(owner)))
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

            if (path) {
                localVarQueryParameter['path'] = path;
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
         * @summary Download an artifact from the project folder
         * @param {string} owner 
         * @param {string} name 
         * @param {string} [path] The path to an file within a project folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downloadArtifact: async (owner: string, name: string, path?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'owner' is not null or undefined
            assertParamExists('downloadArtifact', 'owner', owner)
            // verify required parameter 'name' is not null or undefined
            assertParamExists('downloadArtifact', 'name', name)
            const localVarPath = `/projects/{owner}/{name}/artifacts/download`
                .replace(`{${"owner"}}`, encodeURIComponent(String(owner)))
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

            if (path !== undefined) {
                localVarQueryParameter['path'] = path;
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
         * @summary List artifacts in a project folder
         * @param {string} owner 
         * @param {string} name 
         * @param {Array<string>} [path] The path to an file within a project folder
         * @param {number} [page] Page number starting from 1
         * @param {number} [perPage] Number of items per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listArtifacts: async (owner: string, name: string, path?: Array<string>, page?: number, perPage?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'owner' is not null or undefined
            assertParamExists('listArtifacts', 'owner', owner)
            // verify required parameter 'name' is not null or undefined
            assertParamExists('listArtifacts', 'name', name)
            const localVarPath = `/projects/{owner}/{name}/artifacts`
                .replace(`{${"owner"}}`, encodeURIComponent(String(owner)))
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

            if (path) {
                localVarQueryParameter['path'] = path;
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
 * ArtifactsApi - functional programming interface
 * @export
 */
export const ArtifactsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ArtifactsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get an Artifact upload link.
         * @param {string} owner 
         * @param {string} name 
         * @param {KeyRequest} keyRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createArtifact(owner: string, name: string, keyRequest: KeyRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<S3UploadRequest>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createArtifact(owner, name, keyRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ArtifactsApi.createArtifact']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Delete one or many artifacts by key/prefix
         * @param {string} owner 
         * @param {string} name 
         * @param {Array<string>} [path] The path to an file within a project folder
         * @param {number} [page] Page number starting from 1
         * @param {number} [perPage] Number of items per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteArtifact(owner: string, name: string, path?: Array<string>, page?: number, perPage?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteArtifact(owner, name, path, page, perPage, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ArtifactsApi.deleteArtifact']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Download an artifact from the project folder
         * @param {string} owner 
         * @param {string} name 
         * @param {string} [path] The path to an file within a project folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async downloadArtifact(owner: string, name: string, path?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.downloadArtifact(owner, name, path, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ArtifactsApi.downloadArtifact']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary List artifacts in a project folder
         * @param {string} owner 
         * @param {string} name 
         * @param {Array<string>} [path] The path to an file within a project folder
         * @param {number} [page] Page number starting from 1
         * @param {number} [perPage] Number of items per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listArtifacts(owner: string, name: string, path?: Array<string>, page?: number, perPage?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileMetaList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listArtifacts(owner, name, path, page, perPage, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ArtifactsApi.listArtifacts']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ArtifactsApi - factory interface
 * @export
 */
export const ArtifactsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ArtifactsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get an Artifact upload link.
         * @param {ArtifactsApiCreateArtifactRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createArtifact(requestParameters: ArtifactsApiCreateArtifactRequest, options?: RawAxiosRequestConfig): AxiosPromise<S3UploadRequest> {
            return localVarFp.createArtifact(requestParameters.owner, requestParameters.name, requestParameters.keyRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete one or many artifacts by key/prefix
         * @param {ArtifactsApiDeleteArtifactRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteArtifact(requestParameters: ArtifactsApiDeleteArtifactRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteArtifact(requestParameters.owner, requestParameters.name, requestParameters.path, requestParameters.page, requestParameters.perPage, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Download an artifact from the project folder
         * @param {ArtifactsApiDownloadArtifactRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downloadArtifact(requestParameters: ArtifactsApiDownloadArtifactRequest, options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.downloadArtifact(requestParameters.owner, requestParameters.name, requestParameters.path, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List artifacts in a project folder
         * @param {ArtifactsApiListArtifactsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listArtifacts(requestParameters: ArtifactsApiListArtifactsRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileMetaList> {
            return localVarFp.listArtifacts(requestParameters.owner, requestParameters.name, requestParameters.path, requestParameters.page, requestParameters.perPage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createArtifact operation in ArtifactsApi.
 * @export
 * @interface ArtifactsApiCreateArtifactRequest
 */
export interface ArtifactsApiCreateArtifactRequest {
    /**
     * 
     * @type {string}
     * @memberof ArtifactsApiCreateArtifact
     */
    readonly owner: string

    /**
     * 
     * @type {string}
     * @memberof ArtifactsApiCreateArtifact
     */
    readonly name: string

    /**
     * 
     * @type {KeyRequest}
     * @memberof ArtifactsApiCreateArtifact
     */
    readonly keyRequest: KeyRequest
}

/**
 * Request parameters for deleteArtifact operation in ArtifactsApi.
 * @export
 * @interface ArtifactsApiDeleteArtifactRequest
 */
export interface ArtifactsApiDeleteArtifactRequest {
    /**
     * 
     * @type {string}
     * @memberof ArtifactsApiDeleteArtifact
     */
    readonly owner: string

    /**
     * 
     * @type {string}
     * @memberof ArtifactsApiDeleteArtifact
     */
    readonly name: string

    /**
     * The path to an file within a project folder
     * @type {Array<string>}
     * @memberof ArtifactsApiDeleteArtifact
     */
    readonly path?: Array<string>

    /**
     * Page number starting from 1
     * @type {number}
     * @memberof ArtifactsApiDeleteArtifact
     */
    readonly page?: number

    /**
     * Number of items per page
     * @type {number}
     * @memberof ArtifactsApiDeleteArtifact
     */
    readonly perPage?: number
}

/**
 * Request parameters for downloadArtifact operation in ArtifactsApi.
 * @export
 * @interface ArtifactsApiDownloadArtifactRequest
 */
export interface ArtifactsApiDownloadArtifactRequest {
    /**
     * 
     * @type {string}
     * @memberof ArtifactsApiDownloadArtifact
     */
    readonly owner: string

    /**
     * 
     * @type {string}
     * @memberof ArtifactsApiDownloadArtifact
     */
    readonly name: string

    /**
     * The path to an file within a project folder
     * @type {string}
     * @memberof ArtifactsApiDownloadArtifact
     */
    readonly path?: string
}

/**
 * Request parameters for listArtifacts operation in ArtifactsApi.
 * @export
 * @interface ArtifactsApiListArtifactsRequest
 */
export interface ArtifactsApiListArtifactsRequest {
    /**
     * 
     * @type {string}
     * @memberof ArtifactsApiListArtifacts
     */
    readonly owner: string

    /**
     * 
     * @type {string}
     * @memberof ArtifactsApiListArtifacts
     */
    readonly name: string

    /**
     * The path to an file within a project folder
     * @type {Array<string>}
     * @memberof ArtifactsApiListArtifacts
     */
    readonly path?: Array<string>

    /**
     * Page number starting from 1
     * @type {number}
     * @memberof ArtifactsApiListArtifacts
     */
    readonly page?: number

    /**
     * Number of items per page
     * @type {number}
     * @memberof ArtifactsApiListArtifacts
     */
    readonly perPage?: number
}

/**
 * ArtifactsApi - object-oriented interface
 * @export
 * @class ArtifactsApi
 * @extends {BaseAPI}
 */
export class ArtifactsApi extends BaseAPI {
    /**
     * 
     * @summary Get an Artifact upload link.
     * @param {ArtifactsApiCreateArtifactRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtifactsApi
     */
    public createArtifact(requestParameters: ArtifactsApiCreateArtifactRequest, options?: RawAxiosRequestConfig) {
        return ArtifactsApiFp(this.configuration).createArtifact(requestParameters.owner, requestParameters.name, requestParameters.keyRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete one or many artifacts by key/prefix
     * @param {ArtifactsApiDeleteArtifactRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtifactsApi
     */
    public deleteArtifact(requestParameters: ArtifactsApiDeleteArtifactRequest, options?: RawAxiosRequestConfig) {
        return ArtifactsApiFp(this.configuration).deleteArtifact(requestParameters.owner, requestParameters.name, requestParameters.path, requestParameters.page, requestParameters.perPage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Download an artifact from the project folder
     * @param {ArtifactsApiDownloadArtifactRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtifactsApi
     */
    public downloadArtifact(requestParameters: ArtifactsApiDownloadArtifactRequest, options?: RawAxiosRequestConfig) {
        return ArtifactsApiFp(this.configuration).downloadArtifact(requestParameters.owner, requestParameters.name, requestParameters.path, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List artifacts in a project folder
     * @param {ArtifactsApiListArtifactsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtifactsApi
     */
    public listArtifacts(requestParameters: ArtifactsApiListArtifactsRequest, options?: RawAxiosRequestConfig) {
        return ArtifactsApiFp(this.configuration).listArtifacts(requestParameters.owner, requestParameters.name, requestParameters.path, requestParameters.page, requestParameters.perPage, options).then((request) => request(this.axios, this.basePath));
    }
}

