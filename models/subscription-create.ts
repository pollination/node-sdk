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


import { NewSubscriptionItem } from './new-subscription-item';

/**
 * 
 * @export
 * @interface SubscriptionCreate
 */
export interface SubscriptionCreate {
    /**
     * The list of recurring price items and the quantity of each to attach to the new subscription
     * @type {Array<NewSubscriptionItem>}
     * @memberof SubscriptionCreate
     */
    items?: Array<NewSubscriptionItem>;
}


