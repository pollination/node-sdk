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
 * @interface InvoiceStatusTransitions
 */
export interface InvoiceStatusTransitions {
    /**
     * 
     * @type {string}
     * @memberof InvoiceStatusTransitions
     */
    finalized_at?: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceStatusTransitions
     */
    marked_uncollectible_at?: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceStatusTransitions
     */
    paid_at?: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceStatusTransitions
     */
    voided_at?: string;
}


