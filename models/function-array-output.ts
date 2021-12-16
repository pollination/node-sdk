/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.21.2
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ItemType } from './item-type';

/**
 * Function array output.  This output loads the content from a JSON file which must be a JSON Array.
 * @export
 * @interface FunctionArrayOutput
 */
export interface FunctionArrayOutput {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof FunctionArrayOutput
     */
    annotations?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof FunctionArrayOutput
     */
    description?: string;
    /**
     * Type of items in this array. All the items in an array must be from the same type.
     * @type {ItemType}
     * @memberof FunctionArrayOutput
     */
    items_type?: ItemType;
    /**
     * Output name.
     * @type {string}
     * @memberof FunctionArrayOutput
     */
    name: string;
    /**
     * Path to the output file relative to where the function command is executed.
     * @type {string}
     * @memberof FunctionArrayOutput
     */
    path: string;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof FunctionArrayOutput
     */
    required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FunctionArrayOutput
     */
    type?: string;
}


