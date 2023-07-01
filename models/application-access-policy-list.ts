/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.40.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ApplicationAccessPolicy } from './application-access-policy';

/**
 * A list response from a pagination request
 * @export
 * @interface ApplicationAccessPolicyList
 */
export interface ApplicationAccessPolicyList {
    /**
     * The next page, if this on is not the last
     * @type {number}
     * @memberof ApplicationAccessPolicyList
     */
    next_page?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof ApplicationAccessPolicyList
     */
    page: number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof ApplicationAccessPolicyList
     */
    page_count: number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof ApplicationAccessPolicyList
     */
    per_page: number;
    /**
     * 
     * @type {Array<ApplicationAccessPolicy>}
     * @memberof ApplicationAccessPolicyList
     */
    resources: Array<ApplicationAccessPolicy>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof ApplicationAccessPolicyList
     */
    total_count: number;
}


