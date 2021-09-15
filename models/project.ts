/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.16.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AccountPublic } from './account-public';
import { Usage } from './usage';
import { UserPermission } from './user-permission';

/**
 * 
 * @export
 * @interface Project
 */
export interface Project {
    /**
     * A description of the project
     * @type {string}
     * @memberof Project
     */
    description?: string;
    /**
     * The project ID
     * @type {string}
     * @memberof Project
     */
    id: string;
    /**
     * The name of the project. Must be unique to a given owner
     * @type {string}
     * @memberof Project
     */
    name: string;
    /**
     * The project owner
     * @type {AccountPublic}
     * @memberof Project
     */
    owner: AccountPublic;
    /**
     * 
     * @type {UserPermission}
     * @memberof Project
     */
    permissions: UserPermission;
    /**
     * Whether or not a project is publicly viewable
     * @type {boolean}
     * @memberof Project
     */
    _public?: boolean;
    /**
     * The project name in slug format
     * @type {string}
     * @memberof Project
     */
    slug: string;
    /**
     * The resource consumption of this project
     * @type {Usage}
     * @memberof Project
     */
    usage?: Usage;
}


