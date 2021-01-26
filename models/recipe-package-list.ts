/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.10.18
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { RecipePackage } from './recipe-package';

/**
 * A list response from a pagination request
 * @export
 * @interface RecipePackageList
 */
export interface RecipePackageList {
    /**
     * The next page, if this on is not the last
     * @type {number}
     * @memberof RecipePackageList
     */
    next_page?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof RecipePackageList
     */
    page: number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof RecipePackageList
     */
    page_count: number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof RecipePackageList
     */
    per_page: number;
    /**
     * 
     * @type {Array<RecipePackage>}
     * @memberof RecipePackageList
     */
    resources: Array<RecipePackage>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof RecipePackageList
     */
    total_count: number;
}


