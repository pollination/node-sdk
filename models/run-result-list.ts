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
import type { RunResultListResourcesInnerInner } from './run-result-list-resources-inner-inner';

/**
 * A list response from a pagination request
 * @export
 * @interface RunResultList
 */
export interface RunResultList {
    /**
     * The next page, if this on is not the last
     * @type {number}
     * @memberof RunResultList
     */
    'next_page'?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof RunResultList
     */
    'page': number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof RunResultList
     */
    'page_count': number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof RunResultList
     */
    'per_page': number;
    /**
     * 
     * @type {Array<Array<RunResultListResourcesInnerInner>>}
     * @memberof RunResultList
     */
    'resources': Array<Array<RunResultListResourcesInnerInner>>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof RunResultList
     */
    'total_count': number;
}

