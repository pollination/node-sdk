/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.27.2
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AccountPublic } from './account-public';
import { UserPermission } from './user-permission';

/**
 * 
 * @export
 * @interface Application
 */
export interface Application {
    /**
     * A description of the application
     * @type {string}
     * @memberof Application
     */
    description?: string;
    /**
     * The application ID
     * @type {string}
     * @memberof Application
     */
    id: string;
    /**
     * An image associated with the application
     * @type {string}
     * @memberof Application
     */
    image?: string;
    /**
     * A list of keywords associated with the application
     * @type {Array<string>}
     * @memberof Application
     */
    keywords?: Array<string>;
    /**
     * The license of the application
     * @type {string}
     * @memberof Application
     */
    license?: string;
    /**
     * The name of the application. Must be unique to a given owner
     * @type {string}
     * @memberof Application
     */
    name: string;
    /**
     * The application owner
     * @type {AccountPublic}
     * @memberof Application
     */
    owner: AccountPublic;
    /**
     * 
     * @type {UserPermission}
     * @memberof Application
     */
    permissions: UserPermission;
    /**
     * Whether or not a application is publicly viewable
     * @type {boolean}
     * @memberof Application
     */
    _public?: boolean;
    /**
     * The application name in slug format
     * @type {string}
     * @memberof Application
     */
    slug: string;
    /**
     * A link to the source code of the application
     * @type {string}
     * @memberof Application
     */
    source?: string;
}


