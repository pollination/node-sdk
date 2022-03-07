/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.27.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DAGTaskLoop } from './dagtask-loop';
import { TaskArgument } from './task-argument';
import { TaskPathArgument } from './task-path-argument';
import { TaskPathReturn } from './task-path-return';
import { TaskReturn } from './task-return';

/**
 * A single task in a DAG flow.
 * @export
 * @interface DAGTask
 */
export interface DAGTask {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGTask
     */
    annotations?: { [key: string]: string; };
    /**
     * The input arguments for this task.
     * @type {Array<TaskArgument | TaskPathArgument>}
     * @memberof DAGTask
     */
    arguments?: Array<TaskArgument | TaskPathArgument>;
    /**
     * Loop configuration for this task.
     * @type {DAGTaskLoop}
     * @memberof DAGTask
     */
    loop?: DAGTaskLoop;
    /**
     * Name for this task. It must be unique in a DAG.
     * @type {string}
     * @memberof DAGTask
     */
    name: string;
    /**
     * List of DAG tasks that this task depends on and needs to be executed before this task.
     * @type {Array<string>}
     * @memberof DAGTask
     */
    needs?: Array<string>;
    /**
     * List of task returns.
     * @type {Array<TaskReturn | TaskPathReturn>}
     * @memberof DAGTask
     */
    returns?: Array<TaskReturn | TaskPathReturn>;
    /**
     * A path relative to the current folder context where artifacts should be saved. This is useful when performing a loop or invoking another workflow and wanting to save results in a specific sub_folder.
     * @type {string}
     * @memberof DAGTask
     */
    sub_folder?: string;
    /**
     * Template name. A template is a Function or a DAG. This template must be available in the dependencies.
     * @type {string}
     * @memberof DAGTask
     */
    template: string;
    /**
     * 
     * @type {string}
     * @memberof DAGTask
     */
    type?: string;
}


