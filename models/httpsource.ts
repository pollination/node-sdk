/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: 0.10.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * HTTPSource  A web HTTP to an FTP server or an API for example.
 * @export
 * @interface HTTPSource
 */
export interface HTTPSource {
    /**
     * 
     * @type {string}
     * @memberof HTTPSource
     */
    type?: string;
    /**
     * For a HTTP endpoint this can be http://climate.onebuilding.org.
     * @type {string}
     * @memberof HTTPSource
     */
    url: string;
}


