/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.45.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface Payment
 */
export interface Payment {
    /**
     * 
     * @type {number}
     * @memberof Payment
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof Payment
     */
    currency: string;
    /**
     * 
     * @type {number}
     * @memberof Payment
     */
    id: number;
    /**
     * 
     * @type {boolean}
     * @memberof Payment
     */
    is_one_off_charge: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Payment
     */
    is_paid: boolean;
    /**
     * 
     * @type {string}
     * @memberof Payment
     */
    payout_date: string;
    /**
     * 
     * @type {string}
     * @memberof Payment
     */
    receipt_url?: string;
    /**
     * 
     * @type {number}
     * @memberof Payment
     */
    subscription_id: number;
}


