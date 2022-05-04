/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.30.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface APIToken
 */
export interface APIToken {
    /**
     * Key value pairs of auth claims the API token is entitled to
     * @type {{ [key: string]: string; }}
     * @memberof APIToken
     */
    claims?: { [key: string]: string; };
    /**
     * The user friendly name of the API token
     * @type {string}
     * @memberof APIToken
     */
    name: string;
    /**
     * The unique ID of this API token
     * @type {string}
     * @memberof APIToken
     */
    token_id: string;
}


