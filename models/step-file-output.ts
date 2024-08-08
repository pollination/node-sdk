/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.4.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Source } from './source';

/**
 * A file output.
 * @export
 * @interface StepFileOutput
 */
export interface StepFileOutput {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof StepFileOutput
     */
    annotations?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof StepFileOutput
     */
    description?: string;
    /**
     * Output name.
     * @type {string}
     * @memberof StepFileOutput
     */
    name: string;
    /**
     * Path to the output file relative to where the function command is executed.
     * @type {string}
     * @memberof StepFileOutput
     */
    path: string;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof StepFileOutput
     */
    required?: boolean;
    /**
     * 
     * @type {Source}
     * @memberof StepFileOutput
     */
    source: Source;
    /**
     * 
     * @type {string}
     * @memberof StepFileOutput
     */
    type?: string;
}


