/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.39.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * A number output.
 * @export
 * @interface StepNumberOutput
 */
export interface StepNumberOutput {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof StepNumberOutput
     */
    annotations?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof StepNumberOutput
     */
    description?: string;
    /**
     * Output name.
     * @type {string}
     * @memberof StepNumberOutput
     */
    name: string;
    /**
     * Path to the output file relative to where the function command is executed.
     * @type {string}
     * @memberof StepNumberOutput
     */
    path: string;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof StepNumberOutput
     */
    required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof StepNumberOutput
     */
    type?: string;
    /**
     * 
     * @type {number}
     * @memberof StepNumberOutput
     */
    value: number;
}


