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


import { AccountPublic } from './account-public';
import { RepositoryUserPermissions } from './repository-user-permissions';

/**
 * 
 * @export
 * @interface Repository
 */
export interface Repository {
    /**
     * A description of the repository
     * @type {string}
     * @memberof Repository
     */
    description?: string;
    /**
     * An icon to represent this repository
     * @type {string}
     * @memberof Repository
     */
    icon?: string;
    /**
     * The recipe unique ID
     * @type {string}
     * @memberof Repository
     */
    id: string;
    /**
     * A list of keywords to index the repository by
     * @type {Array<string>}
     * @memberof Repository
     */
    keywords?: Array<string>;
    /**
     * The latest package version to be indexed
     * @type {string}
     * @memberof Repository
     */
    latest_tag: string;
    /**
     * The name of the repository
     * @type {string}
     * @memberof Repository
     */
    name: string;
    /**
     * The owner of the repository
     * @type {AccountPublic}
     * @memberof Repository
     */
    owner: AccountPublic;
    /**
     * The permissions the user making the API call has on the resource
     * @type {RepositoryUserPermissions}
     * @memberof Repository
     */
    permissions?: RepositoryUserPermissions;
    /**
     * Whether or not a repository is publicly viewable
     * @type {boolean}
     * @memberof Repository
     */
    _public?: boolean;
    /**
     * The repository slug
     * @type {string}
     * @memberof Repository
     */
    slug?: string;
}


