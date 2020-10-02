/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: v0.9.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ProjectUpdate
 */
export interface ProjectUpdate {
    /**
     * A description of the project
     * @type {string}
     * @memberof ProjectUpdate
     */
    description?: string;
    /**
     * The name of the project. Must be unique to a given owner
     * @type {string}
     * @memberof ProjectUpdate
     */
    name: string;
    /**
     * Whether or not a project is publicly viewable
     * @type {boolean}
     * @memberof ProjectUpdate
     */
    _public?: boolean;
}

