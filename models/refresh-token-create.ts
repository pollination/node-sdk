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
 * @interface RefreshTokenCreate
 */
export interface RefreshTokenCreate {
    /**
     * An email address
     * @type {string}
     * @memberof RefreshTokenCreate
     */
    email: string;
    /**
     * The password for the account associated with the email address
     * @type {string}
     * @memberof RefreshTokenCreate
     */
    password: string;
    /**
     * A refresh token that can be used to authenticate to the API
     * @type {string}
     * @memberof RefreshTokenCreate
     */
    tokenName: string;
}


