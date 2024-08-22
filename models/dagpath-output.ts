/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.6.1
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
import type { From2 } from './from2';

/**
 * DAG path output.
 * @export
 * @interface DAGPathOutput
 */
export interface DAGPathOutput {
    /**
     * A list of additional processes for loading this output on different platforms.
     * @type {Array<DAGArrayOutputAliasInner>}
     * @memberof DAGPathOutput
     */
    'alias'?: Array<DAGArrayOutputAliasInner>;
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGPathOutput
     */
    'annotations'?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof DAGPathOutput
     */
    'description'?: string;
    /**
     * 
     * @type {From2}
     * @memberof DAGPathOutput
     */
    'from': From2;
    /**
     * Output name.
     * @type {string}
     * @memberof DAGPathOutput
     */
    'name': string;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof DAGPathOutput
     */
    'required'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DAGPathOutput
     */
    'type'?: string;
}

