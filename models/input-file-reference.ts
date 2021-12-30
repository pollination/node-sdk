/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.22.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * An input file reference
 * @export
 * @interface InputFileReference
 */
export interface InputFileReference {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof InputFileReference
     */
    annotations?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof InputFileReference
     */
    type?: string;
    /**
     * The name of the DAG input variable
     * @type {string}
     * @memberof InputFileReference
     */
    variable: string;
}


