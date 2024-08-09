/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.4.2
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { TaskPathReturn } from './task-path-return';
// May contain unused imports in some cases
// @ts-ignore
import type { TaskReturn } from './task-return';

/**
 * 
 * @export
 * @interface DAGTaskReturnsInner
 */
export interface DAGTaskReturnsInner {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGTaskReturnsInner
     */
    'annotations'?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof DAGTaskReturnsInner
     */
    'description'?: string;
    /**
     * Output name.
     * @type {string}
     * @memberof DAGTaskReturnsInner
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof DAGTaskReturnsInner
     */
    'type'?: string;
    /**
     * Path to the output artifact relative to where the function command is executed.
     * @type {string}
     * @memberof DAGTaskReturnsInner
     */
    'path': string;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof DAGTaskReturnsInner
     */
    'required'?: boolean;
}
