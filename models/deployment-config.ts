/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.28.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface DeploymentConfig
 */
export interface DeploymentConfig {
    /**
     * The maximum number of CPU cores that can be used by the application.
     * @type {number}
     * @memberof DeploymentConfig
     */
    cpu_limit?: number;
    /**
     * Whether the application requires login.
     * @type {boolean}
     * @memberof DeploymentConfig
     */
    login_required?: boolean;
    /**
     * The maximum amount of memory that can be used by the application.
     * @type {number}
     * @memberof DeploymentConfig
     */
    memory_limit?: number;
}


