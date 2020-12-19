/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.10.14
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface APITokenPrivate
 */
export interface APITokenPrivate {
    /**
     * Key value pairs of auth claims the API token is entitled to
     * @type {{ [key: string]: string; }}
     * @memberof APITokenPrivate
     */
    claims?: { [key: string]: string; };
    /**
     * The user friendly name of the API token
     * @type {string}
     * @memberof APITokenPrivate
     */
    name: string;
    /**
     * The decoded API token
     * @type {string}
     * @memberof APITokenPrivate
     */
    token: string;
}


