/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.22.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DAGArrayOutputAlias } from './dagarray-output-alias';
import { DAGBooleanOutputAlias } from './dagboolean-output-alias';
import { DAGFileOutputAlias } from './dagfile-output-alias';
import { DAGFolderOutputAlias } from './dagfolder-output-alias';
import { DAGGenericOutputAlias } from './daggeneric-output-alias';
import { DAGIntegerOutputAlias } from './daginteger-output-alias';
import { DAGJSONObjectOutputAlias } from './dagjsonobject-output-alias';
import { DAGLinkedOutputAlias } from './daglinked-output-alias';
import { DAGNumberOutputAlias } from './dagnumber-output-alias';
import { DAGPathOutputAlias } from './dagpath-output-alias';
import { DAGStringOutputAlias } from './dagstring-output-alias';
import { FileReference } from './file-reference';
import { FolderReference } from './folder-reference';
import { TaskReference } from './task-reference';

/**
 * DAG path output.
 * @export
 * @interface DAGPathOutput
 */
export interface DAGPathOutput {
    /**
     * A list of additional processes for loading this output on different platforms.
     * @type {Array<DAGGenericOutputAlias | DAGStringOutputAlias | DAGIntegerOutputAlias | DAGNumberOutputAlias | DAGBooleanOutputAlias | DAGFolderOutputAlias | DAGFileOutputAlias | DAGPathOutputAlias | DAGArrayOutputAlias | DAGJSONObjectOutputAlias | DAGLinkedOutputAlias>}
     * @memberof DAGPathOutput
     */
    alias?: Array<DAGGenericOutputAlias | DAGStringOutputAlias | DAGIntegerOutputAlias | DAGNumberOutputAlias | DAGBooleanOutputAlias | DAGFolderOutputAlias | DAGFileOutputAlias | DAGPathOutputAlias | DAGArrayOutputAlias | DAGJSONObjectOutputAlias | DAGLinkedOutputAlias>;
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGPathOutput
     */
    annotations?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof DAGPathOutput
     */
    description?: string;
    /**
     * Reference to a file, folder or a task output. Task output must either be a file or a folder.
     * @type {TaskReference | FileReference | FolderReference}
     * @memberof DAGPathOutput
     */
    from: TaskReference | FileReference | FolderReference;
    /**
     * Output name.
     * @type {string}
     * @memberof DAGPathOutput
     */
    name: string;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof DAGPathOutput
     */
    required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DAGPathOutput
     */
    type?: string;
}


