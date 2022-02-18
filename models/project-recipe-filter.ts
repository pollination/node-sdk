/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.26.2
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ProjectRecipeFilter
 */
export interface ProjectRecipeFilter {
    /**
     * The name of the recipe
     * @type {string}
     * @memberof ProjectRecipeFilter
     */
    name: string;
    /**
     * The name of the account the recipe belongs to
     * @type {string}
     * @memberof ProjectRecipeFilter
     */
    owner: string;
    /**
     * The specific recipe tag
     * @type {string}
     * @memberof ProjectRecipeFilter
     */
    tag?: string;
}


