/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.5.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { DAGArrayOutputAlias } from './dagarray-output-alias';
// May contain unused imports in some cases
// @ts-ignore
import type { DAGBooleanOutputAlias } from './dagboolean-output-alias';
// May contain unused imports in some cases
// @ts-ignore
import type { DAGFileOutputAlias } from './dagfile-output-alias';
// May contain unused imports in some cases
// @ts-ignore
import type { DAGFolderOutputAlias } from './dagfolder-output-alias';
// May contain unused imports in some cases
// @ts-ignore
import type { DAGGenericOutputAlias } from './daggeneric-output-alias';
// May contain unused imports in some cases
// @ts-ignore
import type { DAGIntegerOutputAlias } from './daginteger-output-alias';
// May contain unused imports in some cases
// @ts-ignore
import type { DAGJSONObjectOutputAlias } from './dagjsonobject-output-alias';
// May contain unused imports in some cases
// @ts-ignore
import type { DAGLinkedOutputAlias } from './daglinked-output-alias';
// May contain unused imports in some cases
// @ts-ignore
import type { DAGNumberOutputAlias } from './dagnumber-output-alias';
// May contain unused imports in some cases
// @ts-ignore
import type { DAGPathOutputAlias } from './dagpath-output-alias';
// May contain unused imports in some cases
// @ts-ignore
import type { DAGStringOutputAlias } from './dagstring-output-alias';
// May contain unused imports in some cases
// @ts-ignore
import type { From } from './from';
// May contain unused imports in some cases
// @ts-ignore
import type { IOAliasHandler } from './ioalias-handler';
// May contain unused imports in some cases
// @ts-ignore
import type { ItemType } from './item-type';

/**
 * 
 * @export
 * @interface DAGArrayOutputAliasInner
 */
export interface DAGArrayOutputAliasInner {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGArrayOutputAliasInner
     */
    'annotations'?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof DAGArrayOutputAliasInner
     */
    'description'?: string;
    /**
     * List of process actions to process the input or output value.
     * @type {Array<IOAliasHandler>}
     * @memberof DAGArrayOutputAliasInner
     */
    'handler': Array<IOAliasHandler>;
    /**
     * Output name.
     * @type {string}
     * @memberof DAGArrayOutputAliasInner
     */
    'name': string;
    /**
     * Name of the client platform (e.g. Grasshopper, Revit, etc). The value can be any strings as long as it has been agreed between client-side developer and author of the recipe.
     * @type {Array<string>}
     * @memberof DAGArrayOutputAliasInner
     */
    'platform': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DAGArrayOutputAliasInner
     */
    'type'?: string;
    /**
     * 
     * @type {From}
     * @memberof DAGArrayOutputAliasInner
     */
    'from': From;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof DAGArrayOutputAliasInner
     */
    'required'?: boolean;
    /**
     * Type of items in this array. All the items in an array must be from the same type.
     * @type {ItemType}
     * @memberof DAGArrayOutputAliasInner
     */
    'items_type'?: ItemType;
}



