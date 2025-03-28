/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.7.2
 * Contact: info@pollination.solutions
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * An integer output.
 * @export
 * @interface StepIntegerOutput
 */
export interface StepIntegerOutput {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof StepIntegerOutput
     */
    'annotations'?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof StepIntegerOutput
     */
    'description'?: string;
    /**
     * Output name.
     * @type {string}
     * @memberof StepIntegerOutput
     */
    'name': string;
    /**
     * Path to the output file relative to where the function command is executed.
     * @type {string}
     * @memberof StepIntegerOutput
     */
    'path': string;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof StepIntegerOutput
     */
    'required'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof StepIntegerOutput
     */
    'type'?: string;
    /**
     * 
     * @type {number}
     * @memberof StepIntegerOutput
     */
    'value': number;
}

