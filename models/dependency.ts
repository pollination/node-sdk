/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: v0.9.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DependencyType } from './dependency-type';

/**
 * Configuration to fetch a Recipe or Operator that another Recipe depends on.
 * @export
 * @interface Dependency
 */
export interface Dependency {
    /**
     * An optional alias to refer to this dependency. Useful if the name is already used somewhere else.
     * @type {string}
     * @memberof Dependency
     */
    alias?: string;
    /**
     * The digest hash of the dependency when retrieved from its source. This is locked when the resource dependencies are downloaded.
     * @type {string}
     * @memberof Dependency
     */
    hash?: string;
    /**
     * Workflow name. This name should be unique among all the resources in your resource. Use an alias if this is not the case.
     * @type {string}
     * @memberof Dependency
     */
    name: string;
    /**
     * URL to a repository where this resource can be found.
     * @type {string}
     * @memberof Dependency
     */
    source: string;
    /**
     * Tag of the resource.
     * @type {string}
     * @memberof Dependency
     */
    tag: string;
    /**
     * 
     * @type {DependencyType}
     * @memberof Dependency
     */
    type: DependencyType;
}


