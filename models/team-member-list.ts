/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.5.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { TeamMember } from './team-member';

/**
 * A list response from a pagination request
 * @export
 * @interface TeamMemberList
 */
export interface TeamMemberList {
    /**
     * The next page, if this on is not the last
     * @type {number}
     * @memberof TeamMemberList
     */
    'next_page'?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof TeamMemberList
     */
    'page': number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof TeamMemberList
     */
    'page_count': number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof TeamMemberList
     */
    'per_page': number;
    /**
     * 
     * @type {Array<TeamMember>}
     * @memberof TeamMemberList
     */
    'resources': Array<TeamMember>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof TeamMemberList
     */
    'total_count': number;
}

