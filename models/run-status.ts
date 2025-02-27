/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.7.0
 * Contact: info@pollination.solutions
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { RunStatusEnum } from './run-status-enum';
// May contain unused imports in some cases
// @ts-ignore
import type { RunStatusInputsInner } from './run-status-inputs-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { RunStatusOutputsInner } from './run-status-outputs-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { StepStatus } from './step-status';

/**
 * Job Status.
 * @export
 * @interface RunStatus
 */
export interface RunStatus {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof RunStatus
     */
    'annotations'?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof RunStatus
     */
    'api_version'?: string;
    /**
     * The ID of the first step in the run.
     * @type {string}
     * @memberof RunStatus
     */
    'entrypoint'?: string;
    /**
     * The time at which the task was completed
     * @type {string}
     * @memberof RunStatus
     */
    'finished_at'?: string;
    /**
     * The ID of the individual run.
     * @type {string}
     * @memberof RunStatus
     */
    'id': string;
    /**
     * The inputs used for this run.
     * @type {Array<RunStatusInputsInner>}
     * @memberof RunStatus
     */
    'inputs': Array<RunStatusInputsInner>;
    /**
     * The ID of the job that generated this run.
     * @type {string}
     * @memberof RunStatus
     */
    'job_id': string;
    /**
     * Any message produced by the task. Usually error/debugging hints.
     * @type {string}
     * @memberof RunStatus
     */
    'message'?: string;
    /**
     * The outputs produced by this run.
     * @type {Array<RunStatusOutputsInner>}
     * @memberof RunStatus
     */
    'outputs': Array<RunStatusOutputsInner>;
    /**
     * Source url for the status object. It can be a recipe or a function.
     * @type {string}
     * @memberof RunStatus
     */
    'source'?: string;
    /**
     * The time at which the task was started
     * @type {string}
     * @memberof RunStatus
     */
    'started_at': string;
    /**
     * The status of this run.
     * @type {RunStatusEnum}
     * @memberof RunStatus
     */
    'status'?: RunStatusEnum;
    /**
     * 
     * @type {{ [key: string]: StepStatus; }}
     * @memberof RunStatus
     */
    'steps'?: { [key: string]: StepStatus; };
    /**
     * 
     * @type {string}
     * @memberof RunStatus
     */
    'type'?: string;
}



