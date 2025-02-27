/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.7.0
 * Contact: info@pollination.solutions
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { FileReference } from './file-reference';
// May contain unused imports in some cases
// @ts-ignore
import type { TaskReference } from './task-reference';

/**
 * Reference to a file or a task output. Task output must be file.
 * @export
 * @interface From
 */
export interface From {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof From
     */
    'annotations'?: { [key: string]: string; };
    /**
     * The name of the task to pull output data from.
     * @type {string}
     * @memberof From
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof From
     */
    'type'?: string;
    /**
     * The name of the variable.
     * @type {string}
     * @memberof From
     */
    'variable': string;
    /**
     * Relative path to a file.
     * @type {string}
     * @memberof From
     */
    'path': string;
}

