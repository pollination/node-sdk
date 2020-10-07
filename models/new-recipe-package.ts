/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: 0.9.2
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
     * The license file to attach to this package
     * @type {string}
     * @memberof NewRecipePackage
     */
    license?: string;
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


