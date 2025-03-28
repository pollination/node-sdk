/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.7.2
 * Contact: info@pollination.solutions
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Repository } from './repository';

/**
 * A list response from a pagination request
 * @export
 * @interface RepositoryList
 */
export interface RepositoryList {
    /**
     * The next page, if this on is not the last
     * @type {number}
     * @memberof RepositoryList
     */
    'next_page'?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof RepositoryList
     */
    'page': number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof RepositoryList
     */
    'page_count': number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof RepositoryList
     */
    'per_page': number;
    /**
     * 
     * @type {Array<Repository>}
     * @memberof RepositoryList
     */
    'resources': Array<Repository>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof RepositoryList
     */
    'total_count': number;
}

