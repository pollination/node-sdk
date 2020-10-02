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


import { AccountPublic } from './account-public';

/**
 * A list response from a pagination request
 * @export
 * @interface PublicAccountList
 */
export interface PublicAccountList {
    /**
     * The next page, if this on is not the last
     * @type {number}
     * @memberof PublicAccountList
     */
    next_page?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof PublicAccountList
     */
    page: number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof PublicAccountList
     */
    page_count: number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof PublicAccountList
     */
    per_page: number;
    /**
     * 
     * @type {Array<AccountPublic>}
     * @memberof PublicAccountList
     */
    resources: Array<AccountPublic>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof PublicAccountList
     */
    total_count: number;
}


