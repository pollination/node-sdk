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
// May contain unused imports in some cases
// @ts-ignore
import type { ItemType } from './item-type';
// May contain unused imports in some cases
// @ts-ignore
import type { Source } from './source';
// May contain unused imports in some cases
// @ts-ignore
import type { StepArrayInput } from './step-array-input';
// May contain unused imports in some cases
// @ts-ignore
import type { StepArrayOutput } from './step-array-output';
// May contain unused imports in some cases
// @ts-ignore
import type { StepBooleanInput } from './step-boolean-input';
// May contain unused imports in some cases
// @ts-ignore
import type { StepBooleanOutput } from './step-boolean-output';
// May contain unused imports in some cases
// @ts-ignore
import type { StepFileInput } from './step-file-input';
// May contain unused imports in some cases
// @ts-ignore
import type { StepFileOutput } from './step-file-output';
// May contain unused imports in some cases
// @ts-ignore
import type { StepFolderInput } from './step-folder-input';
// May contain unused imports in some cases
// @ts-ignore
import type { StepFolderOutput } from './step-folder-output';
// May contain unused imports in some cases
// @ts-ignore
import type { StepIntegerInput } from './step-integer-input';
// May contain unused imports in some cases
// @ts-ignore
import type { StepIntegerOutput } from './step-integer-output';
// May contain unused imports in some cases
// @ts-ignore
import type { StepJSONObjectInput } from './step-jsonobject-input';
// May contain unused imports in some cases
// @ts-ignore
import type { StepJSONObjectOutput } from './step-jsonobject-output';
// May contain unused imports in some cases
// @ts-ignore
import type { StepNumberInput } from './step-number-input';
// May contain unused imports in some cases
// @ts-ignore
import type { StepNumberOutput } from './step-number-output';
// May contain unused imports in some cases
// @ts-ignore
import type { StepPathInput } from './step-path-input';
// May contain unused imports in some cases
// @ts-ignore
import type { StepPathOutput } from './step-path-output';
// May contain unused imports in some cases
// @ts-ignore
import type { StepStringInput } from './step-string-input';
// May contain unused imports in some cases
// @ts-ignore
import type { StepStringOutput } from './step-string-output';

/**
 * 
 * @export
 * @interface RunResultListResourcesInnerInner
 */
export interface RunResultListResourcesInnerInner {
    /**
     * A list of aliases for this input in different platforms.
     * @type {Array<DAGArrayInputAliasInner>}
     * @memberof RunResultListResourcesInnerInner
     */
    'alias'?: Array<DAGArrayInputAliasInner>;
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof RunResultListResourcesInnerInner
     */
    'annotations'?: { [key: string]: string; };
    /**
     * Default value to use for an input if a value was not supplied.
     * @type {object}
     * @memberof RunResultListResourcesInnerInner
     */
    'default'?: object;
    /**
     * Optional description for output.
     * @type {string}
     * @memberof RunResultListResourcesInnerInner
     */
    'description'?: string;
    /**
     * Output name.
     * @type {string}
     * @memberof RunResultListResourcesInnerInner
     */
    'name': string;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof RunResultListResourcesInnerInner
     */
    'required'?: boolean;
    /**
     * An optional JSON Schema specification to validate the input value. You can use validate_spec method to validate a value against the spec.
     * @type {object}
     * @memberof RunResultListResourcesInnerInner
     */
    'spec'?: object;
    /**
     * 
     * @type {string}
     * @memberof RunResultListResourcesInnerInner
     */
    'type'?: string;
    /**
     * 
     * @type {object}
     * @memberof RunResultListResourcesInnerInner
     */
    'value': object;
    /**
     * Path to the output file relative to where the function command is executed.
     * @type {string}
     * @memberof RunResultListResourcesInnerInner
     */
    'path': string;
    /**
     * 
     * @type {Source}
     * @memberof RunResultListResourcesInnerInner
     */
    'source': Source;
    /**
     * Optional list of extensions for file. The check for extension is case-insensitive.
     * @type {Array<string>}
     * @memberof RunResultListResourcesInnerInner
     */
    'extensions'?: Array<string>;
    /**
     * Type of items in this array. All the items in an array must be from the same type.
     * @type {ItemType}
     * @memberof RunResultListResourcesInnerInner
     */
    'items_type'?: ItemType;
}


