/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: 0.10.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ProjectUserPermissions
 */
export interface ProjectUserPermissions {
    /**
     * The user has admin permission to this resource
     * @type {boolean}
     * @memberof ProjectUserPermissions
     */
    admin?: boolean;
    /**
     * The user has read permission on this resource
     * @type {boolean}
     * @memberof ProjectUserPermissions
     */
    read?: boolean;
    /**
     * The user has write permission on this resource
     * @type {boolean}
     * @memberof ProjectUserPermissions
     */
    write?: boolean;
}


