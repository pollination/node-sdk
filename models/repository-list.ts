/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: 0.9.2
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Repository } from './repository';

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
    nextPage?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof RepositoryList
     */
    page: number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof RepositoryList
     */
    pageCount: number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof RepositoryList
     */
    perPage: number;
    /**
     * 
     * @type {Array<Repository>}
     * @memberof RepositoryList
     */
    resources: Array<Repository>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof RepositoryList
     */
    totalCount: number;
}


