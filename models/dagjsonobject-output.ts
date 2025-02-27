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
import type { DAGArrayOutputAliasInner } from './dagarray-output-alias-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { From } from './from';

/**
 * DAG object output.  This output loads the content from a file as a JSON object.
 * @export
 * @interface DAGJSONObjectOutput
 */
export interface DAGJSONObjectOutput {
    /**
     * A list of additional processes for loading this output on different platforms.
     * @type {Array<DAGArrayOutputAliasInner>}
     * @memberof DAGJSONObjectOutput
     */
    'alias'?: Array<DAGArrayOutputAliasInner>;
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGJSONObjectOutput
     */
    'annotations'?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof DAGJSONObjectOutput
     */
    'description'?: string;
    /**
     * 
     * @type {From}
     * @memberof DAGJSONObjectOutput
     */
    'from': From;
    /**
     * Output name.
     * @type {string}
     * @memberof DAGJSONObjectOutput
     */
    'name': string;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof DAGJSONObjectOutput
     */
    'required'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DAGJSONObjectOutput
     */
    'type'?: string;
}

