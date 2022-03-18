/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.28.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DependencyKind } from './dependency-kind';

/**
 * Configuration to fetch a Recipe or Plugin that another Recipe depends on.
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
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof Dependency
     */
    annotations?: { [key: string]: string; };
    /**
     * The digest hash of the dependency when retrieved from its source. This is locked when the resource dependencies are downloaded.
     * @type {string}
     * @memberof Dependency
     */
    hash?: string;
    /**
     * The kind of dependency. It can be a recipe or an plugin.
     * @type {DependencyKind}
     * @memberof Dependency
     */
    kind: DependencyKind;
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
     * @type {string}
     * @memberof Dependency
     */
    type?: string;
}


