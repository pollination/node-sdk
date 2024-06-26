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


import { Permission } from './permission';
import { PolicySubject } from './policy-subject';

/**
 * 
 * @export
 * @interface LicensePoolAccessPolicy
 */
export interface LicensePoolAccessPolicy {
    /**
     * Accessors may only have read access
     * @type {Permission}
     * @memberof LicensePoolAccessPolicy
     */
    permission?: Permission;
    /**
     * The subject of the access policy
     * @type {PolicySubject}
     * @memberof LicensePoolAccessPolicy
     */
    subject: PolicySubject;
}


