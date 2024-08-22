/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.6.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Function string output.  This output loads the content from a file as a string.
 * @export
 * @interface FunctionStringOutput
 */
export interface FunctionStringOutput {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof FunctionStringOutput
     */
    'annotations'?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof FunctionStringOutput
     */
    'description'?: string;
    /**
     * Output name.
     * @type {string}
     * @memberof FunctionStringOutput
     */
    'name': string;
    /**
     * Path to the output file relative to where the function command is executed.
     * @type {string}
     * @memberof FunctionStringOutput
     */
    'path': string;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof FunctionStringOutput
     */
    'required'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FunctionStringOutput
     */
    'type'?: string;
}

