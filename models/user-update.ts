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
 * @interface UserUpdate
 */
export interface UserUpdate {
    /**
     * A description of the user
     * @type {string}
     * @memberof UserUpdate
     */
    description?: string;
    /**
     * The display name for this user
     * @type {string}
     * @memberof UserUpdate
     */
    name: string;
    /**
     * URL to the picture associated with this user
     * @type {string}
     * @memberof UserUpdate
     */
    picture_url: string;
}


