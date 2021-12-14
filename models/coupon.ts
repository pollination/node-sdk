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


import { CouponDuration } from './coupon-duration';

/**
 * 
 * @export
 * @interface Coupon
 */
export interface Coupon {
    /**
     * 
     * @type {number}
     * @memberof Coupon
     */
    amount_off?: number;
    /**
     * 
     * @type {CouponDuration}
     * @memberof Coupon
     */
    duration: CouponDuration;
    /**
     * 
     * @type {number}
     * @memberof Coupon
     */
    duration_in_months?: number;
    /**
     * 
     * @type {string}
     * @memberof Coupon
     */
    id: string;
    /**
     * 
     * @type {object}
     * @memberof Coupon
     */
    metadata?: object;
    /**
     * 
     * @type {string}
     * @memberof Coupon
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof Coupon
     */
    percent_off?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Coupon
     */
    valid: boolean;
}

