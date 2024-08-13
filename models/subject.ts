/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.5.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { AccountPublic } from './account-public';
// May contain unused imports in some cases
// @ts-ignore
import type { Team } from './team';

/**
 * 
 * @export
 * @interface Subject
 */
export interface Subject {
    /**
     * 
     * @type {string}
     * @memberof Subject
     */
    'account_type': string;
    /**
     * 
     * @type {string}
     * @memberof Subject
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof Subject
     */
    'display_name'?: string;
    /**
     * The team ID
     * @type {string}
     * @memberof Subject
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof Subject
     */
    'name': string;
    /**
     * https://robohash.org/ladybugbot
     * @type {string}
     * @memberof Subject
     */
    'picture_url'?: string;
    /**
     * The number of members that are part of this team
     * @type {number}
     * @memberof Subject
     */
    'member_count'?: number;
    /**
     * The public slug of the team
     * @type {string}
     * @memberof Subject
     */
    'slug': string;
}

