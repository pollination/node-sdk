/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.13.2
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface UserPublic
 */
export interface UserPublic {
    /**
     * A short description of the user
     * @type {string}
     * @memberof UserPublic
     */
    description?: string;
    /**
     * The display name for this user
     * @type {string}
     * @memberof UserPublic
     */
    name?: string;
    /**
     * URL to the picture associated with this user
     * @type {string}
     * @memberof UserPublic
     */
    picture?: string;
    /**
     * The lowercase account name for this user
     * @type {string}
     * @memberof UserPublic
     */
    username: string;
}


