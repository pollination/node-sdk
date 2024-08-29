/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.6.2
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { APIToken } from './apitoken';

/**
 * A list response from a pagination request
 * @export
 * @interface APITokenList
 */
export interface APITokenList {
    /**
     * The next page, if this on is not the last
     * @type {number}
     * @memberof APITokenList
     */
    'next_page'?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof APITokenList
     */
    'page': number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof APITokenList
     */
    'page_count': number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof APITokenList
     */
    'per_page': number;
    /**
     * 
     * @type {Array<APIToken>}
     * @memberof APITokenList
     */
    'resources': Array<APIToken>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof APITokenList
     */
    'total_count': number;
}

