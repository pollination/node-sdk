/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: v0.9.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { WorkflowStatus } from './workflow-status';

/**
 * A list response from a pagination request
 * @export
 * @interface SimulationList
 */
export interface SimulationList {
    /**
     * The next page, if this on is not the last
     * @type {number}
     * @memberof SimulationList
     */
    next_page?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof SimulationList
     */
    page: number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof SimulationList
     */
    page_count: number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof SimulationList
     */
    per_page: number;
    /**
     * 
     * @type {Array<WorkflowStatus>}
     * @memberof SimulationList
     */
    resources: Array<WorkflowStatus>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof SimulationList
     */
    total_count: number;
}


