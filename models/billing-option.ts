/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.37.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface BillingOption
 */
export interface BillingOption {
    /**
     * The number of period for the billing cycle
     * @type {number}
     * @memberof BillingOption
     */
    billing_period: number;
    /**
     * The type of billing option, can be daily, monthly or yearly
     * @type {string}
     * @memberof BillingOption
     */
    billing_type: string;
    /**
     * The id of the billing option
     * @type {number}
     * @memberof BillingOption
     */
    id: number;
    /**
     * The name of the billing option
     * @type {string}
     * @memberof BillingOption
     */
    name: string;
    /**
     * The price of the billing option
     * @type {{ [key: string]: number; }}
     * @memberof BillingOption
     */
    recurring_price: { [key: string]: number; };
}


