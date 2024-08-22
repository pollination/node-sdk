/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.6.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Plugin } from './plugin';

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
    'manifest': Plugin;
    /**
     * The README file to attach to this package
     * @type {string}
     * @memberof NewPluginPackage
     */
    'readme'?: string;
}

