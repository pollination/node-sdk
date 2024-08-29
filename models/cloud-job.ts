/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.6.2
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { AccountPublic } from './account-public';
// May contain unused imports in some cases
// @ts-ignore
import type { Job } from './job';
// May contain unused imports in some cases
// @ts-ignore
import type { JobStatus } from './job-status';
// May contain unused imports in some cases
// @ts-ignore
import type { RecipeInterface } from './recipe-interface';
// May contain unused imports in some cases
// @ts-ignore
import type { ResourcesDuration } from './resources-duration';

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
    'author'?: AccountPublic;
    /**
     * The unique ID for this run
     * @type {string}
     * @memberof CloudJob
     */
    'id': string;
    /**
     * owner
     * @type {AccountPublic}
     * @memberof CloudJob
     */
    'owner'?: AccountPublic;
    /**
     * The recipe used to generate this 
     * @type {RecipeInterface}
     * @memberof CloudJob
     */
    'recipe'?: RecipeInterface;
    /**
     * CPU and Memory usage aggregated for all runs in this job
     * @type {ResourcesDuration}
     * @memberof CloudJob
     */
    'resources_duration'?: ResourcesDuration;
    /**
     * The job specification
     * @type {Job}
     * @memberof CloudJob
     */
    'spec': Job;
    /**
     * The status of the job
     * @type {JobStatus}
     * @memberof CloudJob
     */
    'status'?: JobStatus;
}

