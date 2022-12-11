/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.33.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Application } from './application';

/**
 * A list response from a pagination request
 * @export
 * @interface ApplicationList
 */
export interface ApplicationList {
    /**
     * The next page, if this on is not the last
     * @type {number}
     * @memberof ApplicationList
     */
    next_page?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof ApplicationList
     */
    page: number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof ApplicationList
     */
    page_count: number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof ApplicationList
     */
    per_page: number;
    /**
     * 
     * @type {Array<Application>}
     * @memberof ApplicationList
     */
    resources: Array<Application>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof ApplicationList
     */
    total_count: number;
}


