/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.7.2
 * Contact: info@pollination.solutions
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface AccountPublic
 */
export interface AccountPublic {
    /**
     * 
     * @type {string}
     * @memberof AccountPublic
     */
    'account_type': string;
    /**
     * 
     * @type {string}
     * @memberof AccountPublic
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountPublic
     */
    'display_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountPublic
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof AccountPublic
     */
    'name': string;
    /**
     * https://robohash.org/ladybugbot
     * @type {string}
     * @memberof AccountPublic
     */
    'picture_url'?: string;
}

