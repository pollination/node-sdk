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

/**
 * A number input.
 * @export
 * @interface StepNumberInput
 */
export interface StepNumberInput {
    /**
     * A list of aliases for this input in different platforms.
     * @type {Array<DAGArrayInputAliasInner>}
     * @memberof StepNumberInput
     */
    alias?: Array<DAGArrayInputAliasInner>;
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof StepNumberInput
     */
    annotations?: { [key: string]: string; };
    /**
     * Default value to use for an input if a value was not supplied.
     * @type {number}
     * @memberof StepNumberInput
     */
    _default?: number;
    /**
     * Optional description for input.
     * @type {string}
     * @memberof StepNumberInput
     */
    description?: string;
    /**
     * Input name.
     * @type {string}
     * @memberof StepNumberInput
     */
    name: string;
    /**
     * A field to indicate if this input is required. This input needs to be set explicitly even when a default value is provided.
     * @type {boolean}
     * @memberof StepNumberInput
     */
    required?: boolean;
    /**
     * An optional JSON Schema specification to validate the input value. You can use validate_spec method to validate a value against the spec.
     * @type {object}
     * @memberof StepNumberInput
     */
    spec?: object;
    /**
     * 
     * @type {string}
     * @memberof StepNumberInput
     */
    type?: string;
    /**
     * 
     * @type {number}
     * @memberof StepNumberInput
     */
    value: number;
}


