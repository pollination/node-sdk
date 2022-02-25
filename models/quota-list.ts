/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.26.3
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Quota } from './quota';

/**
 * A list response from a pagination request
 * @export
 * @interface QuotaList
 */
export interface QuotaList {
    /**
     * The next page, if this on is not the last
     * @type {number}
     * @memberof QuotaList
     */
    next_page?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof QuotaList
     */
    page: number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof QuotaList
     */
    page_count: number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof QuotaList
     */
    per_page: number;
    /**
     * 
     * @type {Array<Quota>}
     * @memberof QuotaList
     */
    resources: Array<Quota>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof QuotaList
     */
    total_count: number;
}


