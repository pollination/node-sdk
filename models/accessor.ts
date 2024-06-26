/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.3.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AccountPublic } from './account-public';
import { Permission } from './permission';
import { Team } from './team';

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
     * @type {AccountPublic | Team}
     * @memberof Accessor
     */
    subject: AccountPublic | Team;
}


