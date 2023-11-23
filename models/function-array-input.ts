/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.45.0
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
import { ItemType } from './item-type';

/**
 * A JSON array input.  You can add additional validation by defining a JSONSchema specification.  See http://json-schema.org/understanding-json-schema/reference/array.html for more information.
 * @export
 * @interface FunctionArrayInput
 */
export interface FunctionArrayInput {
    /**
     * A list of aliases for this input in different platforms.
     * @type {Array<DAGGenericInputAlias | DAGStringInputAlias | DAGIntegerInputAlias | DAGNumberInputAlias | DAGBooleanInputAlias | DAGFolderInputAlias | DAGFileInputAlias | DAGPathInputAlias | DAGArrayInputAlias | DAGJSONObjectInputAlias | DAGLinkedInputAlias>}
     * @memberof FunctionArrayInput
     */
    alias?: Array<DAGGenericInputAlias | DAGStringInputAlias | DAGIntegerInputAlias | DAGNumberInputAlias | DAGBooleanInputAlias | DAGFolderInputAlias | DAGFileInputAlias | DAGPathInputAlias | DAGArrayInputAlias | DAGJSONObjectInputAlias | DAGLinkedInputAlias>;
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof FunctionArrayInput
     */
    annotations?: { [key: string]: string; };
    /**
     * Default value to use for an input if a value was not supplied.
     * @type {Array<any>}
     * @memberof FunctionArrayInput
     */
    _default?: Array<any>;
    /**
     * Optional description for input.
     * @type {string}
     * @memberof FunctionArrayInput
     */
    description?: string;
    /**
     * Type of items in an array. All the items in an array must be from the same type.
     * @type {ItemType}
     * @memberof FunctionArrayInput
     */
    items_type?: ItemType;
    /**
     * Input name.
     * @type {string}
     * @memberof FunctionArrayInput
     */
    name: string;
    /**
     * A field to indicate if this input is required. This input needs to be set explicitly even when a default value is provided.
     * @type {boolean}
     * @memberof FunctionArrayInput
     */
    required?: boolean;
    /**
     * An optional JSON Schema specification to validate the input value. You can use validate_spec method to validate a value against the spec.
     * @type {object}
     * @memberof FunctionArrayInput
     */
    spec?: object;
    /**
     * 
     * @type {string}
     * @memberof FunctionArrayInput
     */
    type?: string;
}


