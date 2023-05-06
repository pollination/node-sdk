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


import { InputReference } from './input-reference';
import { ItemReference } from './item-reference';
import { TaskReference } from './task-reference';
import { ValueReference } from './value-reference';

/**
 * Task argument for receiving inputs that are not files or folders.
 * @export
 * @interface TaskArgument
 */
export interface TaskArgument {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof TaskArgument
     */
    annotations?: { [key: string]: string; };
    /**
     * A reference to a DAG input, a DAG output or another task output. You can also use the ValueReference type to hard-code an input value.
     * @type {InputReference | TaskReference | ItemReference | ValueReference}
     * @memberof TaskArgument
     */
    from: InputReference | TaskReference | ItemReference | ValueReference;
    /**
     * Argument name. The name must match one of the input names from Task\'s template which can be a function or DAG.
     * @type {string}
     * @memberof TaskArgument
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TaskArgument
     */
    type?: string;
}


