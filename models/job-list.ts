/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.10.13
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
 * @interface JobList
 */
export interface JobList {
    /**
     * The next page, if this on is not the last
     * @type {number}
     * @memberof JobList
     */
    next_page?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof JobList
     */
    page: number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof JobList
     */
    page_count: number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof JobList
     */
    per_page: number;
    /**
     * 
     * @type {Array<Run>}
     * @memberof JobList
     */
    resources: Array<Run>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof JobList
     */
    total_count: number;
}


