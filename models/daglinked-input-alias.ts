/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.26.2
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { IOAliasHandler } from './ioalias-handler';

/**
 * An Alias for Linked Inputs.  A linked input alias will be hidden in the UI and will be linked to an object in  the UI using the input handler.
 * @export
 * @interface DAGLinkedInputAlias
 */
export interface DAGLinkedInputAlias {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGLinkedInputAlias
     */
    annotations?: { [key: string]: string; };
    /**
     * Default value for generic input.
     * @type {string}
     * @memberof DAGLinkedInputAlias
     */
    _default?: string;
    /**
     * Optional description for input.
     * @type {string}
     * @memberof DAGLinkedInputAlias
     */
    description?: string;
    /**
     * List of process actions to process the input or output value.
     * @type {Array<IOAliasHandler>}
     * @memberof DAGLinkedInputAlias
     */
    handler: Array<IOAliasHandler>;
    /**
     * Input name.
     * @type {string}
     * @memberof DAGLinkedInputAlias
     */
    name: string;
    /**
     * Name of the client platform (e.g. Grasshopper, Revit, etc). The value can be any strings as long as it has been agreed between client-side developer and author of the recipe.
     * @type {Array<string>}
     * @memberof DAGLinkedInputAlias
     */
    platform: Array<string>;
    /**
     * A field to indicate if this input is required. This input needs to be set explicitly even when a default value is provided.
     * @type {boolean}
     * @memberof DAGLinkedInputAlias
     */
    required?: boolean;
    /**
     * An optional JSON Schema specification to validate the input value. You can use validate_spec method to validate a value against the spec.
     * @type {object}
     * @memberof DAGLinkedInputAlias
     */
    spec?: object;
    /**
     * 
     * @type {string}
     * @memberof DAGLinkedInputAlias
     */
    type?: string;
}


