/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.17.0-beta.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { RecipeInterface } from './recipe-interface';

/**
 * A list response from a pagination request
 * @export
 * @interface RecipeInterfaceList
 */
export interface RecipeInterfaceList {
    /**
     * The next page, if this on is not the last
     * @type {number}
     * @memberof RecipeInterfaceList
     */
    next_page?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof RecipeInterfaceList
     */
    page: number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof RecipeInterfaceList
     */
    page_count: number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof RecipeInterfaceList
     */
    per_page: number;
    /**
     * 
     * @type {Array<RecipeInterface>}
     * @memberof RecipeInterfaceList
     */
    resources: Array<RecipeInterface>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof RecipeInterfaceList
     */
    total_count: number;
}


