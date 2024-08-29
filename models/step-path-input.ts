/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.6.2
 * Contact: info@pollination.cloud
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
// May contain unused imports in some cases
// @ts-ignore
import type { Source } from './source';

/**
 * A file or a folder input.
 * @export
 * @interface StepPathInput
 */
export interface StepPathInput {
    /**
     * A list of aliases for this input in different platforms.
     * @type {Array<DAGArrayInputAliasInner>}
     * @memberof StepPathInput
     */
    'alias'?: Array<DAGArrayInputAliasInner>;
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof StepPathInput
     */
    'annotations'?: { [key: string]: string; };
    /**
     * 
     * @type {Default}
     * @memberof StepPathInput
     */
    'default'?: Default;
    /**
     * Optional description for input.
     * @type {string}
     * @memberof StepPathInput
     */
    'description'?: string;
    /**
     * Optional list of extensions for file. The check for extension is case-insensitive.
     * @type {Array<string>}
     * @memberof StepPathInput
     */
    'extensions'?: Array<string>;
    /**
     * Input name.
     * @type {string}
     * @memberof StepPathInput
     */
    'name': string;
    /**
     * Path to the target location that the input will be copied to.  This path is relative to the working directory where the command is executed.
     * @type {string}
     * @memberof StepPathInput
     */
    'path'?: string;
    /**
     * A field to indicate if this input is required. This input needs to be set explicitly even when a default value is provided.
     * @type {boolean}
     * @memberof StepPathInput
     */
    'required'?: boolean;
    /**
     * 
     * @type {Source}
     * @memberof StepPathInput
     */
    'source': Source;
    /**
     * An optional JSON Schema specification to validate the input value. You can use validate_spec method to validate a value against the spec.
     * @type {object}
     * @memberof StepPathInput
     */
    'spec'?: object;
    /**
     * 
     * @type {string}
     * @memberof StepPathInput
     */
    'type'?: string;
}

