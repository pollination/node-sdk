/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.4.2
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface RepositoryUpdate
 */
export interface RepositoryUpdate {
    /**
     * A description of the repository
     * @type {string}
     * @memberof RepositoryUpdate
     */
    'description'?: string;
    /**
     * An icon to represent this repository
     * @type {string}
     * @memberof RepositoryUpdate
     */
    'icon'?: string;
    /**
     * A list of keywords to index the repository by
     * @type {Array<string>}
     * @memberof RepositoryUpdate
     */
    'keywords'?: Array<string>;
    /**
     * Whether or not a repository is publicly viewable
     * @type {boolean}
     * @memberof RepositoryUpdate
     */
    'public'?: boolean;
}

