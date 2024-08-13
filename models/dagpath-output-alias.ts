/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.5.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { From2 } from './from2';
// May contain unused imports in some cases
// @ts-ignore
import type { IOAliasHandler } from './ioalias-handler';

/**
 * DAG alias path output.
 * @export
 * @interface DAGPathOutputAlias
 */
export interface DAGPathOutputAlias {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGPathOutputAlias
     */
    'annotations'?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof DAGPathOutputAlias
     */
    'description'?: string;
    /**
     * 
     * @type {From2}
     * @memberof DAGPathOutputAlias
     */
    'from': From2;
    /**
     * List of process actions to process the input or output value.
     * @type {Array<IOAliasHandler>}
     * @memberof DAGPathOutputAlias
     */
    'handler': Array<IOAliasHandler>;
    /**
     * Output name.
     * @type {string}
     * @memberof DAGPathOutputAlias
     */
    'name': string;
    /**
     * Name of the client platform (e.g. Grasshopper, Revit, etc). The value can be any strings as long as it has been agreed between client-side developer and author of the recipe.
     * @type {Array<string>}
     * @memberof DAGPathOutputAlias
     */
    'platform': Array<string>;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof DAGPathOutputAlias
     */
    'required'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DAGPathOutputAlias
     */
    'type'?: string;
}

