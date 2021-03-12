/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.12.2
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Reference to a file.
 * @export
 * @interface FileReference
 */
export interface FileReference {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof FileReference
     */
    annotations?: { [key: string]: string; };
    /**
     * Relative path to a file.
     * @type {string}
     * @memberof FileReference
     */
    path: string;
    /**
     * 
     * @type {string}
     * @memberof FileReference
     */
    type?: string;
}


