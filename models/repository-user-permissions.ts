/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface RepositoryUserPermissions
 */
export interface RepositoryUserPermissions {
    /**
     * The user has admin permission to this resource
     * @type {boolean}
     * @memberof RepositoryUserPermissions
     */
    admin?: boolean;
    /**
     * The user has read permission on this resource
     * @type {boolean}
     * @memberof RepositoryUserPermissions
     */
    read?: boolean;
    /**
     * The user has write permission on this resource
     * @type {boolean}
     * @memberof RepositoryUserPermissions
     */
    write?: boolean;
}


