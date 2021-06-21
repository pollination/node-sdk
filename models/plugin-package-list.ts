/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.13.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { PluginPackage } from './plugin-package';

/**
 * A list response from a pagination request
 * @export
 * @interface PluginPackageList
 */
export interface PluginPackageList {
    /**
     * The next page, if this on is not the last
     * @type {number}
     * @memberof PluginPackageList
     */
    next_page?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof PluginPackageList
     */
    page: number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof PluginPackageList
     */
    page_count: number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof PluginPackageList
     */
    per_page: number;
    /**
     * 
     * @type {Array<PluginPackage>}
     * @memberof PluginPackageList
     */
    resources: Array<PluginPackage>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof PluginPackageList
     */
    total_count: number;
}


