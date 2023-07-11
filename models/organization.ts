/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.41.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AccountPublic } from './account-public';
import { OrganizationRoleEnum } from './organization-role-enum';

/**
 * 
 * @export
 * @interface Organization
 */
export interface Organization {
    /**
     * The unique name of the org in small case without spaces
     * @type {string}
     * @memberof Organization
     */
    account_name?: string;
    /**
     * The contact email for the Organization
     * @type {string}
     * @memberof Organization
     */
    contact_email?: string;
    /**
     * A description of the org
     * @type {string}
     * @memberof Organization
     */
    description?: string;
    /**
     * The org ID
     * @type {string}
     * @memberof Organization
     */
    id: string;
    /**
     * The number of members that are part of this org
     * @type {number}
     * @memberof Organization
     */
    member_count?: number;
    /**
     * The display name for this org
     * @type {string}
     * @memberof Organization
     */
    name?: string;
    /**
     * The account the organization represents
     * @type {AccountPublic}
     * @memberof Organization
     */
    owner: AccountPublic;
    /**
     * URL to the picture associated with this org
     * @type {string}
     * @memberof Organization
     */
    picture_url?: string;
    /**
     * The role the user has within the organization
     * @type {OrganizationRoleEnum}
     * @memberof Organization
     */
    role?: OrganizationRoleEnum;
    /**
     * The number of teams that are part of this org
     * @type {number}
     * @memberof Organization
     */
    team_count?: number;
}


