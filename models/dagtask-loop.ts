/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: v0.9.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { InputParameterReference } from './input-parameter-reference';
import { TaskParameterReference } from './task-parameter-reference';

/**
 * Loop configuration for the task.  This will run the template provided multiple times and in parallel relative to an input or task parameter which should be a list.
 * @export
 * @interface DAGTaskLoop
 */
export interface DAGTaskLoop {
    /**
     * The task or DAG parameter to loop over (must be iterable).
     * @type {InputParameterReference | TaskParameterReference}
     * @memberof DAGTaskLoop
     */
    from?: InputParameterReference | TaskParameterReference;
    /**
     * A list of values or JSON objects to loop over.
     * @type {Array<string | number | object>}
     * @memberof DAGTaskLoop
     */
    value?: Array<string | number | object>;
}


