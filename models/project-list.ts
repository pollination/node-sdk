/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.27.2
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Project } from './project';

/**
 * A list response from a pagination request
 * @export
 * @interface ProjectList
 */
export interface ProjectList {
    /**
     * The next page, if this on is not the last
     * @type {number}
     * @memberof ProjectList
     */
    next_page?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof ProjectList
     */
    page: number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof ProjectList
     */
    page_count: number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof ProjectList
     */
    per_page: number;
    /**
     * 
     * @type {Array<Project>}
     * @memberof ProjectList
     */
    resources: Array<Project>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof ProjectList
     */
    total_count: number;
}


