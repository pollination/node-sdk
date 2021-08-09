/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.15.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Team } from './team';

/**
 * A list response from a pagination request
 * @export
 * @interface TeamList
 */
export interface TeamList {
    /**
     * The next page, if this on is not the last
     * @type {number}
     * @memberof TeamList
     */
    next_page?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof TeamList
     */
    page: number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof TeamList
     */
    page_count: number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof TeamList
     */
    per_page: number;
    /**
     * 
     * @type {Array<Team>}
     * @memberof TeamList
     */
    resources: Array<Team>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof TeamList
     */
    total_count: number;
}


