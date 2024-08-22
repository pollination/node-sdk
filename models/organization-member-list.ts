/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.6.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { OrganizationMember } from './organization-member';

/**
 * A list response from a pagination request
 * @export
 * @interface OrganizationMemberList
 */
export interface OrganizationMemberList {
    /**
     * The next page, if this on is not the last
     * @type {number}
     * @memberof OrganizationMemberList
     */
    'next_page'?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof OrganizationMemberList
     */
    'page': number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof OrganizationMemberList
     */
    'page_count': number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof OrganizationMemberList
     */
    'per_page': number;
    /**
     * 
     * @type {Array<OrganizationMember>}
     * @memberof OrganizationMemberList
     */
    'resources': Array<OrganizationMember>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof OrganizationMemberList
     */
    'total_count': number;
}

