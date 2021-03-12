/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.12.2
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * A String output.
 * @export
 * @interface StepStringOutput
 */
export interface StepStringOutput {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof StepStringOutput
     */
    annotations?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof StepStringOutput
     */
    description?: string;
    /**
     * Output name.
     * @type {string}
     * @memberof StepStringOutput
     */
    name: string;
    /**
     * Path to the output file relative to where the function command is executed.
     * @type {string}
     * @memberof StepStringOutput
     */
    path: string;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof StepStringOutput
     */
    required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof StepStringOutput
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof StepStringOutput
     */
    value: string;
}


