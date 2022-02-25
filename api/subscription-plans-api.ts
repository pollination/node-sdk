/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.26.3
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
import { PlanType } from '../models';
// @ts-ignore
import { SubscriptionPlan } from '../models';
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
        listSubscriptionPlans: async (planType?: PlanType, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/subscription-plans/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
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
 * SubscriptionPlansApi - functional programming interface
 * @export
 */
export const SubscriptionPlansApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary List Subscription Plans
         * @param {PlanType} [planType] Plan Type
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listSubscriptionPlans(planType?: PlanType, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<SubscriptionPlan>>> {
            const localVarAxiosArgs = await SubscriptionPlansApiAxiosParamCreator(configuration).listSubscriptionPlans(planType, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SubscriptionPlansApi - factory interface
 * @export
 */
export const SubscriptionPlansApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary List Subscription Plans
         * @param {PlanType} [planType] Plan Type
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSubscriptionPlans(planType?: PlanType, options?: any): AxiosPromise<Array<SubscriptionPlan>> {
            return SubscriptionPlansApiFp(configuration).listSubscriptionPlans(planType, options).then((request) => request(axios, basePath));
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
    public listSubscriptionPlans(requestParameters: SubscriptionPlansApiListSubscriptionPlansRequest = {}, options?: any) {
        return SubscriptionPlansApiFp(this.configuration).listSubscriptionPlans(requestParameters.planType, options).then((request) => request(this.axios, this.basePath));
    }
}
