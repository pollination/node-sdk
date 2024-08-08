/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.4.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DAGArrayInputAliasInner } from './dagarray-input-alias-inner';
import { ItemType } from './item-type';

/**
 * A JSON array input.  You can add additional validation by defining a JSONSchema specification.  See http://json-schema.org/understanding-json-schema/reference/array.html for more information.
 * @export
 * @interface DAGArrayInput
 */
export interface DAGArrayInput {
    /**
     * A list of aliases for this input in different platforms.
     * @type {Array<DAGArrayInputAliasInner>}
     * @memberof DAGArrayInput
     */
    alias?: Array<DAGArrayInputAliasInner>;
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGArrayInput
     */
    annotations?: { [key: string]: string; };
    /**
     * Default value to use for an input if a value was not supplied.
     * @type {Array<any>}
     * @memberof DAGArrayInput
     */
    _default?: Array<any>;
    /**
     * Optional description for input.
     * @type {string}
     * @memberof DAGArrayInput
     */
    description?: string;
    /**
     * Type of items in an array. All the items in an array must be from the same type.
     * @type {ItemType}
     * @memberof DAGArrayInput
     */
    items_type?: ItemType;
    /**
     * Input name.
     * @type {string}
     * @memberof DAGArrayInput
     */
    name: string;
    /**
     * A field to indicate if this input is required. This input needs to be set explicitly even when a default value is provided.
     * @type {boolean}
     * @memberof DAGArrayInput
     */
    required?: boolean;
    /**
     * An optional JSON Schema specification to validate the input value. You can use validate_spec method to validate a value against the spec.
     * @type {object}
     * @memberof DAGArrayInput
     */
    spec?: object;
    /**
     * 
     * @type {string}
     * @memberof DAGArrayInput
     */
    type?: string;
}




