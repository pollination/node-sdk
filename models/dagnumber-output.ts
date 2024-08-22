/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.6.0
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

/**
 * DAG number output.  This output loads the content from a file as a floating number.
 * @export
 * @interface DAGNumberOutput
 */
export interface DAGNumberOutput {
    /**
     * A list of additional processes for loading this output on different platforms.
     * @type {Array<DAGArrayOutputAliasInner>}
     * @memberof DAGNumberOutput
     */
    'alias'?: Array<DAGArrayOutputAliasInner>;
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGNumberOutput
     */
    'annotations'?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof DAGNumberOutput
     */
    'description'?: string;
    /**
     * 
     * @type {From}
     * @memberof DAGNumberOutput
     */
    'from': From;
    /**
     * Output name.
     * @type {string}
     * @memberof DAGNumberOutput
     */
    'name': string;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof DAGNumberOutput
     */
    'required'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DAGNumberOutput
     */
    'type'?: string;
}

