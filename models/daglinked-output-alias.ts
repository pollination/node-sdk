/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.22.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { IOAliasHandler } from './ioalias-handler';

/**
 * An Alias for Linked Outputs.  A linked output alias will be translated to an object in the UI and stay linked to it.
 * @export
 * @interface DAGLinkedOutputAlias
 */
export interface DAGLinkedOutputAlias {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGLinkedOutputAlias
     */
    annotations?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof DAGLinkedOutputAlias
     */
    description?: string;
    /**
     * List of process actions to process the input or output value.
     * @type {Array<IOAliasHandler>}
     * @memberof DAGLinkedOutputAlias
     */
    handler: Array<IOAliasHandler>;
    /**
     * Output name.
     * @type {string}
     * @memberof DAGLinkedOutputAlias
     */
    name: string;
    /**
     * Name of the client platform (e.g. Grasshopper, Revit, etc). The value can be any strings as long as it has been agreed between client-side developer and author of the recipe.
     * @type {Array<string>}
     * @memberof DAGLinkedOutputAlias
     */
    platform: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DAGLinkedOutputAlias
     */
    type?: string;
}


