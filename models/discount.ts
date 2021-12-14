/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.21.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Coupon } from './coupon';

/**
 * 
 * @export
 * @interface Discount
 */
export interface Discount {
    /**
     * 
     * @type {Coupon}
     * @memberof Discount
     */
    coupon: Coupon;
    /**
     * 
     * @type {string}
     * @memberof Discount
     */
    end?: string;
    /**
     * 
     * @type {string}
     * @memberof Discount
     */
    id: string;
    /**
     * 
     * @type {object}
     * @memberof Discount
     */
    metadata?: object;
    /**
     * 
     * @type {string}
     * @memberof Discount
     */
    promotion_code?: string;
    /**
     * 
     * @type {string}
     * @memberof Discount
     */
    start: string;
}

