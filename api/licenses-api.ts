/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.4.2
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
import type { ActivationList } from '../models';
// @ts-ignore
import type { HTTPValidationError } from '../models';
// @ts-ignore
import type { LicensePoolAccessPolicyList } from '../models';
// @ts-ignore
import type { LicensePoolList } from '../models';
// @ts-ignore
import type { LicensePoolPolicySubjectList } from '../models';
// @ts-ignore
import type { LicensePoolPublic } from '../models';
// @ts-ignore
import type { LicensePoolUpdate } from '../models';
// @ts-ignore
import type { LicensePublic } from '../models';
/**
 * LicensesApi - axios parameter creator
 * @export
 */
export const LicensesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete the activation
         * @param {string} poolId 
         * @param {string} activationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteActivation: async (poolId: string, activationId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'poolId' is not null or undefined
            assertParamExists('deleteActivation', 'poolId', poolId)
            // verify required parameter 'activationId' is not null or undefined
            assertParamExists('deleteActivation', 'activationId', activationId)
            const localVarPath = `/licenses/pools/{pool_id}/activations/{activation_id}`
                .replace(`{${"pool_id"}}`, encodeURIComponent(String(poolId)))
                .replace(`{${"activation_id"}}`, encodeURIComponent(String(activationId)));
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
         * 
         * @summary Get license pools available to authenticated user
         * @param {Array<string>} [owner] Owner of the project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAvailablePools: async (owner?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/licenses/pools`;
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

            if (owner) {
                localVarQueryParameter['owner'] = owner;
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
         * @summary Get the activations for the license
         * @param {string} poolId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLicenseActivations: async (poolId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'poolId' is not null or undefined
            assertParamExists('getLicenseActivations', 'poolId', poolId)
            const localVarPath = `/licenses/pools/{pool_id}/activations`
                .replace(`{${"pool_id"}}`, encodeURIComponent(String(poolId)));
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
         * @summary Get the license associated with a pool
         * @param {string} poolId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPoolLicense: async (poolId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'poolId' is not null or undefined
            assertParamExists('getPoolLicense', 'poolId', poolId)
            const localVarPath = `/licenses/pools/{pool_id}/license`
                .replace(`{${"pool_id"}}`, encodeURIComponent(String(poolId)));
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
         * @summary Grant access to the license pool
         * @param {string} poolId 
         * @param {LicensePoolAccessPolicyList} licensePoolAccessPolicyList 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        grantAccessToPool: async (poolId: string, licensePoolAccessPolicyList: LicensePoolAccessPolicyList, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'poolId' is not null or undefined
            assertParamExists('grantAccessToPool', 'poolId', poolId)
            // verify required parameter 'licensePoolAccessPolicyList' is not null or undefined
            assertParamExists('grantAccessToPool', 'licensePoolAccessPolicyList', licensePoolAccessPolicyList)
            const localVarPath = `/licenses/pools/{pool_id}/permissions`
                .replace(`{${"pool_id"}}`, encodeURIComponent(String(poolId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(licensePoolAccessPolicyList, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Regenerate the license associated with the pool
         * @param {string} poolId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        regenerateLicensePool: async (poolId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'poolId' is not null or undefined
            assertParamExists('regenerateLicensePool', 'poolId', poolId)
            const localVarPath = `/licenses/pools/{pool_id}/regenerate`
                .replace(`{${"pool_id"}}`, encodeURIComponent(String(poolId)));
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
         * @summary Revoke access to the license pool
         * @param {string} poolId 
         * @param {LicensePoolPolicySubjectList} licensePoolPolicySubjectList 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        revokeAccessToPool: async (poolId: string, licensePoolPolicySubjectList: LicensePoolPolicySubjectList, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'poolId' is not null or undefined
            assertParamExists('revokeAccessToPool', 'poolId', poolId)
            // verify required parameter 'licensePoolPolicySubjectList' is not null or undefined
            assertParamExists('revokeAccessToPool', 'licensePoolPolicySubjectList', licensePoolPolicySubjectList)
            const localVarPath = `/licenses/pools/{pool_id}/permissions`
                .replace(`{${"pool_id"}}`, encodeURIComponent(String(poolId)));
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(licensePoolPolicySubjectList, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update the license pool
         * @param {string} poolId 
         * @param {LicensePoolUpdate} licensePoolUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateLicensePool: async (poolId: string, licensePoolUpdate: LicensePoolUpdate, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'poolId' is not null or undefined
            assertParamExists('updateLicensePool', 'poolId', poolId)
            // verify required parameter 'licensePoolUpdate' is not null or undefined
            assertParamExists('updateLicensePool', 'licensePoolUpdate', licensePoolUpdate)
            const localVarPath = `/licenses/pools/{pool_id}`
                .replace(`{${"pool_id"}}`, encodeURIComponent(String(poolId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(licensePoolUpdate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LicensesApi - functional programming interface
 * @export
 */
export const LicensesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LicensesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Delete the activation
         * @param {string} poolId 
         * @param {string} activationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteActivation(poolId: string, activationId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteActivation(poolId, activationId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LicensesApi.deleteActivation']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get license pools available to authenticated user
         * @param {Array<string>} [owner] Owner of the project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAvailablePools(owner?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LicensePoolList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAvailablePools(owner, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LicensesApi.getAvailablePools']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get the activations for the license
         * @param {string} poolId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLicenseActivations(poolId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ActivationList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLicenseActivations(poolId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LicensesApi.getLicenseActivations']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get the license associated with a pool
         * @param {string} poolId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPoolLicense(poolId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LicensePublic>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPoolLicense(poolId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LicensesApi.getPoolLicense']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Grant access to the license pool
         * @param {string} poolId 
         * @param {LicensePoolAccessPolicyList} licensePoolAccessPolicyList 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async grantAccessToPool(poolId: string, licensePoolAccessPolicyList: LicensePoolAccessPolicyList, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LicensePoolPublic>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.grantAccessToPool(poolId, licensePoolAccessPolicyList, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LicensesApi.grantAccessToPool']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Regenerate the license associated with the pool
         * @param {string} poolId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async regenerateLicensePool(poolId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.regenerateLicensePool(poolId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LicensesApi.regenerateLicensePool']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Revoke access to the license pool
         * @param {string} poolId 
         * @param {LicensePoolPolicySubjectList} licensePoolPolicySubjectList 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async revokeAccessToPool(poolId: string, licensePoolPolicySubjectList: LicensePoolPolicySubjectList, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LicensePoolPublic>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.revokeAccessToPool(poolId, licensePoolPolicySubjectList, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LicensesApi.revokeAccessToPool']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Update the license pool
         * @param {string} poolId 
         * @param {LicensePoolUpdate} licensePoolUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateLicensePool(poolId: string, licensePoolUpdate: LicensePoolUpdate, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateLicensePool(poolId, licensePoolUpdate, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LicensesApi.updateLicensePool']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * LicensesApi - factory interface
 * @export
 */
export const LicensesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LicensesApiFp(configuration)
    return {
        /**
         * 
         * @summary Delete the activation
         * @param {LicensesApiDeleteActivationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteActivation(requestParameters: LicensesApiDeleteActivationRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteActivation(requestParameters.poolId, requestParameters.activationId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get license pools available to authenticated user
         * @param {LicensesApiGetAvailablePoolsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAvailablePools(requestParameters: LicensesApiGetAvailablePoolsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<LicensePoolList> {
            return localVarFp.getAvailablePools(requestParameters.owner, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get the activations for the license
         * @param {LicensesApiGetLicenseActivationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLicenseActivations(requestParameters: LicensesApiGetLicenseActivationsRequest, options?: RawAxiosRequestConfig): AxiosPromise<ActivationList> {
            return localVarFp.getLicenseActivations(requestParameters.poolId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get the license associated with a pool
         * @param {LicensesApiGetPoolLicenseRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPoolLicense(requestParameters: LicensesApiGetPoolLicenseRequest, options?: RawAxiosRequestConfig): AxiosPromise<LicensePublic> {
            return localVarFp.getPoolLicense(requestParameters.poolId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Grant access to the license pool
         * @param {LicensesApiGrantAccessToPoolRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        grantAccessToPool(requestParameters: LicensesApiGrantAccessToPoolRequest, options?: RawAxiosRequestConfig): AxiosPromise<LicensePoolPublic> {
            return localVarFp.grantAccessToPool(requestParameters.poolId, requestParameters.licensePoolAccessPolicyList, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Regenerate the license associated with the pool
         * @param {LicensesApiRegenerateLicensePoolRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        regenerateLicensePool(requestParameters: LicensesApiRegenerateLicensePoolRequest, options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.regenerateLicensePool(requestParameters.poolId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Revoke access to the license pool
         * @param {LicensesApiRevokeAccessToPoolRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        revokeAccessToPool(requestParameters: LicensesApiRevokeAccessToPoolRequest, options?: RawAxiosRequestConfig): AxiosPromise<LicensePoolPublic> {
            return localVarFp.revokeAccessToPool(requestParameters.poolId, requestParameters.licensePoolPolicySubjectList, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update the license pool
         * @param {LicensesApiUpdateLicensePoolRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateLicensePool(requestParameters: LicensesApiUpdateLicensePoolRequest, options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.updateLicensePool(requestParameters.poolId, requestParameters.licensePoolUpdate, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deleteActivation operation in LicensesApi.
 * @export
 * @interface LicensesApiDeleteActivationRequest
 */
export interface LicensesApiDeleteActivationRequest {
    /**
     * 
     * @type {string}
     * @memberof LicensesApiDeleteActivation
     */
    readonly poolId: string

    /**
     * 
     * @type {string}
     * @memberof LicensesApiDeleteActivation
     */
    readonly activationId: string
}

/**
 * Request parameters for getAvailablePools operation in LicensesApi.
 * @export
 * @interface LicensesApiGetAvailablePoolsRequest
 */
export interface LicensesApiGetAvailablePoolsRequest {
    /**
     * Owner of the project
     * @type {Array<string>}
     * @memberof LicensesApiGetAvailablePools
     */
    readonly owner?: Array<string>
}

/**
 * Request parameters for getLicenseActivations operation in LicensesApi.
 * @export
 * @interface LicensesApiGetLicenseActivationsRequest
 */
export interface LicensesApiGetLicenseActivationsRequest {
    /**
     * 
     * @type {string}
     * @memberof LicensesApiGetLicenseActivations
     */
    readonly poolId: string
}

/**
 * Request parameters for getPoolLicense operation in LicensesApi.
 * @export
 * @interface LicensesApiGetPoolLicenseRequest
 */
export interface LicensesApiGetPoolLicenseRequest {
    /**
     * 
     * @type {string}
     * @memberof LicensesApiGetPoolLicense
     */
    readonly poolId: string
}

/**
 * Request parameters for grantAccessToPool operation in LicensesApi.
 * @export
 * @interface LicensesApiGrantAccessToPoolRequest
 */
export interface LicensesApiGrantAccessToPoolRequest {
    /**
     * 
     * @type {string}
     * @memberof LicensesApiGrantAccessToPool
     */
    readonly poolId: string

    /**
     * 
     * @type {LicensePoolAccessPolicyList}
     * @memberof LicensesApiGrantAccessToPool
     */
    readonly licensePoolAccessPolicyList: LicensePoolAccessPolicyList
}

/**
 * Request parameters for regenerateLicensePool operation in LicensesApi.
 * @export
 * @interface LicensesApiRegenerateLicensePoolRequest
 */
export interface LicensesApiRegenerateLicensePoolRequest {
    /**
     * 
     * @type {string}
     * @memberof LicensesApiRegenerateLicensePool
     */
    readonly poolId: string
}

/**
 * Request parameters for revokeAccessToPool operation in LicensesApi.
 * @export
 * @interface LicensesApiRevokeAccessToPoolRequest
 */
export interface LicensesApiRevokeAccessToPoolRequest {
    /**
     * 
     * @type {string}
     * @memberof LicensesApiRevokeAccessToPool
     */
    readonly poolId: string

    /**
     * 
     * @type {LicensePoolPolicySubjectList}
     * @memberof LicensesApiRevokeAccessToPool
     */
    readonly licensePoolPolicySubjectList: LicensePoolPolicySubjectList
}

/**
 * Request parameters for updateLicensePool operation in LicensesApi.
 * @export
 * @interface LicensesApiUpdateLicensePoolRequest
 */
export interface LicensesApiUpdateLicensePoolRequest {
    /**
     * 
     * @type {string}
     * @memberof LicensesApiUpdateLicensePool
     */
    readonly poolId: string

    /**
     * 
     * @type {LicensePoolUpdate}
     * @memberof LicensesApiUpdateLicensePool
     */
    readonly licensePoolUpdate: LicensePoolUpdate
}

/**
 * LicensesApi - object-oriented interface
 * @export
 * @class LicensesApi
 * @extends {BaseAPI}
 */
export class LicensesApi extends BaseAPI {
    /**
     * 
     * @summary Delete the activation
     * @param {LicensesApiDeleteActivationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LicensesApi
     */
    public deleteActivation(requestParameters: LicensesApiDeleteActivationRequest, options?: RawAxiosRequestConfig) {
        return LicensesApiFp(this.configuration).deleteActivation(requestParameters.poolId, requestParameters.activationId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get license pools available to authenticated user
     * @param {LicensesApiGetAvailablePoolsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LicensesApi
     */
    public getAvailablePools(requestParameters: LicensesApiGetAvailablePoolsRequest = {}, options?: RawAxiosRequestConfig) {
        return LicensesApiFp(this.configuration).getAvailablePools(requestParameters.owner, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get the activations for the license
     * @param {LicensesApiGetLicenseActivationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LicensesApi
     */
    public getLicenseActivations(requestParameters: LicensesApiGetLicenseActivationsRequest, options?: RawAxiosRequestConfig) {
        return LicensesApiFp(this.configuration).getLicenseActivations(requestParameters.poolId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get the license associated with a pool
     * @param {LicensesApiGetPoolLicenseRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LicensesApi
     */
    public getPoolLicense(requestParameters: LicensesApiGetPoolLicenseRequest, options?: RawAxiosRequestConfig) {
        return LicensesApiFp(this.configuration).getPoolLicense(requestParameters.poolId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Grant access to the license pool
     * @param {LicensesApiGrantAccessToPoolRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LicensesApi
     */
    public grantAccessToPool(requestParameters: LicensesApiGrantAccessToPoolRequest, options?: RawAxiosRequestConfig) {
        return LicensesApiFp(this.configuration).grantAccessToPool(requestParameters.poolId, requestParameters.licensePoolAccessPolicyList, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Regenerate the license associated with the pool
     * @param {LicensesApiRegenerateLicensePoolRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LicensesApi
     */
    public regenerateLicensePool(requestParameters: LicensesApiRegenerateLicensePoolRequest, options?: RawAxiosRequestConfig) {
        return LicensesApiFp(this.configuration).regenerateLicensePool(requestParameters.poolId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Revoke access to the license pool
     * @param {LicensesApiRevokeAccessToPoolRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LicensesApi
     */
    public revokeAccessToPool(requestParameters: LicensesApiRevokeAccessToPoolRequest, options?: RawAxiosRequestConfig) {
        return LicensesApiFp(this.configuration).revokeAccessToPool(requestParameters.poolId, requestParameters.licensePoolPolicySubjectList, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update the license pool
     * @param {LicensesApiUpdateLicensePoolRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LicensesApi
     */
    public updateLicensePool(requestParameters: LicensesApiUpdateLicensePoolRequest, options?: RawAxiosRequestConfig) {
        return LicensesApiFp(this.configuration).updateLicensePool(requestParameters.poolId, requestParameters.licensePoolUpdate, options).then((request) => request(this.axios, this.basePath));
    }
}

