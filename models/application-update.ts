/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.28.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DeploymentConfig } from './deployment-config';

/**
 * 
 * @export
 * @interface ApplicationUpdate
 */
export interface ApplicationUpdate {
    /**
     * The deployment configuration for the application
     * @type {DeploymentConfig}
     * @memberof ApplicationUpdate
     */
    deployment_config?: DeploymentConfig;
    /**
     * A description of the application
     * @type {string}
     * @memberof ApplicationUpdate
     */
    description?: string;
    /**
     * Whether or not the application is paid
     * @type {boolean}
     * @memberof ApplicationUpdate
     */
    is_paid?: boolean;
    /**
     * A list of keywords associated with the application
     * @type {Array<string>}
     * @memberof ApplicationUpdate
     */
    keywords?: Array<string>;
    /**
     * The license of the application
     * @type {string}
     * @memberof ApplicationUpdate
     */
    license?: string;
    /**
     * Whether or not a application is publicly viewable
     * @type {boolean}
     * @memberof ApplicationUpdate
     */
    _public?: boolean;
    /**
     * A link to the source code of the application
     * @type {string}
     * @memberof ApplicationUpdate
     */
    source?: string;
}

