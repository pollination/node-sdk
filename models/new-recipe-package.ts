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
import type { Recipe } from './recipe';

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
    'manifest': Recipe;
    /**
     * The README file to attach to this package
     * @type {string}
     * @memberof NewRecipePackage
     */
    'readme'?: string;
}

