/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.37.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AccountPublic } from './account-public';
import { BuildStatus } from './build-status';

/**
 * 
 * @export
 * @interface ApplicationVersion
 */
export interface ApplicationVersion {
    /**
     * The author that created the application version
     * @type {AccountPublic}
     * @memberof ApplicationVersion
     */
    author: AccountPublic;
    /**
     * The status of the application version build
     * @type {BuildStatus}
     * @memberof ApplicationVersion
     */
    build_status: BuildStatus;
    /**
     * The time the application version was created
     * @type {string}
     * @memberof ApplicationVersion
     */
    created_at?: string;
    /**
     * The application version ID
     * @type {string}
     * @memberof ApplicationVersion
     */
    id: string;
    /**
     * The release notes for the application version
     * @type {string}
     * @memberof ApplicationVersion
     */
    release_notes?: string;
    /**
     * The tag for this version of the application
     * @type {string}
     * @memberof ApplicationVersion
     */
    tag: string;
}


