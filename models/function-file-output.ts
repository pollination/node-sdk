/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.5.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Function File output.
 * @export
 * @interface FunctionFileOutput
 */
export interface FunctionFileOutput {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof FunctionFileOutput
     */
    'annotations'?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof FunctionFileOutput
     */
    'description'?: string;
    /**
     * Output name.
     * @type {string}
     * @memberof FunctionFileOutput
     */
    'name': string;
    /**
     * Path to the output file relative to where the function command is executed.
     * @type {string}
     * @memberof FunctionFileOutput
     */
    'path': string;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof FunctionFileOutput
     */
    'required'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FunctionFileOutput
     */
    'type'?: string;
}

