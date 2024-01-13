/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.1.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { RepositoryAccessPolicy } from './repository-access-policy';

/**
 * A list response from a pagination request
 * @export
 * @interface RepositoryAccessPolicyList
 */
export interface RepositoryAccessPolicyList {
    /**
     * The next page, if this on is not the last
     * @type {number}
     * @memberof RepositoryAccessPolicyList
     */
    next_page?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof RepositoryAccessPolicyList
     */
    page: number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof RepositoryAccessPolicyList
     */
    page_count: number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof RepositoryAccessPolicyList
     */
    per_page: number;
    /**
     * 
     * @type {Array<RepositoryAccessPolicy>}
     * @memberof RepositoryAccessPolicyList
     */
    resources: Array<RepositoryAccessPolicy>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof RepositoryAccessPolicyList
     */
    total_count: number;
}


