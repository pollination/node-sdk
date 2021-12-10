/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.19.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Function number output.  This output loads the content from a file as a floating number.
 * @export
 * @interface FunctionNumberOutput
 */
export interface FunctionNumberOutput {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof FunctionNumberOutput
     */
    annotations?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof FunctionNumberOutput
     */
    description?: string;
    /**
     * Output name.
     * @type {string}
     * @memberof FunctionNumberOutput
     */
    name: string;
    /**
     * Path to the output file relative to where the function command is executed.
     * @type {string}
     * @memberof FunctionNumberOutput
     */
    path: string;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof FunctionNumberOutput
     */
    required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FunctionNumberOutput
     */
    type?: string;
}


