/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: 0.10.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { TaskStatus } from './task-status';

/**
 * Workflow Status
 * @export
 * @interface WorkflowStatus
 */
export interface WorkflowStatus {
    /**
     * The ID of the first task in the workflow
     * @type {string}
     * @memberof WorkflowStatus
     */
    entrypoint?: string;
    /**
     * The time at which the task was completed
     * @type {string}
     * @memberof WorkflowStatus
     */
    finished_at?: string;
    /**
     * The ID of the individual workflow run.
     * @type {string}
     * @memberof WorkflowStatus
     */
    id: string;
    /**
     * Any message produced by the task. Usually error/debugging hints.
     * @type {string}
     * @memberof WorkflowStatus
     */
    message?: string;
    /**
     * The time at which the task was started
     * @type {string}
     * @memberof WorkflowStatus
     */
    started_at: string;
    /**
     * The status of this task. Can be \"Running\", \"Succeeded\", \"Failed\" or \"Error\"
     * @type {string}
     * @memberof WorkflowStatus
     */
    status: string;
    /**
     * 
     * @type {{ [key: string]: TaskStatus; }}
     * @memberof WorkflowStatus
     */
    tasks?: { [key: string]: TaskStatus; };
}


