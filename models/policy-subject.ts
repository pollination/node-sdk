/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.28.1
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
 * @interface PolicySubject
 */
export interface PolicySubject {
    /**
     * The name of the policy subject
     * @type {string}
     * @memberof PolicySubject
     */
    name: string;
    /**
     * 
     * @type {SubjectType}
     * @memberof PolicySubject
     */
    subject_type: SubjectType;
}


