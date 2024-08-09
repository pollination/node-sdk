/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.4.2
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { DAGArrayInputAliasInner } from './dagarray-input-alias-inner';

/**
 * An integer input.
 * @export
 * @interface StepIntegerInput
 */
export interface StepIntegerInput {
    /**
     * A list of aliases for this input in different platforms.
     * @type {Array<DAGArrayInputAliasInner>}
     * @memberof StepIntegerInput
     */
    'alias'?: Array<DAGArrayInputAliasInner>;
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof StepIntegerInput
     */
    'annotations'?: { [key: string]: string; };
    /**
     * Default value to use for an input if a value was not supplied.
     * @type {number}
     * @memberof StepIntegerInput
     */
    'default'?: number;
    /**
     * Optional description for input.
     * @type {string}
     * @memberof StepIntegerInput
     */
    'description'?: string;
    /**
     * Input name.
     * @type {string}
     * @memberof StepIntegerInput
     */
    'name': string;
    /**
     * A field to indicate if this input is required. This input needs to be set explicitly even when a default value is provided.
     * @type {boolean}
     * @memberof StepIntegerInput
     */
    'required'?: boolean;
    /**
     * An optional JSON Schema specification to validate the input value. You can use validate_spec method to validate a value against the spec.
     * @type {object}
     * @memberof StepIntegerInput
     */
    'spec'?: object;
    /**
     * 
     * @type {string}
     * @memberof StepIntegerInput
     */
    'type'?: string;
    /**
     * 
     * @type {number}
     * @memberof StepIntegerInput
     */
    'value': number;
}

