/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: 0.9.2
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface LoginToken
 */
export interface LoginToken {
    /**
     * 
     * @type {string}
     * @memberof LoginToken
     */
    accessToken: string;
    /**
     * 
     * @type {number}
     * @memberof LoginToken
     */
    expiresIn: number;
    /**
     * 
     * @type {string}
     * @memberof LoginToken
     */
    idToken?: string;
    /**
     * 
     * @type {string}
     * @memberof LoginToken
     */
    scope?: string;
    /**
     * 
     * @type {string}
     * @memberof LoginToken
     */
    tokenType: string;
}


