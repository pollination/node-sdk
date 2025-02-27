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
import type { LicensePoolPolicySubject } from './license-pool-policy-subject';

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
    'resources'?: Array<LicensePoolPolicySubject>;
}

