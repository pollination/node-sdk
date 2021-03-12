/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.12.2
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { InputReference } from './input-reference';
import { TaskReference } from './task-reference';
import { ValueListReference } from './value-list-reference';

/**
 * Loop configuration for the task.  This will run the template provided multiple times and in parallel relative to an input or task parameter which should be a list.
 * @export
 * @interface DAGTaskLoop
 */
export interface DAGTaskLoop {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGTaskLoop
     */
    annotations?: { [key: string]: string; };
    /**
     * The task or DAG parameter to loop over (must be iterable).
     * @type {InputReference | TaskReference | ValueListReference}
     * @memberof DAGTaskLoop
     */
    from?: InputReference | TaskReference | ValueListReference;
    /**
     * 
     * @type {string}
     * @memberof DAGTaskLoop
     */
    type?: string;
}


