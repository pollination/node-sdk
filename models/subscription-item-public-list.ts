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


import { SubscriptionItemPublic } from './subscription-item-public';

/**
 * 
 * @export
 * @interface SubscriptionItemPublicList
 */
export interface SubscriptionItemPublicList {
    /**
     * 
     * @type {Array<SubscriptionItemPublic>}
     * @memberof SubscriptionItemPublicList
     */
    data: Array<SubscriptionItemPublic>;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionItemPublicList
     */
    has_more: boolean;
}


