/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.11.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Parametric Job Status.
 * @export
 * @interface JobStatus
 */
export interface JobStatus {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof JobStatus
     */
    annotations?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof JobStatus
     */
    api_version?: string;
    /**
     * The time at which the task was completed
     * @type {string}
     * @memberof JobStatus
     */
    finished_at?: string;
    /**
     * The ID of the individual job.
     * @type {string}
     * @memberof JobStatus
     */
    id: string;
    /**
     * Any message produced by the task. Usually error/debugging hints.
     * @type {string}
     * @memberof JobStatus
     */
    message?: string;
    /**
     * The count of runs that have completed
     * @type {number}
     * @memberof JobStatus
     */
    runs_completed?: number;
    /**
     * The count of runs that have failed
     * @type {number}
     * @memberof JobStatus
     */
    runs_failed?: number;
    /**
     * The count of runs that are pending
     * @type {number}
     * @memberof JobStatus
     */
    runs_pending?: number;
    /**
     * The count of runs that are running
     * @type {number}
     * @memberof JobStatus
     */
    runs_running?: number;
    /**
     * Source url for the status object. It can be a recipe or a function.
     * @type {string}
     * @memberof JobStatus
     */
    source?: string;
    /**
     * The time at which the task was started
     * @type {string}
     * @memberof JobStatus
     */
    started_at: string;
    /**
     * The status of this task. Can be \"Running\", \"Succeeded\", \"Failed\" or \"Error\"
     * @type {string}
     * @memberof JobStatus
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof JobStatus
     */
    type?: string;
}


