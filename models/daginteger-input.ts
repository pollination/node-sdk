/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.35.0
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

/**
 * An integer input.  You can add additional validation by defining a JSONSchema specification.  See http://json-schema.org/understanding-json-schema/reference/numeric.html#numeric for more information.
 * @export
 * @interface DAGIntegerInput
 */
export interface DAGIntegerInput {
    /**
     * A list of aliases for this input in different platforms.
     * @type {Array<DAGGenericInputAlias | DAGStringInputAlias | DAGIntegerInputAlias | DAGNumberInputAlias | DAGBooleanInputAlias | DAGFolderInputAlias | DAGFileInputAlias | DAGPathInputAlias | DAGArrayInputAlias | DAGJSONObjectInputAlias | DAGLinkedInputAlias>}
     * @memberof DAGIntegerInput
     */
    alias?: Array<DAGGenericInputAlias | DAGStringInputAlias | DAGIntegerInputAlias | DAGNumberInputAlias | DAGBooleanInputAlias | DAGFolderInputAlias | DAGFileInputAlias | DAGPathInputAlias | DAGArrayInputAlias | DAGJSONObjectInputAlias | DAGLinkedInputAlias>;
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGIntegerInput
     */
    annotations?: { [key: string]: string; };
    /**
     * Default value to use for an input if a value was not supplied.
     * @type {number}
     * @memberof DAGIntegerInput
     */
    _default?: number;
    /**
     * Optional description for input.
     * @type {string}
     * @memberof DAGIntegerInput
     */
    description?: string;
    /**
     * Input name.
     * @type {string}
     * @memberof DAGIntegerInput
     */
    name: string;
    /**
     * A field to indicate if this input is required. This input needs to be set explicitly even when a default value is provided.
     * @type {boolean}
     * @memberof DAGIntegerInput
     */
    required?: boolean;
    /**
     * An optional JSON Schema specification to validate the input value. You can use validate_spec method to validate a value against the spec.
     * @type {object}
     * @memberof DAGIntegerInput
     */
    spec?: object;
    /**
     * 
     * @type {string}
     * @memberof DAGIntegerInput
     */
    type?: string;
}


