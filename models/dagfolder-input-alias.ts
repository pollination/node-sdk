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


import { HTTP } from './http';
import { IOAliasHandler } from './ioalias-handler';
import { ProjectFolder } from './project-folder';
import { S3 } from './s3';

/**
 * An alias folder input.  Folder is a special string input. Unlike other string inputs, a folder will be copied from its location to execution folder when a workflow is executed.  You can add additional validation by defining a JSONSchema specification.  See http://json-schema.org/understanding-json-schema/reference/string.html#string for more information.  .. code-block:: python      \"schema\": {         \"type\": \"string\",         \"maxLength\": 50,     }
 * @export
 * @interface DAGFolderInputAlias
 */
export interface DAGFolderInputAlias {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGFolderInputAlias
     */
    annotations?: { [key: string]: string; };
    /**
     * The default source for file if the value is not provided.
     * @type {HTTP | S3 | ProjectFolder}
     * @memberof DAGFolderInputAlias
     */
    _default?: HTTP | S3 | ProjectFolder;
    /**
     * Optional description for input.
     * @type {string}
     * @memberof DAGFolderInputAlias
     */
    description?: string;
    /**
     * List of process actions to process the input or output value.
     * @type {Array<IOAliasHandler>}
     * @memberof DAGFolderInputAlias
     */
    handler: Array<IOAliasHandler>;
    /**
     * Input name.
     * @type {string}
     * @memberof DAGFolderInputAlias
     */
    name: string;
    /**
     * Name of the client platform (e.g. Grasshopper, Revit, etc). The value can be any strings as long as it has been agreed between client-side developer and author of the recipe.
     * @type {Array<string>}
     * @memberof DAGFolderInputAlias
     */
    platform: Array<string>;
    /**
     * A field to indicate if this input is required. This input needs to be set explicitly even when a default value is provided.
     * @type {boolean}
     * @memberof DAGFolderInputAlias
     */
    required?: boolean;
    /**
     * An optional JSON Schema specification to validate the input value. You can use validate_spec method to validate a value against the spec.
     * @type {object}
     * @memberof DAGFolderInputAlias
     */
    spec?: object;
    /**
     * 
     * @type {string}
     * @memberof DAGFolderInputAlias
     */
    type?: string;
}


