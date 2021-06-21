/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.13.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { FileReference } from './file-reference';
import { IOAliasHandler } from './ioalias-handler';
import { TaskReference } from './task-reference';

/**
 * DAG alias string output.  This output loads the content from a file as a string.
 * @export
 * @interface DAGStringOutputAlias
 */
export interface DAGStringOutputAlias {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGStringOutputAlias
     */
    annotations?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof DAGStringOutputAlias
     */
    description?: string;
    /**
     * Reference to a file or a task output. Task output must be file.
     * @type {TaskReference | FileReference}
     * @memberof DAGStringOutputAlias
     */
    from: TaskReference | FileReference;
    /**
     * List of process actions to process the input or output value.
     * @type {Array<IOAliasHandler>}
     * @memberof DAGStringOutputAlias
     */
    handler: Array<IOAliasHandler>;
    /**
     * Output name.
     * @type {string}
     * @memberof DAGStringOutputAlias
     */
    name: string;
    /**
     * Name of the client platform (e.g. Grasshopper, Revit, etc). The value can be any strings as long as it has been agreed between client-side developer and author of the recipe.
     * @type {Array<string>}
     * @memberof DAGStringOutputAlias
     */
    platform: Array<string>;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof DAGStringOutputAlias
     */
    required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DAGStringOutputAlias
     */
    type?: string;
}


