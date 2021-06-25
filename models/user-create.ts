/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.13.3
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface UserCreate
 */
export interface UserCreate {
    /**
     * A description of the user
     * @type {string}
     * @memberof UserCreate
     */
    description?: string;
    /**
     * The contact email for the Organization
     * @type {string}
     * @memberof UserCreate
     */
    email: string;
    /**
     * The display name for this user
     * @type {string}
     * @memberof UserCreate
     */
    name: string;
    /**
     * A password for this new user to authenticate with
     * @type {string}
     * @memberof UserCreate
     */
    password: string;
    /**
     * URL to the picture associated with this user
     * @type {string}
     * @memberof UserCreate
     */
    picture_url: string;
    /**
     * The unique name of the user in small case without spaces
     * @type {string}
     * @memberof UserCreate
     */
    username: string;
}


