/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.4.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AccountPublic } from './account-public';
import { ApplicationVersion } from './application-version';

/**
 * 
 * @export
 * @interface ApplicationDeployment
 */
export interface ApplicationDeployment {
    /**
     * The user who deployed this app
     * @type {AccountPublic}
     * @memberof ApplicationDeployment
     */
    author: AccountPublic;
    /**
     * Indicates whether the application deployment is ready.
     * @type {boolean}
     * @memberof ApplicationDeployment
     */
    ready: boolean;
    /**
     * The URL of the application deployment.
     * @type {string}
     * @memberof ApplicationDeployment
     */
    url: string;
    /**
     * The version deployed
     * @type {ApplicationVersion}
     * @memberof ApplicationDeployment
     */
    version: ApplicationVersion;
}


