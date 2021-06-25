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


import { RecipeInterface } from './recipe-interface';

/**
 * 
 * @export
 * @interface RecipePackage
 */
export interface RecipePackage {
    /**
     * Creation Timestamp
     * @type {string}
     * @memberof RecipePackage
     */
    created_at?: string;
    /**
     * description
     * @type {string}
     * @memberof RecipePackage
     */
    description?: string;
    /**
     * The new package digest
     * @type {string}
     * @memberof RecipePackage
     */
    digest: string;
    /**
     * icon
     * @type {string}
     * @memberof RecipePackage
     */
    icon?: string;
    /**
     * keywords
     * @type {Array<string>}
     * @memberof RecipePackage
     */
    keywords?: Array<string>;
    /**
     * 
     * @type {RecipeInterface}
     * @memberof RecipePackage
     */
    manifest: RecipeInterface;
    /**
     * The Repository Readme
     * @type {string}
     * @memberof RecipePackage
     */
    readme?: string;
    /**
     * The new package tag
     * @type {string}
     * @memberof RecipePackage
     */
    tag: string;
}


