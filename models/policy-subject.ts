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
 * @interface PolicySubject
 */
export interface PolicySubject {
    /**
     * The name of the policy subject
     * @type {string}
     * @memberof PolicySubject
     */
    'name': string;
    /**
     * 
     * @type {SubjectType}
     * @memberof PolicySubject
     */
    'subject_type': SubjectType;
}



