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
 * @interface UserPermission
 */
export interface UserPermission {
    /**
     * The user has admin permission to this resource
     * @type {boolean}
     * @memberof UserPermission
     */
    admin?: boolean;
    /**
     * The user has read permission on this resource
     * @type {boolean}
     * @memberof UserPermission
     */
    read?: boolean;
    /**
     * The user has write permission on this resource
     * @type {boolean}
     * @memberof UserPermission
     */
    write?: boolean;
}


