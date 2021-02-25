/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.12.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * An input file or folder reference
 * @export
 * @interface InputPathReference
 */
export interface InputPathReference {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof InputPathReference
     */
    annotations?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof InputPathReference
     */
    type?: string;
    /**
     * The name of the DAG input variable
     * @type {string}
     * @memberof InputPathReference
     */
    variable: string;
}


