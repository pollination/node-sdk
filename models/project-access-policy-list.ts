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


import { ProjectAccessPolicy } from './project-access-policy';

/**
 * A list response from a pagination request
 * @export
 * @interface ProjectAccessPolicyList
 */
export interface ProjectAccessPolicyList {
    /**
     * The next page, if this on is not the last
     * @type {number}
     * @memberof ProjectAccessPolicyList
     */
    next_page?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof ProjectAccessPolicyList
     */
    page: number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof ProjectAccessPolicyList
     */
    page_count: number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof ProjectAccessPolicyList
     */
    per_page: number;
    /**
     * 
     * @type {Array<ProjectAccessPolicy>}
     * @memberof ProjectAccessPolicyList
     */
    resources: Array<ProjectAccessPolicy>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof ProjectAccessPolicyList
     */
    total_count: number;
}


