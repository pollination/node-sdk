/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.1.1
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
 * @interface RepositoryPolicySubject
 */
export interface RepositoryPolicySubject {
    /**
     * The name of the policy subject
     * @type {string}
     * @memberof RepositoryPolicySubject
     */
    name: string;
    /**
     * 
     * @type {SubjectType}
     * @memberof RepositoryPolicySubject
     */
    subject_type: SubjectType;
}


