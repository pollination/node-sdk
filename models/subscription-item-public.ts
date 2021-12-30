/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.22.0
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
 * @interface SubscriptionItemPublic
 */
export interface SubscriptionItemPublic {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionItemPublic
     */
    id: string;
    /**
     * 
     * @type {object}
     * @memberof SubscriptionItemPublic
     */
    metadata?: object;
    /**
     * 
     * @type {Price}
     * @memberof SubscriptionItemPublic
     */
    price: Price;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionItemPublic
     */
    quantity: number;
}


