/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.12.2
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
    next_page?: number;
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
    page_count: number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof ProjectRecipeFilterList
     */
    per_page: number;
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
    total_count: number;
}


