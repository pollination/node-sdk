/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.6.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { IOAliasHandler } from './ioalias-handler';

/**
 * An alias number input.  You can add additional validation by defining a JSONSchema specification.  See http://json-schema.org/understanding-json-schema/reference/numeric.html#numeric for more information.
 * @export
 * @interface DAGNumberInputAlias
 */
export interface DAGNumberInputAlias {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGNumberInputAlias
     */
    'annotations'?: { [key: string]: string; };
    /**
     * Default value to use for an input if a value was not supplied.
     * @type {number}
     * @memberof DAGNumberInputAlias
     */
    'default'?: number;
    /**
     * Optional description for input.
     * @type {string}
     * @memberof DAGNumberInputAlias
     */
    'description'?: string;
    /**
     * List of process actions to process the input or output value.
     * @type {Array<IOAliasHandler>}
     * @memberof DAGNumberInputAlias
     */
    'handler': Array<IOAliasHandler>;
    /**
     * Input name.
     * @type {string}
     * @memberof DAGNumberInputAlias
     */
    'name': string;
    /**
     * Name of the client platform (e.g. Grasshopper, Revit, etc). The value can be any strings as long as it has been agreed between client-side developer and author of the recipe.
     * @type {Array<string>}
     * @memberof DAGNumberInputAlias
     */
    'platform': Array<string>;
    /**
     * A field to indicate if this input is required. This input needs to be set explicitly even when a default value is provided.
     * @type {boolean}
     * @memberof DAGNumberInputAlias
     */
    'required'?: boolean;
    /**
     * An optional JSON Schema specification to validate the input value. You can use validate_spec method to validate a value against the spec.
     * @type {object}
     * @memberof DAGNumberInputAlias
     */
    'spec'?: object;
    /**
     * 
     * @type {string}
     * @memberof DAGNumberInputAlias
     */
    'type'?: string;
}

