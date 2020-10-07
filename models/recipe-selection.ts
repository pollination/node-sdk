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



/**
 * 
 * @export
 * @interface RecipeSelection
 */
export interface RecipeSelection {
    /**
     * Name of the recipe
     * @type {string}
     * @memberof RecipeSelection
     */
    name: string;
    /**
     * Name of the owner of the recipe
     * @type {string}
     * @memberof RecipeSelection
     */
    owner: string;
    /**
     * The specific tag of the recipe to use
     * @type {string}
     * @memberof RecipeSelection
     */
    tag?: string;
}


