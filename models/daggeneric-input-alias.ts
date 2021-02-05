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

/**
 * Base class for DAG Alias inputs.  This class adds a handler to input to handle the process of loading the input from different graphical interfaces.
 * @export
 * @interface DAGGenericInputAlias
 */
export interface DAGGenericInputAlias {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGGenericInputAlias
     */
    annotations?: { [key: string]: string; };
    /**
     * Default value for generic input.
     * @type {string}
     * @memberof DAGGenericInputAlias
     */
    _default?: string;
    /**
     * Optional description for input.
     * @type {string}
     * @memberof DAGGenericInputAlias
     */
    description?: string;
    /**
     * List of process actions to process the input or output value.
     * @type {Array<IOAliasHandler>}
     * @memberof DAGGenericInputAlias
     */
    handler: Array<IOAliasHandler>;
    /**
     * Input name.
     * @type {string}
     * @memberof DAGGenericInputAlias
     */
    name: string;
    /**
     * Name of the client platform (e.g. Grasshopper, Revit, etc). The value can be any strings as long as it has been agreed between client-side developer and author of the recipe.
     * @type {Array<string>}
     * @memberof DAGGenericInputAlias
     */
    platform: Array<string>;
    /**
     * A field to indicate if this input is required. This input needs to be set explicitly even when a default value is provided.
     * @type {boolean}
     * @memberof DAGGenericInputAlias
     */
    required?: boolean;
    /**
     * An optional JSON Schema specification to validate the input value. You can use validate_spec method to validate a value against the spec.
     * @type {object}
     * @memberof DAGGenericInputAlias
     */
    spec?: object;
    /**
     * 
     * @type {string}
     * @memberof DAGGenericInputAlias
     */
    type?: string;
}


