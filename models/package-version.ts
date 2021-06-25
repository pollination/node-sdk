/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.13.3
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { License } from './license';
import { Maintainer } from './maintainer';
import { Plugin } from './plugin';
import { Recipe } from './recipe';

/**
 * Package Version  A MetaData object to distinguish a specific package version within a repository index.
 * @export
 * @interface PackageVersion
 */
export interface PackageVersion {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof PackageVersion
     */
    annotations?: { [key: string]: string; };
    /**
     * The version of the application code underlying the manifest
     * @type {string}
     * @memberof PackageVersion
     */
    app_version?: string;
    /**
     * 
     * @type {string}
     * @memberof PackageVersion
     */
    created: string;
    /**
     * Whether this package is deprecated
     * @type {boolean}
     * @memberof PackageVersion
     */
    deprecated?: boolean;
    /**
     * A description of what this package does
     * @type {string}
     * @memberof PackageVersion
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof PackageVersion
     */
    digest: string;
    /**
     * The URL of this package\'s home page
     * @type {string}
     * @memberof PackageVersion
     */
    home?: string;
    /**
     * A URL to an SVG or PNG image to be used as an icon
     * @type {string}
     * @memberof PackageVersion
     */
    icon?: string;
    /**
     * A list of keywords to search the package by
     * @type {Array<string>}
     * @memberof PackageVersion
     */
    keywords?: Array<string>;
    /**
     * The type of Queenbee package (ie: recipe or plugin)
     * @type {string}
     * @memberof PackageVersion
     */
    kind?: string;
    /**
     * The license information.
     * @type {License}
     * @memberof PackageVersion
     */
    license?: License;
    /**
     * A list of maintainers for the package
     * @type {Array<Maintainer>}
     * @memberof PackageVersion
     */
    maintainers?: Array<Maintainer>;
    /**
     * The package Recipe or Plugin manifest
     * @type {Recipe | Plugin}
     * @memberof PackageVersion
     */
    manifest?: Recipe | Plugin;
    /**
     * Package name. Make it descriptive and helpful ;)
     * @type {string}
     * @memberof PackageVersion
     */
    name: string;
    /**
     * The README file string for this package
     * @type {string}
     * @memberof PackageVersion
     */
    readme?: string;
    /**
     * A slug of the repository name and the package name.
     * @type {string}
     * @memberof PackageVersion
     */
    slug?: string;
    /**
     * A list of URLs to source code for this project
     * @type {Array<string>}
     * @memberof PackageVersion
     */
    sources?: Array<string>;
    /**
     * The tag of the package
     * @type {string}
     * @memberof PackageVersion
     */
    tag: string;
    /**
     * 
     * @type {string}
     * @memberof PackageVersion
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof PackageVersion
     */
    url: string;
}


