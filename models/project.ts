/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.12.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AccountPublic } from './account-public';
import { ProjectUsage } from './project-usage';
import { ProjectUserPermissions } from './project-user-permissions';

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
     * 
     * @type {AccountPublic}
     * @memberof Project
     */
    owner: AccountPublic;
    /**
     * 
     * @type {ProjectUserPermissions}
     * @memberof Project
     */
    permissions: ProjectUserPermissions;
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
     * The CPU/Memory usage of this project
     * @type {ProjectUsage}
     * @memberof Project
     */
    usage?: ProjectUsage;
}


