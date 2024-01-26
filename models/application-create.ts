/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DeploymentConfig } from './deployment-config';
import { SDKEnum } from './sdkenum';

/**
 * 
 * @export
 * @interface ApplicationCreate
 */
export interface ApplicationCreate {
    /**
     * The deployment configuration for the application
     * @type {DeploymentConfig}
     * @memberof ApplicationCreate
     */
    deployment_config?: DeploymentConfig;
    /**
     * A description of the application
     * @type {string}
     * @memberof ApplicationCreate
     */
    description?: string;
    /**
     * An image associated with the application
     * @type {string}
     * @memberof ApplicationCreate
     */
    image?: string;
    /**
     * Whether or not the application is paid
     * @type {boolean}
     * @memberof ApplicationCreate
     */
    is_paid?: boolean;
    /**
     * A list of keywords associated with the application
     * @type {Array<string>}
     * @memberof ApplicationCreate
     */
    keywords?: Array<string>;
    /**
     * The license of the application
     * @type {string}
     * @memberof ApplicationCreate
     */
    license?: string;
    /**
     * The name of the application. Must be unique to a given owner
     * @type {string}
     * @memberof ApplicationCreate
     */
    name: string;
    /**
     * Whether or not a application is publicly viewable
     * @type {boolean}
     * @memberof ApplicationCreate
     */
    _public?: boolean;
    /**
     * The SDK used to build the application
     * @type {SDKEnum}
     * @memberof ApplicationCreate
     */
    sdk?: SDKEnum;
    /**
     * A link to the source code of the application
     * @type {string}
     * @memberof ApplicationCreate
     */
    source?: string;
}


