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
import type { DAGArrayOutputAliasInner } from './dagarray-output-alias-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { From } from './from';
// May contain unused imports in some cases
// @ts-ignore
import type { ItemType } from './item-type';

/**
 * DAG array output.  This output loads the content from a JSON file which must be a JSON Array.
 * @export
 * @interface DAGArrayOutput
 */
export interface DAGArrayOutput {
    /**
     * A list of additional processes for loading this output on different platforms.
     * @type {Array<DAGArrayOutputAliasInner>}
     * @memberof DAGArrayOutput
     */
    'alias'?: Array<DAGArrayOutputAliasInner>;
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGArrayOutput
     */
    'annotations'?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof DAGArrayOutput
     */
    'description'?: string;
    /**
     * 
     * @type {From}
     * @memberof DAGArrayOutput
     */
    'from': From;
    /**
     * Type of items in this array. All the items in an array must be from the same type.
     * @type {ItemType}
     * @memberof DAGArrayOutput
     */
    'items_type'?: ItemType;
    /**
     * Output name.
     * @type {string}
     * @memberof DAGArrayOutput
     */
    'name': string;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof DAGArrayOutput
     */
    'required'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DAGArrayOutput
     */
    'type'?: string;
}



