/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.4.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * A row in a report on job CPU usage
 * @export
 * @interface JobComputeUsage
 */
export interface JobComputeUsage {
    /**
     * 
     * @type {string}
     * @memberof JobComputeUsage
     */
    account_name: string;
    /**
     * 
     * @type {string}
     * @memberof JobComputeUsage
     */
    author_name: string;
    /**
     * 
     * @type {number}
     * @memberof JobComputeUsage
     */
    cpu_usage_hours: number;
    /**
     * 
     * @type {string}
     * @memberof JobComputeUsage
     */
    finished_at: string;
    /**
     * 
     * @type {string}
     * @memberof JobComputeUsage
     */
    job_id: string;
    /**
     * 
     * @type {string}
     * @memberof JobComputeUsage
     */
    project_name: string;
    /**
     * 
     * @type {string}
     * @memberof JobComputeUsage
     */
    recipe_name: string;
    /**
     * 
     * @type {number}
     * @memberof JobComputeUsage
     */
    runs_cancelled?: number;
    /**
     * 
     * @type {number}
     * @memberof JobComputeUsage
     */
    runs_failed?: number;
    /**
     * 
     * @type {number}
     * @memberof JobComputeUsage
     */
    runs_succeeded?: number;
    /**
     * 
     * @type {string}
     * @memberof JobComputeUsage
     */
    started_at: string;
}


