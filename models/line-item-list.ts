/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.18.1-beta.7
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { LineItem } from './line-item';

/**
 * 
 * @export
 * @interface LineItemList
 */
export interface LineItemList {
    /**
     * 
     * @type {Array<LineItem>}
     * @memberof LineItemList
     */
    data: Array<LineItem>;
    /**
     * 
     * @type {boolean}
     * @memberof LineItemList
     */
    has_more: boolean;
}

