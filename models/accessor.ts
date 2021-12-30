/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.22.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AccountPublic } from './account-public';
import { Permission } from './permission';

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
    permission: Permission;
    /**
     * 
     * @type {AccountPublic}
     * @memberof Accessor
     */
    subject: AccountPublic;
}


