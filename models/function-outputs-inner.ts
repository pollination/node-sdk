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


import { FunctionArrayOutput } from './function-array-output';
import { FunctionBooleanOutput } from './function-boolean-output';
import { FunctionFileOutput } from './function-file-output';
import { FunctionFolderOutput } from './function-folder-output';
import { FunctionIntegerOutput } from './function-integer-output';
import { FunctionJSONObjectOutput } from './function-jsonobject-output';
import { FunctionNumberOutput } from './function-number-output';
import { FunctionPathOutput } from './function-path-output';
import { FunctionStringOutput } from './function-string-output';
import { ItemType } from './item-type';

/**
 * 
 * @export
 * @interface FunctionOutputsInner
 */
export interface FunctionOutputsInner {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof FunctionOutputsInner
     */
    annotations?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof FunctionOutputsInner
     */
    description?: string;
    /**
     * Output name.
     * @type {string}
     * @memberof FunctionOutputsInner
     */
    name: string;
    /**
     * Path to the output file relative to where the function command is executed.
     * @type {string}
     * @memberof FunctionOutputsInner
     */
    path: string;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof FunctionOutputsInner
     */
    required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FunctionOutputsInner
     */
    type?: string;
    /**
     * Type of items in this array. All the items in an array must be from the same type.
     * @type {ItemType}
     * @memberof FunctionOutputsInner
     */
    items_type?: ItemType;
}




