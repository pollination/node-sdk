/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.16.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * HTTP Source  A web HTTP to an FTP server or an API for example.
 * @export
 * @interface HTTP
 */
export interface HTTP {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof HTTP
     */
    annotations?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof HTTP
     */
    type?: string;
    /**
     * For a HTTP endpoint this can be http://climate.onebuilding.org.
     * @type {string}
     * @memberof HTTP
     */
    url: string;
}


