/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.11.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Plugin } from './plugin';

/**
 * 
 * @export
 * @interface NewPluginPackage
 */
export interface NewPluginPackage {
    /**
     * The Plugin manifest to be created
     * @type {Plugin}
     * @memberof NewPluginPackage
     */
    manifest: Plugin;
    /**
     * The README file to attach to this package
     * @type {string}
     * @memberof NewPluginPackage
     */
    readme?: string;
}


