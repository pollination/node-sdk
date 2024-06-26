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


import { Recipe } from './recipe';

/**
 * 
 * @export
 * @interface NewRecipePackage
 */
export interface NewRecipePackage {
    /**
     * The Recipe manifest to be created
     * @type {Recipe}
     * @memberof NewRecipePackage
     */
    manifest: Recipe;
    /**
     * The README file to attach to this package
     * @type {string}
     * @memberof NewRecipePackage
     */
    readme?: string;
}


