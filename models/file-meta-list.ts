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
import type { FileMeta } from './file-meta';

/**
 * A list response from a pagination request
 * @export
 * @interface FileMetaList
 */
export interface FileMetaList {
    /**
     * The next page, if this on is not the last
     * @type {number}
     * @memberof FileMetaList
     */
    'next_page'?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof FileMetaList
     */
    'page': number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof FileMetaList
     */
    'page_count': number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof FileMetaList
     */
    'per_page': number;
    /**
     * 
     * @type {Array<FileMeta>}
     * @memberof FileMetaList
     */
    'resources': Array<FileMeta>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof FileMetaList
     */
    'total_count': number;
}

