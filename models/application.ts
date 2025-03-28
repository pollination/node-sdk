/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.7.2
 * Contact: info@pollination.solutions
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
import type { DeploymentConfig } from './deployment-config';
// May contain unused imports in some cases
// @ts-ignore
import type { SDKEnum } from './sdkenum';
// May contain unused imports in some cases
// @ts-ignore
import type { UserPermission } from './user-permission';

/**
 * 
 * @export
 * @interface Application
 */
export interface Application {
    /**
     * The deployment configuration for the application
     * @type {DeploymentConfig}
     * @memberof Application
     */
    'deployment_config'?: DeploymentConfig;
    /**
     * A description of the application
     * @type {string}
     * @memberof Application
     */
    'description'?: string;
    /**
     * Whether or not the application has been deployed
     * @type {boolean}
     * @memberof Application
     */
    'has_been_deployed': boolean;
    /**
     * The application ID
     * @type {string}
     * @memberof Application
     */
    'id': string;
    /**
     * An image associated with the application
     * @type {string}
     * @memberof Application
     */
    'image'?: string;
    /**
     * Whether or not the application is paid
     * @type {boolean}
     * @memberof Application
     */
    'is_paid'?: boolean;
    /**
     * A list of keywords associated with the application
     * @type {Array<string>}
     * @memberof Application
     */
    'keywords'?: Array<string>;
    /**
     * The license of the application
     * @type {string}
     * @memberof Application
     */
    'license'?: string;
    /**
     * The name of the application. Must be unique to a given owner
     * @type {string}
     * @memberof Application
     */
    'name': string;
    /**
     * The application owner
     * @type {AccountPublic}
     * @memberof Application
     */
    'owner': AccountPublic;
    /**
     * 
     * @type {UserPermission}
     * @memberof Application
     */
    'permissions': UserPermission;
    /**
     * Whether or not a application is publicly viewable
     * @type {boolean}
     * @memberof Application
     */
    'public'?: boolean;
    /**
     * The SDK used to build the application
     * @type {SDKEnum}
     * @memberof Application
     */
    'sdk'?: SDKEnum;
    /**
     * The application name in slug format
     * @type {string}
     * @memberof Application
     */
    'slug': string;
    /**
     * A link to the source code of the application
     * @type {string}
     * @memberof Application
     */
    'source'?: string;
    /**
     * The URL of the application deployment
     * @type {string}
     * @memberof Application
     */
    'url'?: string;
}



