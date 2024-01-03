/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DockerConfig } from './docker-config';
import { LocalConfig } from './local-config';

/**
 * Plugin configuration.  The config is used to schedule functions on a desktop or in other contexts (ie: Docker).
 * @export
 * @interface PluginConfig
 */
export interface PluginConfig {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof PluginConfig
     */
    annotations?: { [key: string]: string; };
    /**
     * The configuration to use this plugin in a docker container
     * @type {DockerConfig}
     * @memberof PluginConfig
     */
    docker: DockerConfig;
    /**
     * The configuration to use this plugin locally
     * @type {LocalConfig}
     * @memberof PluginConfig
     */
    local?: LocalConfig;
    /**
     * 
     * @type {string}
     * @memberof PluginConfig
     */
    type?: string;
}


