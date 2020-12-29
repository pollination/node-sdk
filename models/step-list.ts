/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.10.15
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { StepStatus } from './step-status';

/**
 * A list response from a pagination request
 * @export
 * @interface StepList
 */
export interface StepList {
    /**
     * The next page, if this on is not the last
     * @type {number}
     * @memberof StepList
     */
    next_page?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof StepList
     */
    page: number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof StepList
     */
    page_count: number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof StepList
     */
    per_page: number;
    /**
     * 
     * @type {Array<StepStatus>}
     * @memberof StepList
     */
    resources: Array<StepStatus>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof StepList
     */
    total_count: number;
}

