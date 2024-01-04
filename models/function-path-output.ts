/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Function Path output.
 * @export
 * @interface FunctionPathOutput
 */
export interface FunctionPathOutput {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof FunctionPathOutput
     */
    annotations?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof FunctionPathOutput
     */
    description?: string;
    /**
     * Output name.
     * @type {string}
     * @memberof FunctionPathOutput
     */
    name: string;
    /**
     * Path to the output file or folder relative to where the function command is executed.
     * @type {string}
     * @memberof FunctionPathOutput
     */
    path: string;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof FunctionPathOutput
     */
    required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FunctionPathOutput
     */
    type?: string;
}


