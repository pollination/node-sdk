/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.3.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Function } from './function';
import { MetaData } from './meta-data';
import { PluginConfig } from './plugin-config';

/**
 * A Queenbee Plugin.  A plugin contains runtime configuration for a Command Line Interface (CLI) and a list of functions that can be executed using this CLI tool.
 * @export
 * @interface Plugin
 */
export interface Plugin {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof Plugin
     */
    annotations?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof Plugin
     */
    api_version?: string;
    /**
     * The configuration information to run this plugin
     * @type {PluginConfig}
     * @memberof Plugin
     */
    config: PluginConfig;
    /**
     * List of Plugin functions
     * @type {Array<Function>}
     * @memberof Plugin
     */
    functions: Array<Function>;
    /**
     * The Plugin metadata information
     * @type {MetaData}
     * @memberof Plugin
     */
    metadata: MetaData;
    /**
     * 
     * @type {string}
     * @memberof Plugin
     */
    type?: string;
}


