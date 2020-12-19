/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.10.14
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Function boolean output.  This output loads the content from a file as a boolean.
 * @export
 * @interface FunctionBooleanOutput
 */
export interface FunctionBooleanOutput {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof FunctionBooleanOutput
     */
    annotations?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof FunctionBooleanOutput
     */
    description?: string;
    /**
     * Output name.
     * @type {string}
     * @memberof FunctionBooleanOutput
     */
    name: string;
    /**
     * Path to the output file relative to where the function command is executed.
     * @type {string}
     * @memberof FunctionBooleanOutput
     */
    path: string;
    /**
     * 
     * @type {string}
     * @memberof FunctionBooleanOutput
     */
    type?: string;
}


