/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.4.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DAGArrayInputAlias } from './dagarray-input-alias';
import { DAGBooleanInputAlias } from './dagboolean-input-alias';
import { DAGFileInputAlias } from './dagfile-input-alias';
import { DAGFolderInputAlias } from './dagfolder-input-alias';
import { DAGGenericInputAlias } from './daggeneric-input-alias';
import { DAGIntegerInputAlias } from './daginteger-input-alias';
import { DAGJSONObjectInputAlias } from './dagjsonobject-input-alias';
import { DAGLinkedInputAlias } from './daglinked-input-alias';
import { DAGNumberInputAlias } from './dagnumber-input-alias';
import { DAGPathInputAlias } from './dagpath-input-alias';
import { DAGStringInputAlias } from './dagstring-input-alias';
import { IOAliasHandler } from './ioalias-handler';
import { ItemType } from './item-type';

/**
 * 
 * @export
 * @interface DAGArrayInputAliasInner
 */
export interface DAGArrayInputAliasInner {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGArrayInputAliasInner
     */
    annotations?: { [key: string]: string; };
    /**
     * Default value for generic input.
     * @type {string}
     * @memberof DAGArrayInputAliasInner
     */
    _default?: string;
    /**
     * Optional description for input.
     * @type {string}
     * @memberof DAGArrayInputAliasInner
     */
    description?: string;
    /**
     * List of process actions to process the input or output value.
     * @type {Array<IOAliasHandler>}
     * @memberof DAGArrayInputAliasInner
     */
    handler: Array<IOAliasHandler>;
    /**
     * Input name.
     * @type {string}
     * @memberof DAGArrayInputAliasInner
     */
    name: string;
    /**
     * Name of the client platform (e.g. Grasshopper, Revit, etc). The value can be any strings as long as it has been agreed between client-side developer and author of the recipe.
     * @type {Array<string>}
     * @memberof DAGArrayInputAliasInner
     */
    platform: Array<string>;
    /**
     * A field to indicate if this input is required. This input needs to be set explicitly even when a default value is provided.
     * @type {boolean}
     * @memberof DAGArrayInputAliasInner
     */
    required?: boolean;
    /**
     * An optional JSON Schema specification to validate the input value. You can use validate_spec method to validate a value against the spec.
     * @type {object}
     * @memberof DAGArrayInputAliasInner
     */
    spec?: object;
    /**
     * 
     * @type {string}
     * @memberof DAGArrayInputAliasInner
     */
    type?: string;
    /**
     * Optional list of extensions for path. The check for extension is case-insensitive. The extension will only be validated for file inputs.
     * @type {Array<string>}
     * @memberof DAGArrayInputAliasInner
     */
    extensions?: Array<string>;
    /**
     * Type of items in an array. All the items in an array must be from the same type.
     * @type {ItemType}
     * @memberof DAGArrayInputAliasInner
     */
    items_type?: ItemType;
}




