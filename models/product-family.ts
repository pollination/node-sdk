/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.21.2
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Price } from './price';

/**
 * 
 * @export
 * @interface ProductFamily
 */
export interface ProductFamily {
    /**
     * 
     * @type {boolean}
     * @memberof ProductFamily
     */
    active: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProductFamily
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductFamily
     */
    id: string;
    /**
     * 
     * @type {object}
     * @memberof ProductFamily
     */
    metadata?: object;
    /**
     * 
     * @type {string}
     * @memberof ProductFamily
     */
    name: string;
    /**
     * 
     * @type {Array<Price>}
     * @memberof ProductFamily
     */
    prices: Array<Price>;
}


