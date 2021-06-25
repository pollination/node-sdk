/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.13.3
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Function integer output.  This output loads the content from a file as an integer.
 * @export
 * @interface FunctionIntegerOutput
 */
export interface FunctionIntegerOutput {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof FunctionIntegerOutput
     */
    annotations?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof FunctionIntegerOutput
     */
    description?: string;
    /**
     * Output name.
     * @type {string}
     * @memberof FunctionIntegerOutput
     */
    name: string;
    /**
     * Path to the output file relative to where the function command is executed.
     * @type {string}
     * @memberof FunctionIntegerOutput
     */
    path: string;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof FunctionIntegerOutput
     */
    required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FunctionIntegerOutput
     */
    type?: string;
}


