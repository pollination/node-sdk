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
import type { DAGArrayInput } from './dagarray-input';
// May contain unused imports in some cases
// @ts-ignore
import type { DAGArrayInputAliasInner } from './dagarray-input-alias-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { DAGBooleanInput } from './dagboolean-input';
// May contain unused imports in some cases
// @ts-ignore
import type { DAGFileInput } from './dagfile-input';
// May contain unused imports in some cases
// @ts-ignore
import type { DAGFolderInput } from './dagfolder-input';
// May contain unused imports in some cases
// @ts-ignore
import type { DAGGenericInput } from './daggeneric-input';
// May contain unused imports in some cases
// @ts-ignore
import type { DAGIntegerInput } from './daginteger-input';
// May contain unused imports in some cases
// @ts-ignore
import type { DAGJSONObjectInput } from './dagjsonobject-input';
// May contain unused imports in some cases
// @ts-ignore
import type { DAGNumberInput } from './dagnumber-input';
// May contain unused imports in some cases
// @ts-ignore
import type { DAGPathInput } from './dagpath-input';
// May contain unused imports in some cases
// @ts-ignore
import type { DAGStringInput } from './dagstring-input';
// May contain unused imports in some cases
// @ts-ignore
import type { ItemType } from './item-type';

/**
 * 
 * @export
 * @interface DAGInputsInner
 */
export interface DAGInputsInner {
    /**
     * A list of aliases for this input in different platforms.
     * @type {Array<DAGArrayInputAliasInner>}
     * @memberof DAGInputsInner
     */
    'alias'?: Array<DAGArrayInputAliasInner>;
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGInputsInner
     */
    'annotations'?: { [key: string]: string; };
    /**
     * Default value to use for an input if a value was not supplied.
     * @type {object}
     * @memberof DAGInputsInner
     */
    'default'?: object;
    /**
     * Optional description for input.
     * @type {string}
     * @memberof DAGInputsInner
     */
    'description'?: string;
    /**
     * Input name.
     * @type {string}
     * @memberof DAGInputsInner
     */
    'name': string;
    /**
     * A field to indicate if this input is required. This input needs to be set explicitly even when a default value is provided.
     * @type {boolean}
     * @memberof DAGInputsInner
     */
    'required'?: boolean;
    /**
     * An optional JSON Schema specification to validate the input value. You can use validate_spec method to validate a value against the spec.
     * @type {object}
     * @memberof DAGInputsInner
     */
    'spec'?: object;
    /**
     * 
     * @type {string}
     * @memberof DAGInputsInner
     */
    'type'?: string;
    /**
     * Optional list of extensions for path. The check for extension is case-insensitive. The extension will only be validated for file inputs.
     * @type {Array<string>}
     * @memberof DAGInputsInner
     */
    'extensions'?: Array<string>;
    /**
     * Type of items in an array. All the items in an array must be from the same type.
     * @type {ItemType}
     * @memberof DAGInputsInner
     */
    'items_type'?: ItemType;
}



