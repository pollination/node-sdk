/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: 0.0.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DockerConfig } from './docker-config';

/**
 * Operator configuration.  The config is used to schedule functions on a desktop or in other contexts (ie: Docker).
 * @export
 * @interface Config
 */
export interface Config {
    /**
     * The configuration to use this operator in a docker container
     * @type {DockerConfig}
     * @memberof Config
     */
    docker: DockerConfig;
    /**
     * The configuration to use this operator locally
     * @type {object}
     * @memberof Config
     */
    local?: object;
}


