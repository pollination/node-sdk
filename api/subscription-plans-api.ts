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
import type { HTTPValidationError } from '../models';
// @ts-ignore
import type { PlanType } from '../models';
// @ts-ignore
import type { SubscriptionPlan } from '../models';
/**
 * SubscriptionPlansApi - axios parameter creator
 * @export
 */
export const SubscriptionPlansApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary List Subscription Plans
         * @param {PlanType} [planType] Plan Type
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSubscriptionPlans: async (planType?: PlanType, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/subscription-plans/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (planType !== undefined) {
                localVarQueryParameter['plan-type'] = planType;
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
 * SubscriptionPlansApi - functional programming interface
 * @export
 */
export const SubscriptionPlansApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SubscriptionPlansApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary List Subscription Plans
         * @param {PlanType} [planType] Plan Type
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listSubscriptionPlans(planType?: PlanType, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<SubscriptionPlan>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listSubscriptionPlans(planType, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SubscriptionPlansApi.listSubscriptionPlans']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SubscriptionPlansApi - factory interface
 * @export
 */
export const SubscriptionPlansApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SubscriptionPlansApiFp(configuration)
    return {
        /**
         * 
         * @summary List Subscription Plans
         * @param {SubscriptionPlansApiListSubscriptionPlansRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSubscriptionPlans(requestParameters: SubscriptionPlansApiListSubscriptionPlansRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<Array<SubscriptionPlan>> {
            return localVarFp.listSubscriptionPlans(requestParameters.planType, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for listSubscriptionPlans operation in SubscriptionPlansApi.
 * @export
 * @interface SubscriptionPlansApiListSubscriptionPlansRequest
 */
export interface SubscriptionPlansApiListSubscriptionPlansRequest {
    /**
     * Plan Type
     * @type {PlanType}
     * @memberof SubscriptionPlansApiListSubscriptionPlans
     */
    readonly planType?: PlanType
}

/**
 * SubscriptionPlansApi - object-oriented interface
 * @export
 * @class SubscriptionPlansApi
 * @extends {BaseAPI}
 */
export class SubscriptionPlansApi extends BaseAPI {
    /**
     * 
     * @summary List Subscription Plans
     * @param {SubscriptionPlansApiListSubscriptionPlansRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionPlansApi
     */
    public listSubscriptionPlans(requestParameters: SubscriptionPlansApiListSubscriptionPlansRequest = {}, options?: RawAxiosRequestConfig) {
        return SubscriptionPlansApiFp(this.configuration).listSubscriptionPlans(requestParameters.planType, options).then((request) => request(this.axios, this.basePath));
    }
}

