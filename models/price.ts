/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.18.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { PriceRecurrence } from './price-recurrence';
import { PriceTier } from './price-tier';
import { PriceType } from './price-type';

/**
 * 
 * @export
 * @interface Price
 */
export interface Price {
    /**
     * 
     * @type {boolean}
     * @memberof Price
     */
    active: boolean;
    /**
     * 
     * @type {string}
     * @memberof Price
     */
    currency: string;
    /**
     * 
     * @type {string}
     * @memberof Price
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Price
     */
    nickname?: string;
    /**
     * 
     * @type {string}
     * @memberof Price
     */
    product: string;
    /**
     * 
     * @type {PriceRecurrence}
     * @memberof Price
     */
    recurring?: PriceRecurrence;
    /**
     * 
     * @type {Array<PriceTier>}
     * @memberof Price
     */
    tiers?: Array<PriceTier>;
    /**
     * 
     * @type {PriceType}
     * @memberof Price
     */
    type: PriceType;
    /**
     * 
     * @type {number}
     * @memberof Price
     */
    unit_amount?: number;
}


