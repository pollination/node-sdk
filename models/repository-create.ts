/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.30.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface RepositoryCreate
 */
export interface RepositoryCreate {
    /**
     * A description of the repository
     * @type {string}
     * @memberof RepositoryCreate
     */
    description?: string;
    /**
     * An icon to represent this repository
     * @type {string}
     * @memberof RepositoryCreate
     */
    icon?: string;
    /**
     * A list of keywords to index the repository by
     * @type {Array<string>}
     * @memberof RepositoryCreate
     */
    keywords?: Array<string>;
    /**
     * The name of the repository
     * @type {string}
     * @memberof RepositoryCreate
     */
    name: string;
    /**
     * Whether or not a repository is publicly viewable
     * @type {boolean}
     * @memberof RepositoryCreate
     */
    _public?: boolean;
}


