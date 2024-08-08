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


import { DAGArrayOutputAliasInner } from './dagarray-output-alias-inner';
import { From } from './from';

/**
 * DAG string output.  This output loads the content from a file as a string.
 * @export
 * @interface DAGStringOutput
 */
export interface DAGStringOutput {
    /**
     * A list of additional processes for loading this output on different platforms.
     * @type {Array<DAGArrayOutputAliasInner>}
     * @memberof DAGStringOutput
     */
    alias?: Array<DAGArrayOutputAliasInner>;
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGStringOutput
     */
    annotations?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof DAGStringOutput
     */
    description?: string;
    /**
     * 
     * @type {From}
     * @memberof DAGStringOutput
     */
    from: From;
    /**
     * Output name.
     * @type {string}
     * @memberof DAGStringOutput
     */
    name: string;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof DAGStringOutput
     */
    required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DAGStringOutput
     */
    type?: string;
}


