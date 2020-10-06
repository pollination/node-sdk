/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: v0.9.1
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
    type: SubjectType;
}


