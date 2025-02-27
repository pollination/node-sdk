/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.7.0
 * Contact: info@pollination.solutions
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { LicensePoolAccessPolicy } from './license-pool-access-policy';

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
    'resources'?: Array<LicensePoolAccessPolicy>;
}

