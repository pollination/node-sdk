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


import { CloudJob } from './cloud-job';

/**
 * A list response from a pagination request
 * @export
 * @interface CloudJobList
 */
export interface CloudJobList {
    /**
     * The next page, if this on is not the last
     * @type {number}
     * @memberof CloudJobList
     */
    next_page?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof CloudJobList
     */
    page: number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof CloudJobList
     */
    page_count: number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof CloudJobList
     */
    per_page: number;
    /**
     * 
     * @type {Array<CloudJob>}
     * @memberof CloudJobList
     */
    resources: Array<CloudJob>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof CloudJobList
     */
    total_count: number;
}


