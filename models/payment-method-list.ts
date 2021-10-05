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


import { CardPublic } from './card-public';

/**
 * A list response from a pagination request
 * @export
 * @interface PaymentMethodList
 */
export interface PaymentMethodList {
    /**
     * The next page, if this on is not the last
     * @type {number}
     * @memberof PaymentMethodList
     */
    next_page?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof PaymentMethodList
     */
    page: number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof PaymentMethodList
     */
    page_count: number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof PaymentMethodList
     */
    per_page: number;
    /**
     * 
     * @type {Array<CardPublic>}
     * @memberof PaymentMethodList
     */
    resources: Array<CardPublic>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof PaymentMethodList
     */
    total_count: number;
}

