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


import { Recipe } from './recipe';

/**
 * 
 * @export
 * @interface RecipePackage
 */
export interface RecipePackage {
    /**
     * Creation Timestamp
     * @type {Date}
     * @memberof RecipePackage
     */
    createdAt?: Date;
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
     * The Repository license
     * @type {string}
     * @memberof RecipePackage
     */
    license?: string;
    /**
     * The recipe manifest
     * @type {Recipe}
     * @memberof RecipePackage
     */
    manifest: Recipe;
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


