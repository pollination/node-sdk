/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.7.2
 * Contact: info@pollination.solutions
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { DAGArrayOutputAliasInner } from './dagarray-output-alias-inner';

/**
 * DAG generic output.  In most cases, you should not be using the generic output unless you need a dynamic output that changes its type in different platforms because of returning different objects in handler.
 * @export
 * @interface DAGGenericOutput
 */
export interface DAGGenericOutput {
    /**
     * A list of additional processes for loading this output on different platforms.
     * @type {Array<DAGArrayOutputAliasInner>}
     * @memberof DAGGenericOutput
     */
    'alias'?: Array<DAGArrayOutputAliasInner>;
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGGenericOutput
     */
    'annotations'?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof DAGGenericOutput
     */
    'description'?: string;
    /**
     * 
     * @type {any}
     * @memberof DAGGenericOutput
     */
    'from': any;
    /**
     * Output name.
     * @type {string}
     * @memberof DAGGenericOutput
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof DAGGenericOutput
     */
    'type'?: string;
}

