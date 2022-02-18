/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.26.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { LicensePoolAccessPolicy } from './license-pool-access-policy';

/**
 * 
 * @export
 * @interface LicensePoolAccessPolicyList
 */
export interface LicensePoolAccessPolicyList {
    /**
     * The list of policies granting access to the pool
     * @type {Array<LicensePoolAccessPolicy>}
     * @memberof LicensePoolAccessPolicyList
     */
    resources?: Array<LicensePoolAccessPolicy>;
}


