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
import type { Plugin } from './plugin';

/**
 * 
 * @export
 * @interface PluginPackage
 */
export interface PluginPackage {
    /**
     * Creation Timestamp
     * @type {string}
     * @memberof PluginPackage
     */
    'created_at'?: string;
    /**
     * description
     * @type {string}
     * @memberof PluginPackage
     */
    'description'?: string;
    /**
     * The new package digest
     * @type {string}
     * @memberof PluginPackage
     */
    'digest': string;
    /**
     * icon
     * @type {string}
     * @memberof PluginPackage
     */
    'icon'?: string;
    /**
     * keywords
     * @type {Array<string>}
     * @memberof PluginPackage
     */
    'keywords'?: Array<string>;
    /**
     * 
     * @type {Plugin}
     * @memberof PluginPackage
     */
    'manifest': Plugin;
    /**
     * The Repository Readme
     * @type {string}
     * @memberof PluginPackage
     */
    'readme'?: string;
    /**
     * The new package tag
     * @type {string}
     * @memberof PluginPackage
     */
    'tag': string;
}

