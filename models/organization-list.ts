/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: v0.9.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Organization } from './organization';

/**
 * A list response from a pagination request
 * @export
 * @interface OrganizationList
 */
export interface OrganizationList {
    /**
     * The next page, if this on is not the last
     * @type {number}
     * @memberof OrganizationList
     */
    next_page?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof OrganizationList
     */
    page: number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof OrganizationList
     */
    page_count: number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof OrganizationList
     */
    per_page: number;
    /**
     * 
     * @type {Array<Organization>}
     * @memberof OrganizationList
     */
    resources: Array<Organization>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof OrganizationList
     */
    total_count: number;
}

