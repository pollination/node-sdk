/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.18.1-beta.7
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { SubscriptionItemPublicList } from './subscription-item-public-list';

/**
 * 
 * @export
 * @interface Subscription
 */
export interface Subscription {
    /**
     * 
     * @type {boolean}
     * @memberof Subscription
     */
    cancel_at_period_end: boolean;
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    current_period_end: string;
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    current_period_start: string;
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    customer: string;
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    default_payment_method?: string;
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    id: string;
    /**
     * 
     * @type {SubscriptionItemPublicList}
     * @memberof Subscription
     */
    items: SubscriptionItemPublicList;
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    latest_invoice: string;
    /**
     * 
     * @type {object}
     * @memberof Subscription
     */
    metadata?: object;
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    schedule?: string;
}


