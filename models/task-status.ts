/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: 0.9.2
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Arguments } from './arguments';
import { StatusType } from './status-type';

/**
 * The Status of a Workflow Task
 * @export
 * @interface TaskStatus
 */
export interface TaskStatus {
    /**
     * This indicates the task ID of the associated template root             task in which this task belongs to. A DAG task will have the id of the             parent DAG for example.
     * @type {string}
     * @memberof TaskStatus
     */
    boundaryId?: string;
    /**
     * A list of child task IDs
     * @type {Array<string>}
     * @memberof TaskStatus
     */
    children: Array<string>;
    /**
     * The command used to run this task. Only applies to Function tasks.
     * @type {string}
     * @memberof TaskStatus
     */
    command?: string;
    /**
     * The time at which the task was completed
     * @type {Date}
     * @memberof TaskStatus
     */
    finishedAt?: Date;
    /**
     * The task unique ID
     * @type {string}
     * @memberof TaskStatus
     */
    id: string;
    /**
     * The inputs used by this task
     * @type {Arguments}
     * @memberof TaskStatus
     */
    inputs: Arguments;
    /**
     * Any message produced by the task. Usually error/debugging hints.
     * @type {string}
     * @memberof TaskStatus
     */
    message?: string;
    /**
     * A human readable name for the task. Usually defined by the DAG task name but can be extended if the task is part of a loop for example. This name is unique within the boundary of the DAG/Workflow that generated it.
     * @type {string}
     * @memberof TaskStatus
     */
    name: string;
    /**
     * A list of the last tasks to ran in the context of this task. In the case of a DAG or a workflow this will be the last task that has been executed. It will remain empty for functions.
     * @type {Array<string>}
     * @memberof TaskStatus
     */
    outboundTasks: Array<string>;
    /**
     * The outputs produced by this task
     * @type {Arguments}
     * @memberof TaskStatus
     */
    outputs: Arguments;
    /**
     * The time at which the task was started
     * @type {Date}
     * @memberof TaskStatus
     */
    startedAt: Date;
    /**
     * The status of this task. Can be \"Running\", \"Succeeded\", \"Failed\" or \"Error\"
     * @type {string}
     * @memberof TaskStatus
     */
    status: string;
    /**
     * The name of the template that spawned this task
     * @type {string}
     * @memberof TaskStatus
     */
    templateRef: string;
    /**
     * 
     * @type {StatusType}
     * @memberof TaskStatus
     */
    type: StatusType;
}


