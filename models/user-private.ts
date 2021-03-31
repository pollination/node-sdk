/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.12.4
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface UserPrivate
 */
export interface UserPrivate {
    /**
     * A short description of the user
     * @type {string}
     * @memberof UserPrivate
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof UserPrivate
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof UserPrivate
     */
    id: string;
    /**
     * The display name for this user
     * @type {string}
     * @memberof UserPrivate
     */
    name?: string;
    /**
     * URL to the picture associated with this user
     * @type {string}
     * @memberof UserPrivate
     */
    picture?: string;
    /**
     * The lowercase account name for this user
     * @type {string}
     * @memberof UserPrivate
     */
    username: string;
}


