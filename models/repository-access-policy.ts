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


import { Permission } from './permission';
import { PolicySubject } from './policy-subject';

/**
 * 
 * @export
 * @interface RepositoryAccessPolicy
 */
export interface RepositoryAccessPolicy {
    /**
     * 
     * @type {Permission}
     * @memberof RepositoryAccessPolicy
     */
    permission: Permission;
    /**
     * The subject of the access policy
     * @type {PolicySubject}
     * @memberof RepositoryAccessPolicy
     */
    subject: PolicySubject;
}


