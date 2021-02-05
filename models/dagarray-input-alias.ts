/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.10.20
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { IOAliasHandler } from './ioalias-handler';
import { ItemType } from './item-type';

/**
 * A JSON array input.  You can add additional validation by defining a JSONSchema specification.  See http://json-schema.org/understanding-json-schema/reference/array.html for more information.
 * @export
 * @interface DAGArrayInputAlias
 */
export interface DAGArrayInputAlias {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGArrayInputAlias
     */
    annotations?: { [key: string]: string; };
    /**
     * Default value to use for an input if a value was not supplied.
     * @type {Array<any>}
     * @memberof DAGArrayInputAlias
     */
    _default?: Array<any>;
    /**
     * Optional description for input.
     * @type {string}
     * @memberof DAGArrayInputAlias
     */
    description?: string;
    /**
     * List of process actions to process the input or output value.
     * @type {Array<IOAliasHandler>}
     * @memberof DAGArrayInputAlias
     */
    handler: Array<IOAliasHandler>;
    /**
     * Type of items in an array. All the items in an array must be from the same type.
     * @type {ItemType}
     * @memberof DAGArrayInputAlias
     */
    items_type?: ItemType;
    /**
     * Input name.
     * @type {string}
     * @memberof DAGArrayInputAlias
     */
    name: string;
    /**
     * Name of the client platform (e.g. Grasshopper, Revit, etc). The value can be any strings as long as it has been agreed between client-side developer and author of the recipe.
     * @type {Array<string>}
     * @memberof DAGArrayInputAlias
     */
    platform: Array<string>;
    /**
     * A field to indicate if this input is required. This input needs to be set explicitly even when a default value is provided.
     * @type {boolean}
     * @memberof DAGArrayInputAlias
     */
    required?: boolean;
    /**
     * An optional JSON Schema specification to validate the input value. You can use validate_spec method to validate a value against the spec.
     * @type {object}
     * @memberof DAGArrayInputAlias
     */
    spec?: object;
    /**
     * 
     * @type {string}
     * @memberof DAGArrayInputAlias
     */
    type?: string;
}


