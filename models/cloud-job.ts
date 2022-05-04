/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.30.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AccountPublic } from './account-public';
import { Job } from './job';
import { JobStatus } from './job-status';
import { RecipeInterface } from './recipe-interface';

/**
 * 
 * @export
 * @interface CloudJob
 */
export interface CloudJob {
    /**
     * author
     * @type {AccountPublic}
     * @memberof CloudJob
     */
    author?: AccountPublic;
    /**
     * The unique ID for this run
     * @type {string}
     * @memberof CloudJob
     */
    id: string;
    /**
     * owner
     * @type {AccountPublic}
     * @memberof CloudJob
     */
    owner?: AccountPublic;
    /**
     * The recipe used to generate this 
     * @type {RecipeInterface}
     * @memberof CloudJob
     */
    recipe?: RecipeInterface;
    /**
     * The job specification
     * @type {Job}
     * @memberof CloudJob
     */
    spec: Job;
    /**
     * The status of the job
     * @type {JobStatus}
     * @memberof CloudJob
     */
    status?: JobStatus;
}


