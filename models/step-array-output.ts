/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.42.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ItemType } from './item-type';

/**
 * A JSON array output.
 * @export
 * @interface StepArrayOutput
 */
export interface StepArrayOutput {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof StepArrayOutput
     */
    annotations?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof StepArrayOutput
     */
    description?: string;
    /**
     * Type of items in this array. All the items in an array must be from the same type.
     * @type {ItemType}
     * @memberof StepArrayOutput
     */
    items_type?: ItemType;
    /**
     * Output name.
     * @type {string}
     * @memberof StepArrayOutput
     */
    name: string;
    /**
     * Path to the output file relative to where the function command is executed.
     * @type {string}
     * @memberof StepArrayOutput
     */
    path: string;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof StepArrayOutput
     */
    required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof StepArrayOutput
     */
    type?: string;
    /**
     * 
     * @type {Array<any>}
     * @memberof StepArrayOutput
     */
    value: Array<any>;
}


