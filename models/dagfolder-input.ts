/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.7.2
 * Contact: info@pollination.solutions
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { DAGArrayInputAliasInner } from './dagarray-input-alias-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { Default } from './default';

/**
 * A folder input.  Folder is a special string input. Unlike other string inputs, a folder will be copied from its location to execution folder when a workflow is executed.  You can add additional validation by defining a JSONSchema specification.  See http://json-schema.org/understanding-json-schema/reference/string.html#string for more information.  .. code-block:: python      \"schema\": {         \"type\": \"string\",         \"maxLength\": 50,     }
 * @export
 * @interface DAGFolderInput
 */
export interface DAGFolderInput {
    /**
     * A list of aliases for this input in different platforms.
     * @type {Array<DAGArrayInputAliasInner>}
     * @memberof DAGFolderInput
     */
    'alias'?: Array<DAGArrayInputAliasInner>;
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGFolderInput
     */
    'annotations'?: { [key: string]: string; };
    /**
     * 
     * @type {Default}
     * @memberof DAGFolderInput
     */
    'default'?: Default;
    /**
     * Optional description for input.
     * @type {string}
     * @memberof DAGFolderInput
     */
    'description'?: string;
    /**
     * Input name.
     * @type {string}
     * @memberof DAGFolderInput
     */
    'name': string;
    /**
     * A field to indicate if this input is required. This input needs to be set explicitly even when a default value is provided.
     * @type {boolean}
     * @memberof DAGFolderInput
     */
    'required'?: boolean;
    /**
     * An optional JSON Schema specification to validate the input value. You can use validate_spec method to validate a value against the spec.
     * @type {object}
     * @memberof DAGFolderInput
     */
    'spec'?: object;
    /**
     * 
     * @type {string}
     * @memberof DAGFolderInput
     */
    'type'?: string;
}

