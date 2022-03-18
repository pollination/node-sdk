/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.28.0
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
 * @interface ProjectPolicySubject
 */
export interface ProjectPolicySubject {
    /**
     * The name of the policy subject
     * @type {string}
     * @memberof ProjectPolicySubject
     */
    name: string;
    /**
     * 
     * @type {SubjectType}
     * @memberof ProjectPolicySubject
     */
    subject_type: SubjectType;
}


