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
 * A file input.  File is a special string input. Unlike other string inputs, a file will be copied from its location to execution folder when a workflow is executed.  You can add additional validation by defining a JSONSchema specification.  See http://json-schema.org/understanding-json-schema/reference/string.html#string for more information.  .. code-block:: python      # a file with maximum 50 characters with an ``epw`` extension.      \"schema\": {         \"type\": \"string\",         \"maxLength\": 50,         \"pattern\": \"(?i)(^.*\\.epw$)\"     }
 * @export
 * @interface FunctionFileInput
 */
export interface FunctionFileInput {
    /**
     * A list of aliases for this input in different platforms.
     * @type {Array<DAGArrayInputAliasInner>}
     * @memberof FunctionFileInput
     */
    'alias'?: Array<DAGArrayInputAliasInner>;
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof FunctionFileInput
     */
    'annotations'?: { [key: string]: string; };
    /**
     * 
     * @type {Default}
     * @memberof FunctionFileInput
     */
    'default'?: Default;
    /**
     * Optional description for input.
     * @type {string}
     * @memberof FunctionFileInput
     */
    'description'?: string;
    /**
     * Optional list of extensions for file. The check for extension is case-insensitive.
     * @type {Array<string>}
     * @memberof FunctionFileInput
     */
    'extensions'?: Array<string>;
    /**
     * Input name.
     * @type {string}
     * @memberof FunctionFileInput
     */
    'name': string;
    /**
     * Path to the target location that the input will be copied to.  This path is relative to the working directory where the command is executed.
     * @type {string}
     * @memberof FunctionFileInput
     */
    'path': string;
    /**
     * A field to indicate if this input is required. This input needs to be set explicitly even when a default value is provided.
     * @type {boolean}
     * @memberof FunctionFileInput
     */
    'required'?: boolean;
    /**
     * An optional JSON Schema specification to validate the input value. You can use validate_spec method to validate a value against the spec.
     * @type {object}
     * @memberof FunctionFileInput
     */
    'spec'?: object;
    /**
     * 
     * @type {string}
     * @memberof FunctionFileInput
     */
    'type'?: string;
}

