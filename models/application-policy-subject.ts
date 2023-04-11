/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.37.0
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
 * @interface ApplicationPolicySubject
 */
export interface ApplicationPolicySubject {
    /**
     * The name of the policy subject
     * @type {string}
     * @memberof ApplicationPolicySubject
     */
    name: string;
    /**
     * 
     * @type {SubjectType}
     * @memberof ApplicationPolicySubject
     */
    subject_type: SubjectType;
}


