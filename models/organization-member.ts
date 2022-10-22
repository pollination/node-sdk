/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.31.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { OrganizationRoleEnum } from './organization-role-enum';
import { UserPublic } from './user-public';

/**
 * 
 * @export
 * @interface OrganizationMember
 */
export interface OrganizationMember {
    /**
     * The role the user has within the organization
     * @type {OrganizationRoleEnum}
     * @memberof OrganizationMember
     */
    role: OrganizationRoleEnum;
    /**
     * The organization member
     * @type {UserPublic}
     * @memberof OrganizationMember
     */
    user: UserPublic;
}


