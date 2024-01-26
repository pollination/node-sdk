/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Run } from './run';

/**
 * A list response from a pagination request
 * @export
 * @interface RunList
 */
export interface RunList {
    /**
     * The next page, if this on is not the last
     * @type {number}
     * @memberof RunList
     */
    next_page?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof RunList
     */
    page: number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof RunList
     */
    page_count: number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof RunList
     */
    per_page: number;
    /**
     * 
     * @type {Array<Run>}
     * @memberof RunList
     */
    resources: Array<Run>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof RunList
     */
    total_count: number;
}


