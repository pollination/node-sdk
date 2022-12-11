/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.33.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * A Task reference for parameters other than files or folders.
 * @export
 * @interface TaskReference
 */
export interface TaskReference {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof TaskReference
     */
    annotations?: { [key: string]: string; };
    /**
     * The name of the task to pull output data from.
     * @type {string}
     * @memberof TaskReference
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TaskReference
     */
    type?: string;
    /**
     * The name of the variable.
     * @type {string}
     * @memberof TaskReference
     */
    variable: string;
}


