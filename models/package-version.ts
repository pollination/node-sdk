/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: 0.10.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Maintainer } from './maintainer';
import { Operator } from './operator';
import { Recipe } from './recipe';

/**
 * Package Version  A MetaData object to distinguish a specific package version within a repository index.
 * @export
 * @interface PackageVersion
 */
export interface PackageVersion {
    /**
     * The version of the application code underlying the manifest
     * @type {string}
     * @memberof PackageVersion
     */
    appVersion?: string;
    /**
     * 
     * @type {Date}
     * @memberof PackageVersion
     */
    created: Date;
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
     * The License file string for this package
     * @type {string}
     * @memberof PackageVersion
     */
    license?: string;
    /**
     * A list of maintainers for the package
     * @type {Array<Maintainer>}
     * @memberof PackageVersion
     */
    maintainers?: Array<Maintainer>;
    /**
     * The package Recipe or Operator manifest
     * @type {Recipe | Operator}
     * @memberof PackageVersion
     */
    manifest?: Recipe | Operator;
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
     * The type of Queenbee package (ie: recipe or operator)
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


