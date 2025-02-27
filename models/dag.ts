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
import type { DAGInputsInner } from './daginputs-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { DAGOutputsInner } from './dagoutputs-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { DAGTask } from './dagtask';

/**
 * A Directed Acyclic Graph containing a list of tasks.
 * @export
 * @interface DAG
 */
export interface DAG {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAG
     */
    'annotations'?: { [key: string]: string; };
    /**
     * Stop scheduling new steps, as soon as it detects that one of the DAG nodes is failed. Default is True.
     * @type {boolean}
     * @memberof DAG
     */
    'fail_fast'?: boolean;
    /**
     * Inputs for the DAG.
     * @type {Array<DAGInputsInner>}
     * @memberof DAG
     */
    'inputs'?: Array<DAGInputsInner>;
    /**
     * A unique name for this dag.
     * @type {string}
     * @memberof DAG
     */
    'name': string;
    /**
     * Outputs of the DAG that can be used by other DAGs.
     * @type {Array<DAGOutputsInner>}
     * @memberof DAG
     */
    'outputs'?: Array<DAGOutputsInner>;
    /**
     * Tasks are a list of DAG steps
     * @type {Array<DAGTask>}
     * @memberof DAG
     */
    'tasks': Array<DAGTask>;
    /**
     * 
     * @type {string}
     * @memberof DAG
     */
    'type'?: string;
}

