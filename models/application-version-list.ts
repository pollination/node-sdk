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
import type { ApplicationVersion } from './application-version';

/**
 * A list response from a pagination request
 * @export
 * @interface ApplicationVersionList
 */
export interface ApplicationVersionList {
    /**
     * The next page, if this on is not the last
     * @type {number}
     * @memberof ApplicationVersionList
     */
    'next_page'?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof ApplicationVersionList
     */
    'page': number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof ApplicationVersionList
     */
    'page_count': number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof ApplicationVersionList
     */
    'per_page': number;
    /**
     * 
     * @type {Array<ApplicationVersion>}
     * @memberof ApplicationVersionList
     */
    'resources': Array<ApplicationVersion>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof ApplicationVersionList
     */
    'total_count': number;
}

