/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.10.19
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * A JSON object output.
 * @export
 * @interface StepJSONObjectOutput
 */
export interface StepJSONObjectOutput {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof StepJSONObjectOutput
     */
    annotations?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof StepJSONObjectOutput
     */
    description?: string;
    /**
     * Output name.
     * @type {string}
     * @memberof StepJSONObjectOutput
     */
    name: string;
    /**
     * Path to the output file relative to where the function command is executed.
     * @type {string}
     * @memberof StepJSONObjectOutput
     */
    path: string;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof StepJSONObjectOutput
     */
    required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof StepJSONObjectOutput
     */
    type?: string;
    /**
     * 
     * @type {Array<any> | object}
     * @memberof StepJSONObjectOutput
     */
    value: Array<any> | object;
}


