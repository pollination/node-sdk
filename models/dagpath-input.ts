/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.17.0-beta.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DAGArrayInputAlias } from './dagarray-input-alias';
import { DAGBooleanInputAlias } from './dagboolean-input-alias';
import { DAGFileInputAlias } from './dagfile-input-alias';
import { DAGFolderInputAlias } from './dagfolder-input-alias';
import { DAGGenericInputAlias } from './daggeneric-input-alias';
import { DAGIntegerInputAlias } from './daginteger-input-alias';
import { DAGJSONObjectInputAlias } from './dagjsonobject-input-alias';
import { DAGLinkedInputAlias } from './daglinked-input-alias';
import { DAGNumberInputAlias } from './dagnumber-input-alias';
import { DAGPathInputAlias } from './dagpath-input-alias';
import { DAGStringInputAlias } from './dagstring-input-alias';
import { HTTP } from './http';
import { ProjectFolder } from './project-folder';
import { S3 } from './s3';

/**
 * A file or a folder input.  Use this input only in cases that the input can be either a file or folder. For file or folder-only inputs see File and Folder.  Path is a special string input. Unlike other string inputs, a path will be copied from its location to execution folder when a workflow is executed.  You can add additional validation by defining a JSONSchema specification.  See http://json-schema.org/understanding-json-schema/reference/string.html#string for more information.  .. code-block:: python      # a file with maximum 50 characters with an ``epw`` extension.      \"schema\": {         \"type\": \"string\",         \"maxLength\": 50,         \"pattern\": \"(?i)(^.*\\.epw$)\"     }
 * @export
 * @interface DAGPathInput
 */
export interface DAGPathInput {
    /**
     * A list of aliases for this input in different platforms.
     * @type {Array<DAGGenericInputAlias | DAGStringInputAlias | DAGIntegerInputAlias | DAGNumberInputAlias | DAGBooleanInputAlias | DAGFolderInputAlias | DAGFileInputAlias | DAGPathInputAlias | DAGArrayInputAlias | DAGJSONObjectInputAlias | DAGLinkedInputAlias>}
     * @memberof DAGPathInput
     */
    alias?: Array<DAGGenericInputAlias | DAGStringInputAlias | DAGIntegerInputAlias | DAGNumberInputAlias | DAGBooleanInputAlias | DAGFolderInputAlias | DAGFileInputAlias | DAGPathInputAlias | DAGArrayInputAlias | DAGJSONObjectInputAlias | DAGLinkedInputAlias>;
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGPathInput
     */
    annotations?: { [key: string]: string; };
    /**
     * The default source for file if the value is not provided.
     * @type {HTTP | S3 | ProjectFolder}
     * @memberof DAGPathInput
     */
    _default?: HTTP | S3 | ProjectFolder;
    /**
     * Optional description for input.
     * @type {string}
     * @memberof DAGPathInput
     */
    description?: string;
    /**
     * Optional list of extensions for path. The check for extension is case-insensitive. The extension will only be validated for file inputs.
     * @type {Array<string>}
     * @memberof DAGPathInput
     */
    extensions?: Array<string>;
    /**
     * Input name.
     * @type {string}
     * @memberof DAGPathInput
     */
    name: string;
    /**
     * A field to indicate if this input is required. This input needs to be set explicitly even when a default value is provided.
     * @type {boolean}
     * @memberof DAGPathInput
     */
    required?: boolean;
    /**
     * An optional JSON Schema specification to validate the input value. You can use validate_spec method to validate a value against the spec.
     * @type {object}
     * @memberof DAGPathInput
     */
    spec?: object;
    /**
     * 
     * @type {string}
     * @memberof DAGPathInput
     */
    type?: string;
}


