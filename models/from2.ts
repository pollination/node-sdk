/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.5.1
 * Contact: info@pollination.cloud
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
import type { FolderReference } from './folder-reference';
// May contain unused imports in some cases
// @ts-ignore
import type { TaskReference } from './task-reference';

/**
 * Reference to a file, folder or a task output. Task output must either be a file or a folder.
 * @export
 * @interface From2
 */
export interface From2 {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof From2
     */
    'annotations'?: { [key: string]: string; };
    /**
     * The name of the task to pull output data from.
     * @type {string}
     * @memberof From2
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof From2
     */
    'type'?: string;
    /**
     * The name of the variable.
     * @type {string}
     * @memberof From2
     */
    'variable': string;
    /**
     * Relative path to a folder.
     * @type {string}
     * @memberof From2
     */
    'path': string;
}

