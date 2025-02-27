/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.7.1
 * Contact: info@pollination.solutions
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { From } from './from';
// May contain unused imports in some cases
// @ts-ignore
import type { IOAliasHandler } from './ioalias-handler';

/**
 * DAG alias object output.  This output loads the content from a file as a JSON object.
 * @export
 * @interface DAGJSONObjectOutputAlias
 */
export interface DAGJSONObjectOutputAlias {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGJSONObjectOutputAlias
     */
    'annotations'?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof DAGJSONObjectOutputAlias
     */
    'description'?: string;
    /**
     * 
     * @type {From}
     * @memberof DAGJSONObjectOutputAlias
     */
    'from': From;
    /**
     * List of process actions to process the input or output value.
     * @type {Array<IOAliasHandler>}
     * @memberof DAGJSONObjectOutputAlias
     */
    'handler': Array<IOAliasHandler>;
    /**
     * Output name.
     * @type {string}
     * @memberof DAGJSONObjectOutputAlias
     */
    'name': string;
    /**
     * Name of the client platform (e.g. Grasshopper, Revit, etc). The value can be any strings as long as it has been agreed between client-side developer and author of the recipe.
     * @type {Array<string>}
     * @memberof DAGJSONObjectOutputAlias
     */
    'platform': Array<string>;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof DAGJSONObjectOutputAlias
     */
    'required'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DAGJSONObjectOutputAlias
     */
    'type'?: string;
}

