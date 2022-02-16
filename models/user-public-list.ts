/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.26.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { UserPublic } from './user-public';

/**
 * A list response from a pagination request
 * @export
 * @interface UserPublicList
 */
export interface UserPublicList {
    /**
     * The next page, if this on is not the last
     * @type {number}
     * @memberof UserPublicList
     */
    next_page?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof UserPublicList
     */
    page: number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof UserPublicList
     */
    page_count: number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof UserPublicList
     */
    per_page: number;
    /**
     * 
     * @type {Array<UserPublic>}
     * @memberof UserPublicList
     */
    resources: Array<UserPublic>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof UserPublicList
     */
    total_count: number;
}


