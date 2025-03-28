/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.7.2
 * Contact: info@pollination.solutions
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { SubjectType } from './subject-type';

/**
 * 
 * @export
 * @interface ApplicationPolicySubject
 */
export interface ApplicationPolicySubject {
    /**
     * The name of the policy subject
     * @type {string}
     * @memberof ApplicationPolicySubject
     */
    'name': string;
    /**
     * 
     * @type {SubjectType}
     * @memberof ApplicationPolicySubject
     */
    'subject_type': SubjectType;
}



