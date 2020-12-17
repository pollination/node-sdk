/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.10.13
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
     * The license file to attach to this package
     * @type {string}
     * @memberof NewPluginPackage
     */
    license?: string;
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


