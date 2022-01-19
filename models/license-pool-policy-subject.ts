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


import { SubjectType } from './subject-type';

/**
 * 
 * @export
 * @interface LicensePoolPolicySubject
 */
export interface LicensePoolPolicySubject {
    /**
     * The name of the policy subject
     * @type {string}
     * @memberof LicensePoolPolicySubject
     */
    name: string;
    /**
     * 
     * @type {SubjectType}
     * @memberof LicensePoolPolicySubject
     */
    subject_type: SubjectType;
}


