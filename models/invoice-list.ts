/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.21.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Invoice } from './invoice';

/**
 * 
 * @export
 * @interface InvoiceList
 */
export interface InvoiceList {
    /**
     * 
     * @type {boolean}
     * @memberof InvoiceList
     */
    has_more: boolean;
    /**
     * 
     * @type {Array<Invoice>}
     * @memberof InvoiceList
     */
    resources: Array<Invoice>;
}


