/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.25.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { LicensePoolPolicySubject } from './license-pool-policy-subject';

/**
 * 
 * @export
 * @interface LicensePoolPolicySubjectList
 */
export interface LicensePoolPolicySubjectList {
    /**
     * The list of subjects which currently have access to the pool
     * @type {Array<LicensePoolPolicySubject>}
     * @memberof LicensePoolPolicySubjectList
     */
    resources?: Array<LicensePoolPolicySubject>;
}


