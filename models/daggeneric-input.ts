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

/**
 * Base class for DAG inputs.  This class adds a handler to input to handle the process of loading the input from different graphical interfaces.
 * @export
 * @interface DAGGenericInput
 */
export interface DAGGenericInput {
    /**
     * A list of aliases for this input in different platforms.
     * @type {Array<DAGArrayInputAliasInner>}
     * @memberof DAGGenericInput
     */
    'alias'?: Array<DAGArrayInputAliasInner>;
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGGenericInput
     */
    'annotations'?: { [key: string]: string; };
    /**
     * Default value for generic input.
     * @type {string}
     * @memberof DAGGenericInput
     */
    'default'?: string;
    /**
     * Optional description for input.
     * @type {string}
     * @memberof DAGGenericInput
     */
    'description'?: string;
    /**
     * Input name.
     * @type {string}
     * @memberof DAGGenericInput
     */
    'name': string;
    /**
     * A field to indicate if this input is required. This input needs to be set explicitly even when a default value is provided.
     * @type {boolean}
     * @memberof DAGGenericInput
     */
    'required'?: boolean;
    /**
     * An optional JSON Schema specification to validate the input value. You can use validate_spec method to validate a value against the spec.
     * @type {object}
     * @memberof DAGGenericInput
     */
    'spec'?: object;
    /**
     * 
     * @type {string}
     * @memberof DAGGenericInput
     */
    'type'?: string;
}

