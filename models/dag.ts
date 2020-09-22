/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: 0.0.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DAGInputs } from './daginputs';
import { DAGOutputs } from './dagoutputs';
import { DAGTask } from './dagtask';

/**
 * A Directed Acyclic Graph containing a list of tasks.
 * @export
 * @interface DAG
 */
export interface DAG {
    /**
     * Stop scheduling new steps, as soon as it detects that one of the DAG nodes is failed. Default is True.
     * @type {boolean}
     * @memberof DAG
     */
    fail_fast?: boolean;
    /**
     * Inputs for the DAG.
     * @type {DAGInputs}
     * @memberof DAG
     */
    inputs?: DAGInputs;
    /**
     * A unique name for this dag.
     * @type {string}
     * @memberof DAG
     */
    name: string;
    /**
     * Outputs of the DAG that can be used by other DAGs
     * @type {DAGOutputs}
     * @memberof DAG
     */
    outputs?: DAGOutputs;
    /**
     * Tasks are a list of DAG steps
     * @type {Array<DAGTask>}
     * @memberof DAG
     */
    tasks: Array<DAGTask>;
}


