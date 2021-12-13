/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.20.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Price } from './price';

/**
 * 
 * @export
 * @interface SubscriptionItem
 */
export interface SubscriptionItem {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionItem
     */
    id: string;
    /**
     * 
     * @type {object}
     * @memberof SubscriptionItem
     */
    metadata?: object;
    /**
     * 
     * @type {Price}
     * @memberof SubscriptionItem
     */
    price: Price;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionItem
     */
    quantity: number;
}


