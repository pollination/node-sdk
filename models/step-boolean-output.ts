/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.10.15
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The boolean type matches only two special values: True and False.
 * @export
 * @interface StepBooleanOutput
 */
export interface StepBooleanOutput {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof StepBooleanOutput
     */
    annotations?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof StepBooleanOutput
     */
    description?: string;
    /**
     * Output name.
     * @type {string}
     * @memberof StepBooleanOutput
     */
    name: string;
    /**
     * Path to the output file relative to where the function command is executed.
     * @type {string}
     * @memberof StepBooleanOutput
     */
    path: string;
    /**
     * 
     * @type {string}
     * @memberof StepBooleanOutput
     */
    type?: string;
    /**
     * 
     * @type {boolean}
     * @memberof StepBooleanOutput
     */
    value: boolean;
}


