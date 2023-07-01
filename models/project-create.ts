/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.40.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ProjectCreate
 */
export interface ProjectCreate {
    /**
     * A description of the project
     * @type {string}
     * @memberof ProjectCreate
     */
    description?: string;
    /**
     * The name of the project. Must be unique to a given owner
     * @type {string}
     * @memberof ProjectCreate
     */
    name: string;
    /**
     * Whether or not a project is publicly viewable
     * @type {boolean}
     * @memberof ProjectCreate
     */
    _public?: boolean;
}


