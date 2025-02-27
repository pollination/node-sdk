/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.7.0
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
 * A String input.
 * @export
 * @interface StepStringInput
 */
export interface StepStringInput {
    /**
     * A list of aliases for this input in different platforms.
     * @type {Array<DAGArrayInputAliasInner>}
     * @memberof StepStringInput
     */
    'alias'?: Array<DAGArrayInputAliasInner>;
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof StepStringInput
     */
    'annotations'?: { [key: string]: string; };
    /**
     * Default value to use for an input if a value was not supplied.
     * @type {string}
     * @memberof StepStringInput
     */
    'default'?: string;
    /**
     * Optional description for input.
     * @type {string}
     * @memberof StepStringInput
     */
    'description'?: string;
    /**
     * Input name.
     * @type {string}
     * @memberof StepStringInput
     */
    'name': string;
    /**
     * A field to indicate if this input is required. This input needs to be set explicitly even when a default value is provided.
     * @type {boolean}
     * @memberof StepStringInput
     */
    'required'?: boolean;
    /**
     * An optional JSON Schema specification to validate the input value. You can use validate_spec method to validate a value against the spec.
     * @type {object}
     * @memberof StepStringInput
     */
    'spec'?: object;
    /**
     * 
     * @type {string}
     * @memberof StepStringInput
     */
    'type'?: string;
    /**
     * 
     * @type {string}
     * @memberof StepStringInput
     */
    'value': string;
}

