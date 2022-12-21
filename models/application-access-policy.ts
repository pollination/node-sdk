/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.35.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Permission } from './permission';
import { PolicySubject } from './policy-subject';

/**
 * 
 * @export
 * @interface ApplicationAccessPolicy
 */
export interface ApplicationAccessPolicy {
    /**
     * The permission given to the subject of the access policy
     * @type {Permission}
     * @memberof ApplicationAccessPolicy
     */
    permission: Permission;
    /**
     * The subject of the access policy
     * @type {PolicySubject}
     * @memberof ApplicationAccessPolicy
     */
    subject: PolicySubject;
}


