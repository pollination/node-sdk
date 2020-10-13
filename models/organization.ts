/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: 0.10.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AccountPublic } from './account-public';

/**
 * 
 * @export
 * @interface Organization
 */
export interface Organization {
    /**
     * The contact email for the Organization
     * @type {string}
     * @memberof Organization
     */
    contactEmail: string;
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
    memberCount?: number;
    /**
     * The display name for this org
     * @type {string}
     * @memberof Organization
     */
    name: string;
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
    picture: string;
    /**
     * The number of teams that are part of this org
     * @type {number}
     * @memberof Organization
     */
    teamCount?: number;
}


