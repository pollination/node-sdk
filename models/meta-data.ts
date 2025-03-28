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
import type { License } from './license';
// May contain unused imports in some cases
// @ts-ignore
import type { Maintainer } from './maintainer';

/**
 * Package metadata information.
 * @export
 * @interface MetaData
 */
export interface MetaData {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof MetaData
     */
    'annotations'?: { [key: string]: string; };
    /**
     * The version of the application code underlying the manifest
     * @type {string}
     * @memberof MetaData
     */
    'app_version'?: string;
    /**
     * Whether this package is deprecated
     * @type {boolean}
     * @memberof MetaData
     */
    'deprecated'?: boolean;
    /**
     * A description of what this package does
     * @type {string}
     * @memberof MetaData
     */
    'description'?: string;
    /**
     * The URL of this package\'s home page
     * @type {string}
     * @memberof MetaData
     */
    'home'?: string;
    /**
     * A URL to an SVG or PNG image to be used as an icon
     * @type {string}
     * @memberof MetaData
     */
    'icon'?: string;
    /**
     * A list of keywords to search the package by
     * @type {Array<string>}
     * @memberof MetaData
     */
    'keywords'?: Array<string>;
    /**
     * The license information.
     * @type {License}
     * @memberof MetaData
     */
    'license'?: License;
    /**
     * A list of maintainers for the package
     * @type {Array<Maintainer>}
     * @memberof MetaData
     */
    'maintainers'?: Array<Maintainer>;
    /**
     * Package name. Make it descriptive and helpful ;)
     * @type {string}
     * @memberof MetaData
     */
    'name': string;
    /**
     * A list of URLs to source code for this project
     * @type {Array<string>}
     * @memberof MetaData
     */
    'sources'?: Array<string>;
    /**
     * The tag of the package
     * @type {string}
     * @memberof MetaData
     */
    'tag': string;
    /**
     * 
     * @type {string}
     * @memberof MetaData
     */
    'type'?: string;
}

