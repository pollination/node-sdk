/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: v0.9.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ItemReference } from './item-reference';

/**
 * An Item Parameter Reference
 * @export
 * @interface ItemParameterReference
 */
export interface ItemParameterReference {
    /**
     * 
     * @type {ItemReference}
     * @memberof ItemParameterReference
     */
    type?: ItemReference;
    /**
     * The name of the looped item variable (use dot notation for nested json values)
     * @type {string}
     * @memberof ItemParameterReference
     */
    variable?: string;
}


