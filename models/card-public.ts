/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.21.2
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface CardPublic
 */
export interface CardPublic {
    /**
     * The month the card expires
     * @type {number}
     * @memberof CardPublic
     */
    exp_month: number;
    /**
     * The year the card expires
     * @type {number}
     * @memberof CardPublic
     */
    exp_year: number;
    /**
     * The last four digits of the card
     * @type {string}
     * @memberof CardPublic
     */
    last4: string;
}


