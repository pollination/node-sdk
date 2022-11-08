/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.32.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { IOAliasHandler } from './ioalias-handler';

/**
 * An alias JSON object input.  JSON objects are similar to Python dictionaries.  You can add additional validation by defining a JSONSchema specification.  See http://json-schema.org/understanding-json-schema/reference/object.html for more information.
 * @export
 * @interface DAGJSONObjectInputAlias
 */
export interface DAGJSONObjectInputAlias {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGJSONObjectInputAlias
     */
    annotations?: { [key: string]: string; };
    /**
     * Default value to use for an input if a value was not supplied.
     * @type {object}
     * @memberof DAGJSONObjectInputAlias
     */
    _default?: object;
    /**
     * Optional description for input.
     * @type {string}
     * @memberof DAGJSONObjectInputAlias
     */
    description?: string;
    /**
     * List of process actions to process the input or output value.
     * @type {Array<IOAliasHandler>}
     * @memberof DAGJSONObjectInputAlias
     */
    handler: Array<IOAliasHandler>;
    /**
     * Input name.
     * @type {string}
     * @memberof DAGJSONObjectInputAlias
     */
    name: string;
    /**
     * Name of the client platform (e.g. Grasshopper, Revit, etc). The value can be any strings as long as it has been agreed between client-side developer and author of the recipe.
     * @type {Array<string>}
     * @memberof DAGJSONObjectInputAlias
     */
    platform: Array<string>;
    /**
     * A field to indicate if this input is required. This input needs to be set explicitly even when a default value is provided.
     * @type {boolean}
     * @memberof DAGJSONObjectInputAlias
     */
    required?: boolean;
    /**
     * An optional JSON Schema specification to validate the input value. You can use validate_spec method to validate a value against the spec.
     * @type {object}
     * @memberof DAGJSONObjectInputAlias
     */
    spec?: object;
    /**
     * 
     * @type {string}
     * @memberof DAGJSONObjectInputAlias
     */
    type?: string;
}


