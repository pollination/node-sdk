/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.6.2
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Permission } from './permission';
// May contain unused imports in some cases
// @ts-ignore
import type { Subject } from './subject';

/**
 * 
 * @export
 * @interface Accessor
 */
export interface Accessor {
    /**
     * 
     * @type {Permission}
     * @memberof Accessor
     */
    'permission': Permission;
    /**
     * 
     * @type {Subject}
     * @memberof Accessor
     */
    'subject': Subject;
}



