/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.19.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { QuotaType } from './quota-type';

/**
 * A quota extension
 * @export
 * @interface QuotaExtension
 */
export interface QuotaExtension {
    /**
     * The ID of the quota extension
     * @type {string}
     * @memberof QuotaExtension
     */
    id: string;
    /**
     * Name of the quota extension plan
     * @type {string}
     * @memberof QuotaExtension
     */
    name: string;
    /**
     * The number of times to count this extension
     * @type {number}
     * @memberof QuotaExtension
     */
    quantity: number;
    /**
     * The type of quota this applies to
     * @type {QuotaType}
     * @memberof QuotaExtension
     */
    type: QuotaType;
    /**
     * The amount by which this object extends a given quota
     * @type {number}
     * @memberof QuotaExtension
     */
    unit_amount: number;
}


