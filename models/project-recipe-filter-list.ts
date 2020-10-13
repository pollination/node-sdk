/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: 0.10.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ProjectRecipeFilter } from './project-recipe-filter';

/**
 * A list response from a pagination request
 * @export
 * @interface ProjectRecipeFilterList
 */
export interface ProjectRecipeFilterList {
    /**
     * The next page, if this on is not the last
     * @type {number}
     * @memberof ProjectRecipeFilterList
     */
    nextPage?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof ProjectRecipeFilterList
     */
    page: number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof ProjectRecipeFilterList
     */
    pageCount: number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof ProjectRecipeFilterList
     */
    perPage: number;
    /**
     * 
     * @type {Array<ProjectRecipeFilter>}
     * @memberof ProjectRecipeFilterList
     */
    resources: Array<ProjectRecipeFilter>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof ProjectRecipeFilterList
     */
    totalCount: number;
}


