/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.19.0
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
import { PollinationSubscription } from '../models';
/**
 * SubscriptionsApi - axios parameter creator
 * @export
 */
export const SubscriptionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get Subscription
         * @param {string} accountName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPollinationSubscription: async (accountName: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountName' is not null or undefined
            if (accountName === null || accountName === undefined) {
                throw new RequiredError('accountName','Required parameter accountName was null or undefined when calling getPollinationSubscription.');
            }
            const localVarPath = `/subscriptions/{account_name}`
                .replace(`{${"account_name"}}`, encodeURIComponent(String(accountName)));
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
 * SubscriptionsApi - functional programming interface
 * @export
 */
export const SubscriptionsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get Subscription
         * @param {string} accountName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPollinationSubscription(accountName: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PollinationSubscription>> {
            const localVarAxiosArgs = await SubscriptionsApiAxiosParamCreator(configuration).getPollinationSubscription(accountName, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SubscriptionsApi - factory interface
 * @export
 */
export const SubscriptionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Get Subscription
         * @param {string} accountName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPollinationSubscription(accountName: string, options?: any): AxiosPromise<PollinationSubscription> {
            return SubscriptionsApiFp(configuration).getPollinationSubscription(accountName, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getPollinationSubscription operation in SubscriptionsApi.
 * @export
 * @interface SubscriptionsApiGetPollinationSubscriptionRequest
 */
export interface SubscriptionsApiGetPollinationSubscriptionRequest {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionsApiGetPollinationSubscription
     */
    readonly accountName: string
}

/**
 * SubscriptionsApi - object-oriented interface
 * @export
 * @class SubscriptionsApi
 * @extends {BaseAPI}
 */
export class SubscriptionsApi extends BaseAPI {
    /**
     * 
     * @summary Get Subscription
     * @param {SubscriptionsApiGetPollinationSubscriptionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionsApi
     */
    public getPollinationSubscription(requestParameters: SubscriptionsApiGetPollinationSubscriptionRequest, options?: any) {
        return SubscriptionsApiFp(this.configuration).getPollinationSubscription(requestParameters.accountName, options).then((request) => request(this.axios, this.basePath));
    }
}
