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
 * License information for the Package
 * @export
 * @interface License
 */
export interface License {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof License
     */
    annotations?: { [key: string]: string; };
    /**
     * The license name used for the package.
     * @type {string}
     * @memberof License
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof License
     */
    type?: string;
    /**
     * A URL to the license used for the package.
     * @type {string}
     * @memberof License
     */
    url?: string;
}


