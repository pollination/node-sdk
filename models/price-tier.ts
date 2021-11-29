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



/**
 * 
 * @export
 * @interface PriceTier
 */
export interface PriceTier {
    /**
     * 
     * @type {number}
     * @memberof PriceTier
     */
    flat_amount?: number;
    /**
     * 
     * @type {string}
     * @memberof PriceTier
     */
    flat_amount_decimal?: string;
    /**
     * 
     * @type {number}
     * @memberof PriceTier
     */
    unit_amount: number;
    /**
     * 
     * @type {string}
     * @memberof PriceTier
     */
    unit_amount_decimal: string;
    /**
     * 
     * @type {number}
     * @memberof PriceTier
     */
    up_to?: number;
}


