/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.4.2
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
    'cpu_limit'?: number;
    /**
     * The Streamlit python file to use as an entrypoint to the app
     * @type {string}
     * @memberof DeploymentConfig
     */
    'entrypoint_file'?: string;
    /**
     * Whether the application requires login.
     * @type {boolean}
     * @memberof DeploymentConfig
     */
    'login_required'?: boolean;
    /**
     * The maximum amount of memory that can be used by the application.
     * @type {number}
     * @memberof DeploymentConfig
     */
    'memory_limit'?: number;
    /**
     * A boolean toggle to scale deployments down to zero replicas when not used.
     * @type {boolean}
     * @memberof DeploymentConfig
     */
    'scale_to_zero'?: boolean;
}

